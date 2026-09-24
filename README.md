# Resora

Resora is a curated research resource directory designed for Computer Science students who want to find a meaningful entry point into research, explore a subfield, and gather reliable academic tools.

The site helps users move from curiosity to direction by surfacing:

- research areas to explore
- practical guides for building research habits
- a searchable library of resources and tools
- major Computer Science journals and publication venues

## Why this project exists

Research can feel overwhelming at the start. Resora makes the entry point less intimidating by organizing the journey into simple stages:

1. Choose a direction
2. Learn the rhythm of research
3. Gather useful tools and sources
4. See the wider field and publication landscape

## Features

- Topic-based navigation for major CS areas
- Filterable resource library
- Keyword search across resource names, categories, fields, and descriptions
- Research practice guides and reading recommendations
- Journal and conference discovery section
- Lightweight static web app with no backend required

## Tech stack

- HTML
- CSS
- JavaScript (ES modules)

## Project structure

- `index.html` — home page and main landing experience
- `area.html` — topic-specific research page
- `area.js` — area page logic
- `script.js` — home page rendering, filtering, and interactivity
- `guides.js` — curated research guides
- `research-resources.js` — searchable research tools and websites
- `computer-science-journals.js` — academic journals and publication metadata
- `style.css` — site styling

## Run locally

Because this project is a static website, you can open it directly in a browser or serve it locally.

### Option 1: Open directly

Open `index.html` in your browser.

### Option 2: Run a local server

From the project root, run:

```bash
python -m http.server 8000
```

Then visit:

```text
http://localhost:8000
```

## Customizing the project

To extend the site, edit the JavaScript data files:

- `research-resources.js` for research tools, libraries, and discovery platforms
- `guides.js` for practical research guidance
- `computer-science-journals.js` for venue listings

This keeps the content organized and makes the project easy to update without changing the page structure.

## License

This project is provided as a learning and resource-sharing project. Please check the repository or project owner for details before reusing it in a public or commercial context.
