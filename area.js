import { researchResources } from "./research-resources.js";
import { computerScienceJournals } from "./computer-science-journals.js";
import { researchGuides } from "./guides.js";

const areas = {
  "artificial-intelligence": {
    name: "Artificial Intelligence",
    intro: "A wide field about building systems that perceive, reason, learn, and act. Begin broad, then follow the questions that feel most human or most difficult.",
    description: "AI stretches across learning, language, vision, robotics, and intelligent systems. Look for a small, observable problem and pay attention to the assumptions hidden inside the word intelligent.",
    matches: ["artificial intelligence", "ai", "machine learning", "computer vision", "natural language processing"]
  },
  "machine-learning": {
    name: "Machine Learning",
    intro: "A way of asking how systems can improve from examples, and what it means for those examples, models, and measurements to be trustworthy.",
    description: "Machine learning research moves between algorithms, data, evaluation, and real-world use. A strong first question usually names the task, the evidence, and how success will be judged.",
    matches: ["machine learning", "ai", "statistics"]
  },
  "computer-vision": {
    name: "Computer Vision",
    intro: "The study of how machines interpret images and video, from recognizing objects to understanding movement, space, and context.",
    description: "Vision connects perception with action. Explore the difference between detecting what is present and understanding what is happening, then examine the data and measurements behind each claim.",
    matches: ["computer vision", "ai", "machine learning"]
  },
  cybersecurity: {
    name: "Cybersecurity",
    intro: "A field concerned with protecting people, systems, and information while thinking clearly about risk, trust, and the ways systems fail.",
    description: "Cybersecurity spans software, networks, privacy, human behavior, and policy. Start with a system and a threat, then ask what a useful defense would need to prove.",
    matches: ["cybersecurity", "computer security", "systems", "software"]
  },
  "data-science": {
    name: "Data Science",
    intro: "The practice of turning messy evidence into useful understanding through statistics, computation, visualization, and careful judgment.",
    description: "Data science is as much about framing and cleaning as it is about models. Trace where the data came from, what it leaves out, and which decision the analysis should support.",
    matches: ["data science", "data mining", "statistics", "databases", "data management"]
  },
  "software-engineering": {
    name: "Software Engineering",
    intro: "The study and practice of building software that remains useful, understandable, and dependable as people and systems change.",
    description: "Software engineering research looks at the whole life of a system: design, construction, testing, maintenance, teams, and trade-offs. Real constraints are often where the best questions appear.",
    matches: ["software engineering", "software", "systems", "computing"]
  },
  "web-technologies": {
    name: "Web Technologies",
    intro: "A practical and evolving area shaped by browsers, networks, interfaces, platforms, and the people who use them every day.",
    description: "The web is a meeting point for distributed systems, interaction design, accessibility, privacy, and performance. Notice the gap between what a platform enables and what it asks of its users.",
    matches: ["web", "software", "systems", "human-computer interaction", "computing"]
  },
  "human-computer-interaction": {
    name: "Human-Computer Interaction",
    intro: "The study of how people experience, understand, and shape the technologies around them.",
    description: "HCI combines design, psychology, computing, and social research. Begin with a real interaction, listen to the people involved, and make the invisible assumptions visible.",
    matches: ["human-computer interaction", "hci", "computing", "software"]
  }
};

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
