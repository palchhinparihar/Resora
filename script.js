import { researchResources } from "./research-resources.js";
import { computerScienceJournals } from "./computer-science-journals.js";
import { researchGuides } from "./guides.js";

// Cache the page elements used by rendering, filtering, and event handlers.
const resourceContainer = document.getElementById("resource-container");
const journalList = document.getElementById("journal-list");
const guideList = document.getElementById("guide-list");
const searchInput = document.getElementById("search-input");
const categoryButtons = document.querySelectorAll(".category-btn");
const resourceCount = document.getElementById("resource-count");
const clearFiltersButton = document.getElementById("clear-filters");

// Keep the full curated resource collection available to the page.
const visibleResources = researchResources;

let currentCategory = "All";

// Resource rendering: shared markup helpers and the main resource card list.
function createTags(items) {
  return items.map((item) => `<span>${item}</span>`).join("");
}

function getCapabilityTerms(capabilities) {
  return Object.entries(capabilities)
    .filter(([, enabled]) => enabled)
    .map(([capability]) => capability)
    .join(" ");
}

function displayResources(resources) {
  resourceContainer.innerHTML = "";
  resourceCount.textContent = `Showing ${resources.length} of ${visibleResources.length} resources`;

  // Show a clear state when the active search and category filters match nothing.
  if (resources.length === 0) {
    resourceContainer.innerHTML = `
      <div class="no-results">
        <h3>Nothing matched your search.</h3>
        <p>Try:</p>
        <ul>
          <li>a broader keyword</li>
          <li>another research field</li>
          <li>removing a category filter</li>
        </ul>
      </div>
    `;

    return;
  }

  resources.forEach((resource) => {
    const card = document.createElement("article");

    card.className = "resource-card";

    card.innerHTML = `
      <i class="fa-solid fa-sparkles card-mark" aria-hidden="true"></i>
      <div class="resource-header">
        <span class="resource-type">
          ${resource.type}
        </span>

        <h3>${resource.name}</h3>
      </div>

      <p class="resource-description">
        ${resource.description}
      </p>

      <div class="resource-fields">
        ${createTags(resource.fields)}
      </div>

      <div class="resource-info">
        <span>Access: ${resource.access}</span>
        <span>${resource.category}</span>
      </div>

      <div class="resource-actions">
        <a
          href="${resource.website}"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Website <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
        </a>
      </div>
    `;

    resourceContainer.appendChild(card);
  });
}

// Journal rendering: build the journal cards shown in the field section.
function displayJournals(journals) {
  journalList.innerHTML = "";
  journalList.classList.toggle("has-content", journals.length > 0);

  journals.forEach((journal) => {
    const card = document.createElement("article");

    card.className = "journal-card";

    card.innerHTML = `
      <i class="fa-solid fa-sparkles card-mark" aria-hidden="true"></i>
      <div class="journal-header">
        <span class="resource-type">${journal.acronym}</span>
        <h3>${journal.name}</h3>
      </div>

      <p class="resource-description">
        ${journal.description}
      </p>

      <div class="resource-fields">
        ${createTags(journal.fields)}
      </div>

      <div class="resource-actions">
        <a href="${journal.website}" target="_blank" rel="noopener noreferrer">
          Visit Journal <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
        </a>
      </div>
    `;

    journalList.appendChild(card);
  });
}

// Guide rendering: build practical research guide cards.
function displayGuides(guides) {
  guideList.innerHTML = "";
  guideList.classList.toggle("has-content", guides.length > 0);

  guides.forEach((guide) => {
    const card = document.createElement("article");

    card.className = "guide-card";

    card.innerHTML = `
      <i class="fa-solid fa-sparkles card-mark" aria-hidden="true"></i>
      <div class="guide-header">
        <span class="resource-type">${guide.type}</span>
        <h3>${guide.title}</h3>
      </div>

      <p class="resource-description">
        ${guide.description}
      </p>

      <div class="resource-fields">
        ${createTags(guide.topics)}
      </div>

      <div class="guide-info">
        <span>${guide.readTime}</span>
      </div>

      <div class="resource-actions">
        <a href="${guide.website}" target="_blank" rel="noopener noreferrer">
          Read Guide <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i>
        </a>
      </div>
    `;

    guideList.appendChild(card);
  });
}

// Filtering: apply the selected category and the free-text search together.
function filterResources() {
  // Normalize input so searches are case-insensitive and ignore extra spaces.
  const searchText = searchInput.value.toLowerCase().trim();

  const filteredResources = visibleResources.filter((resource) => {
    const matchesCategory =
      currentCategory === "All" ||
      resource.category === currentCategory;

    const searchableText = `
      ${resource.name}
      ${resource.category}
      ${resource.type}
      ${resource.description}
      ${resource.fields.join(" ")}
      ${resource.bestFor.join(" ")}
      ${getCapabilityTerms(resource.capabilities)}
    `.toLowerCase();

    const matchesSearch = searchableText.includes(searchText);

    return matchesCategory && matchesSearch;
  });

  displayResources(filteredResources);
}

// Events: update active state and refresh the resource list when controls change.
categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    categoryButtons.forEach((btn) => {
      btn.classList.remove("active");
    });

    button.classList.add("active");

    currentCategory = button.dataset.category;

    filterResources();
  });
});

searchInput.addEventListener("input", filterResources);

clearFiltersButton.addEventListener("click", () => {
  searchInput.value = "";
  currentCategory = "All";

  categoryButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.category === "All");
  });

  filterResources();
  searchInput.focus();
});

// Initialization: render the complete page using the imported datasets.
displayResources(visibleResources);
displayJournals(computerScienceJournals);
displayGuides(researchGuides);