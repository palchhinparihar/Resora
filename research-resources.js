export const researchResources = [
  {
    id: "ieee-xplore",
    name: "IEEE Xplore",
    category: "Journals & Publishers",
    type: "Digital Library",
    fields: ["Computer Science", "Engineering", "Technology"],
    access: "Mixed",
    openAccess: false,
    capabilities: { discovery: true, publishing: true, datasets: false, code: false, citations: true },
    description:
      "A digital research library providing access to IEEE journals, conference proceedings, standards, and other technical publications.",
    bestFor: [
      "Find research papers",
      "Find conferences",
      "Explore IEEE journals",
      "Submit to IEEE publications"
    ],
    website: "https://ieeexplore.ieee.org/"
  },

  {
    id: "acm-digital-library",
    name: "ACM Digital Library",
    category: "Journals & Publishers",
    type: "Digital Library",
    fields: ["Computer Science", "Software Engineering", "AI", "Computing"],
    access: "Mixed",
    openAccess: false,
    capabilities: { discovery: true, publishing: true, datasets: false, code: false, citations: true },
    description:
      "A major digital library for computing research, including ACM journals, conference proceedings, magazines, and other publications.",
    bestFor: [
      "Find computer science papers",
      "Find conferences",
      "Explore ACM journals",
      "Submit to ACM publications"
    ],
    website: "https://dl.acm.org/"
  },

  {
    id: "springer-nature-link",
    name: "Springer Nature Link",
    category: "Journals & Publishers",
    type: "Publisher Platform",
    fields: [
      "Computer Science",
      "Artificial Intelligence",
      "Engineering",
      "Mathematics"
    ],
    access: "Mixed",
    openAccess: false,
    capabilities: { discovery: true, publishing: true, datasets: false, code: false, citations: true },
    description:
      "Springer Nature's research platform for journals, books, reference works, and other scholarly publications.",
    bestFor: [
      "Find research papers",
      "Find journals",
      "Explore books",
      "Submit research"
    ],
    website: "https://link.springer.com/"
  },

  {
    id: "sciencedirect",
    name: "ScienceDirect",
    category: "Journals & Publishers",
    type: "Research Platform",
    fields: [
      "Computer Science",
      "Engineering",
      "Science",
      "Technology"
    ],
    access: "Mixed",
    openAccess: false,
    capabilities: { discovery: true, publishing: true, datasets: false, code: false, citations: true },
    description:
      "Elsevier's platform for discovering peer-reviewed research articles, journals, books, and other scholarly content.",
    bestFor: [
      "Find research papers",
      "Find journals",
      "Compare journals",
      "Submit research"
    ],
    website: "https://www.sciencedirect.com/"
  },

  {
    id: "arxiv",
    name: "arXiv",
    category: "Preprint Platforms",
    type: "Preprint Repository",
    fields: [
      "Computer Science",
      "Artificial Intelligence",
      "Machine Learning",
      "Computer Vision",
      "Mathematics",
      "Physics"
    ],
    access: "Free",
    openAccess: true,
    capabilities: { discovery: true, publishing: true, datasets: false, code: false, citations: true },
    description:
      "An open-access archive for sharing and discovering scholarly preprints across multiple research disciplines.",
    bestFor: [
      "Share preprints",
      "Discover recent research",
      "Find research before formal publication"
    ],
    website: "https://arxiv.org/"
  },

  {
    id: "zenodo",
    name: "Zenodo",
    category: "Preprint Platforms",
    type: "Research Repository",
    fields: ["Computer Science", "All Disciplines"],
    access: "Free",
    openAccess: true,
    capabilities: { discovery: true, publishing: true, datasets: true, code: true, citations: true },
    description:
      "An open research repository for sharing and preserving research papers, datasets, software, and other research artifacts.",
    bestFor: [
      "Share research",
      "Publish datasets",
      "Publish software",
      "Archive research artifacts",
      "Create citable research records"
    ],
    website: "https://zenodo.org/"
  },

  {
    id: "google-scholar",
    name: "Google Scholar",
    category: "Research Discovery",
    type: "Academic Search Engine",
    fields: ["All Disciplines"],
    access: "Free",
    openAccess: false,
    capabilities: { discovery: true, publishing: false, datasets: false, code: false, citations: true },
    description:
      "A broad scholarly search service for discovering articles, theses, books, authors, citations, and other academic literature.",
    bestFor: [
      "Find research papers",
      "Find related research",
      "Track citations",
      "Find authors",
      "Create an author profile"
    ],
    website: "https://scholar.google.com/"
  },

  {
    id: "semantic-scholar",
    name: "Semantic Scholar",
    category: "Research Discovery",
    type: "Academic Search Engine",
    fields: ["All Disciplines"],
    access: "Free",
    openAccess: false,
    capabilities: { discovery: true, publishing: false, datasets: false, code: false, citations: true },
    description:
      "A free AI-powered research discovery tool that helps researchers search, understand, and connect scientific literature.",
    bestFor: [
      "Discover research",
      "Find related papers",
      "Explore citations",
      "Track authors and topics"
    ],
    website: "https://www.semanticscholar.org/"
  },

  {
    id: "dblp",
    name: "DBLP",
    category: "Research Discovery",
    type: "Computer Science Bibliography",
    fields: ["Computer Science"],
    access: "Free",
    openAccess: true,
    capabilities: { discovery: true, publishing: false, datasets: false, code: false, citations: true },
    description:
      "An open bibliographic database focused specifically on computer science journals, conference proceedings, authors, and publications.",
    bestFor: [
      "Find computer science papers",
      "Find conferences",
      "Explore authors",
      "Track publication records"
    ],
    website: "https://dblp.org/"
  },

  {
    id: "openalex",
    name: "OpenAlex",
    category: "Research Infrastructure & Metadata",
    type: "Scholarly Metadata Platform",
    fields: ["All Disciplines"],
    access: "Free",
    openAccess: true,
    capabilities: { discovery: true, publishing: false, datasets: false, code: false, citations: true },
    description:
      "An open catalog of the global scholarly research system providing reusable metadata about works, authors, institutions, venues, and concepts.",
    bestFor: [
      "Research discovery",
      "Analyze scholarly metadata",
      "Build research applications",
      "Explore authors and institutions"
    ],
    website: "https://openalex.org/"
  },

  {
    id: "crossref",
    name: "Crossref",
    category: "Research Infrastructure & Metadata",
    type: "DOI & Metadata Infrastructure",
    fields: ["All Disciplines"],
    access: "Free",
    openAccess: true,
    capabilities: { discovery: true, publishing: false, datasets: false, code: false, citations: true },
    description:
      "Scholarly infrastructure that connects research outputs through persistent identifiers, metadata, and citation relationships.",
    bestFor: [
      "Find DOI records",
      "Verify publication metadata",
      "Retrieve scholarly metadata",
      "Connect citations and research outputs"
    ],
    website: "https://www.crossref.org/"
  },

  {
    id: "orcid",
    name: "ORCID",
    category: "Research Infrastructure & Metadata",
    type: "Researcher Identifier",
    fields: ["All Disciplines"],
    access: "Free",
    openAccess: true,
    capabilities: { discovery: true, publishing: false, datasets: false, code: false, citations: true },
    description:
      "A persistent researcher identifier and profile system that helps connect researchers with their publications, affiliations, and other research contributions.",
    bestFor: [
      "Create researcher identity",
      "Connect publications",
      "Maintain research profile",
      "Disambiguate author names"
    ],
    website: "https://orcid.org/"
  },

  {
    id: "doaj",
    name: "DOAJ",
    category: "Open-Access Directories",
    type: "Open Access Journal Directory",
    fields: ["All Disciplines"],
    access: "Free",
    openAccess: true,
    capabilities: { discovery: true, publishing: false, datasets: false, code: false, citations: true },
    description:
      "An index of quality, peer-reviewed open-access journals and articles from around the world.",
    bestFor: [
      "Find open-access journals",
      "Find open-access articles",
      "Check journal indexing",
      "Discover publication venues"
    ],
    website: "https://doaj.org/"
  },

  {
    id: "core",
    name: "CORE",
    category: "Open-Access Directories",
    type: "Open Access Research Aggregator",
    fields: ["All Disciplines"],
    access: "Free",
    openAccess: true,
    capabilities: { discovery: true, publishing: false, datasets: true, code: true, citations: true },
    description:
      "An open scholarly infrastructure service that aggregates research outputs from repositories and journals and provides access to open research content.",
    bestFor: [
      "Find open-access papers",
      "Search repository content",
      "Discover research",
      "Access research metadata"
    ],
    website: "https://core.ac.uk/"
  },

  {
    id: "papers-with-code",
    name: "Papers with Code",
    category: "Research Discovery",
    type: "Research & Benchmark Hub",
    fields: ["Computer Science", "Machine Learning", "Artificial Intelligence"],
    access: "Free",
    openAccess: true,
    capabilities: { discovery: true, publishing: false, datasets: true, code: true, citations: true },
    description:
      "A free platform connecting machine learning papers with code, datasets, benchmarks, and reproducible implementations.",
    bestFor: [
      "Find machine learning papers",
      "Compare benchmarks",
      "Find research code",
      "Explore datasets"
    ],
    website: "https://paperswithcode.com/"
  },

  {
    id: "acl-anthology",
    name: "ACL Anthology",
    category: "Digital Libraries",
    type: "Research Paper Archive",
    fields: ["Computer Science", "Natural Language Processing", "Artificial Intelligence"],
    access: "Free",
    openAccess: true,
    capabilities: { discovery: true, publishing: true, datasets: false, code: false, citations: true },
    description:
      "The digital archive of research in computational linguistics and natural language processing, including conference and journal publications.",
    bestFor: [
      "Find NLP papers",
      "Explore conference proceedings",
      "Track research topics",
      "Find publication venues"
    ],
    website: "https://aclanthology.org/"
  },

  {
    id: "usenix",
    name: "USENIX",
    category: "Conferences & Societies",
    type: "Computing Research Society",
    fields: ["Computer Science", "Systems", "Security", "Networking"],
    access: "Free",
    openAccess: true,
    capabilities: { discovery: true, publishing: true, datasets: false, code: false, citations: true },
    description:
      "A community and publication platform for advanced computing research, with conferences, proceedings, technical reports, and professional resources.",
    bestFor: [
      "Find systems conferences",
      "Read security papers",
      "Explore proceedings",
      "Find calls for papers"
    ],
    website: "https://www.usenix.org/"
  },

  {
    id: "figshare",
    name: "figshare",
    category: "Datasets & Research Software",
    type: "Research Data Repository",
    fields: ["Computer Science", "Data Science", "All Disciplines"],
    access: "Free",
    openAccess: true,
    capabilities: { discovery: true, publishing: false, datasets: true, code: true, citations: true },
    description:
      "A repository for publishing, sharing, and discovering datasets, figures, software, and other research outputs with persistent citations.",
    bestFor: [
      "Share datasets",
      "Publish research software",
      "Find reusable data",
      "Create citable research records"
    ],
    website: "https://figshare.com/"
  },

  {
    id: "github",
    name: "GitHub",
    category: "Datasets & Research Software",
    type: "Code Collaboration Platform",
    fields: ["Computer Science", "Software Engineering", "Data Science"],
    access: "Free / Paid",
    openAccess: false,
    capabilities: { discovery: true, publishing: false, datasets: false, code: true, citations: false },
    description:
      "A code hosting and collaboration platform widely used to share research software, experiments, documentation, and reproducible workflows.",
    bestFor: [
      "Share research code",
      "Collaborate on projects",
      "Track experiments",
      "Review software changes"
    ],
    website: "https://github.com/"
  },

  {
    id: "researchrabbit",
    name: "ResearchRabbit",
    category: "Research Discovery",
    type: "Literature Mapping Tool",
    fields: ["Computer Science", "All Disciplines"],
    access: "Free",
    openAccess: false,
    capabilities: { discovery: true, publishing: false, datasets: false, code: false, citations: true },
    description:
      "A visual literature discovery tool that helps researchers explore related papers, authors, collections, and citation networks.",
    bestFor: [
      "Explore related papers",
      "Map a research topic",
      "Discover authors",
      "Build a reading list"
    ],
    website: "https://www.researchrabbit.ai/"
  },

  {
    id: "connected-papers",
    name: "Connected Papers",
    category: "Research Discovery",
    type: "Citation Graph Tool",
    fields: ["Computer Science", "All Disciplines"],
    access: "Free / Paid",
    openAccess: false,
    capabilities: { discovery: true, publishing: false, datasets: false, code: false, citations: true },
    description:
      "A visual tool for finding papers connected to a seed article through similarity and citation relationships.",
    bestFor: [
      "Find foundational papers",
      "Discover related research",
      "Explore a field quickly",
      "Identify prior work"
    ],
    website: "https://www.connectedpapers.com/"
  },

  {
    id: "scopus",
    name: "Scopus",
    category: "Journals & Publishers",
    type: "Abstract and Citation Database",
    fields: ["Computer Science", "Science", "Engineering", "All Disciplines"],
    access: "Institutional",
    openAccess: false,
    capabilities: { discovery: true, publishing: false, datasets: false, code: false, citations: true },
    description:
      "An abstract and citation database for tracking scholarly literature, author profiles, research impact, and publication metrics.",
    bestFor: [
      "Find research papers",
      "Track citations",
      "Analyze author impact",
      "Compare journals"
    ],
    website: "https://www.scopus.com/"
  }
];