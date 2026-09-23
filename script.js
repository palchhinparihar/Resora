import { researchResources } from "./research-resources.js";
import { computerScienceJournals } from "./computer-science-journals.js";

const resourceContainer = document.getElementById("resource-container");
const journalList = document.getElementById("journal-list");
const searchInput = document.getElementById("search-input");
const categoryButtons = document.querySelectorAll(".category-btn");

let currentCategory = "All";

function displayResources(resources) {
  resourceContainer.innerHTML = "";

  if (resources.length === 0) {
    resourceContainer.innerHTML = `
      <p class="no-results">
        No research resources found.
      </p>
    `;

    return;
  }

  resources.forEach((resource) => {
    const card = document.createElement("article");

    card.className = "resource-card";

    card.innerHTML = `
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
        ${resource.fields
          .map((field) => `<span>${field}</span>`)
          .join("")}
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
          Visit Website →
        </a>
      </div>
    `;

    resourceContainer.appendChild(card);
  });
}


function displayJournals(journals) {
  journalList.innerHTML = "";
  journalList.classList.toggle("has-content", journals.length > 0);

  journals.forEach((journal) => {
    const card = document.createElement("article");

    card.className = "journal-card";

    card.innerHTML = `
      <div class="journal-header">
        <span class="resource-type">${journal.acronym}</span>
        <h3>${journal.name}</h3>
      </div>

      <p class="resource-description">
        ${journal.description}
      </p>

      <div class="resource-fields">
        ${journal.fields.map((field) => `<span>${field}</span>`).join("")}
      </div>

      <div class="resource-actions">
        <a href="${journal.website}" target="_blank" rel="noopener noreferrer">
          Visit Journal →
        </a>
      </div>
    `;

    journalList.appendChild(card);
  });
}


function filterResources() {
  const searchText = searchInput.value.toLowerCase().trim();

  const filteredResources = researchResources.filter((resource) => {
    const matchesCategory =
      currentCategory === "All" ||
      resource.category === currentCategory;

    const searchableText = `
      ${resource.name}
      ${resource.category}
      ${resource.type}
      ${resource.description}
      ${resource.fields.join(" ")}
      ${resource.useCases.join(" ")}
    `.toLowerCase();

    const matchesSearch = searchableText.includes(searchText);

    return matchesCategory && matchesSearch;
  });

  displayResources(filteredResources);
}


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


displayResources(researchResources);
displayJournals(computerScienceJournals);