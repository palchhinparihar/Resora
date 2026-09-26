import { researchResources } from "./research-resources.js";
import { computerScienceJournals } from "./computer-science-journals.js";
import { researchGuides } from "./guides.js";
import { areas } from "./areas.js";

const topic = new URLSearchParams(window.location.search).get("topic");
const area = areas[topic] || areas["artificial-intelligence"];

const normalize = (value) => value.toLowerCase();
const matchesArea = (values) => values.some((value) => area.matches.includes(normalize(value)));

function renderResult(container, items, type, getTitle, getDescription, getTags, getLink, emptyMessage) {
  if (!items.length) {
    container.innerHTML = `<p class="area-empty">${emptyMessage}</p>`;
    return;
  }

  container.innerHTML = items.slice(0, 4).map((item) => `
    <article class="area-result">
      <small>${type}</small>
      <h3>${getTitle(item)}</h3>
      <p>${getDescription(item)}</p>
      <div class="resource-fields">${getTags(item).slice(0, 3).map((tag) => `<span>${tag}</span>`).join("")}</div>
      <a href="${getLink(item)}" target="_blank" rel="noopener noreferrer">Open this trail <i class="fa-solid fa-arrow-up-right-from-square" aria-hidden="true"></i></a>
    </article>
  `).join("");
}

document.title = `${area.name} | Resora`;
document.getElementById("area-title").textContent = area.name;
document.getElementById("area-intro").textContent = area.intro;
document.getElementById("area-description").textContent = area.description;

const matchingResources = researchResources.filter((resource) => matchesArea(resource.fields));
const matchingJournals = computerScienceJournals.filter((journal) => matchesArea(journal.fields));

renderResult(
  document.getElementById("guide-results"),
  researchGuides,
  "Research practice",
  (guide) => guide.title,
  (guide) => guide.description,
  (guide) => guide.topics,
  (guide) => guide.website,
  "The shared research fundamentals are a good place to begin."
);
renderResult(
  document.getElementById("resource-results"),
  matchingResources,
  "Resource",
  (resource) => resource.name,
  (resource) => resource.description,
  (resource) => resource.fields,
  (resource) => resource.website,
  "The shelf is still growing for this area."
);
renderResult(
  document.getElementById("journal-results"),
  matchingJournals,
  "Journal",
  (journal) => journal.name,
  (journal) => journal.description,
  (journal) => journal.fields,
  (journal) => journal.website,
  "Start with the resources above, then follow their citations into the field."
);
