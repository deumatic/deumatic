export type PriceMode = "starting" | "fixed" | "quote";

export type CommercialPrice = {
  mode: PriceMode;
  amount: number | null;
  currency: "USD";
  billingPeriod: string | null;
  approvedForPublication: boolean;
  label: string;
};

export type SolutionCategory = {
  id: string;
  number: string;
  title: string;
  action: string;
  summary: string;
};

export type SolutionPackage = {
  id: string;
  categoryId: string;
  title: string;
  customerNeed: string;
  summary: string;
  audience: string;
  scope: readonly string[];
  exclusions: readonly string[];
  clientInputs: readonly string[];
  priceFactors: readonly string[];
  afterLaunch: string;
  addOns: readonly string[];
  relatedServiceIds: readonly string[];
  pricing: CommercialPrice;
  timeline: string;
  geography: "Worldwide" | "Saudi Arabia";
  cta: string;
};

export type IndividualService = {
  id: string;
  categoryId: string;
  title: string;
  summary: string;
  deliverables: readonly string[];
  relatedSolutionId: string;
  pricing: CommercialPrice;
  geography: "Worldwide" | "Saudi Arabia";
  searchTerms: readonly string[];
};

const quote = (label: string): CommercialPrice => ({
  mode: "quote",
  amount: null,
  currency: "USD",
  billingPeriod: null,
  approvedForPublication: false,
  label
});

export const solutionCategories: readonly SolutionCategory[] = [
  { id: "websites", number: "01", title: "Build a website", action: "Build my website", summary: "Present your work, explain your company or create a bilingual digital presence." },
  { id: "commerce", number: "02", title: "Sell online", action: "Sell online", summary: "Launch a focused online store or connect commerce with the way your business operates." },
  { id: "products", number: "03", title: "Launch a web or mobile product", action: "Launch a product", summary: "Shape an idea, release an MVP or plan a larger platform in clear delivery phases." },
  { id: "automation-ai", number: "04", title: "Automate work or use AI", action: "Automate work or add AI", summary: "Reduce repetitive work or add useful AI with evaluation and human control." },
  { id: "data", number: "05", title: "Organize and use business data", action: "Organize business data", summary: "Turn scattered information into dependable reporting, ownership and decision support." },
  { id: "pos", number: "06", title: "Set up or upgrade POS", action: "Set up or upgrade my POS", summary: "Coordinate software, hardware, installation, training and support for a Saudi business." }
];

export const solutionPackages: readonly SolutionPackage[] = [
  {
    id: "personal-portfolio",
    categoryId: "websites",
    title: "Personal Portfolio",
    customerNeed: "I want a professional website that presents my work and experience.",
    summary: "A focused personal site that makes your experience, selected work and contact path easy to understand.",
    audience: "Professionals, consultants, educators and independent specialists who need a credible online presence.",
    scope: ["One responsive page with up to six sections", "About, skills, selected work and contact", "Up to three project summaries", "CV, social links, metadata and deployment"],
    exclusions: ["Custom backend, payments and membership features", "Hosting, domain and paid third-party services", "Content production beyond the agreed scope"],
    clientInputs: ["Approved biography and CV", "Final project content and images", "Access to the selected domain account"],
    priceFactors: ["Content readiness", "Additional pages or languages", "Custom integrations or CMS requirements"],
    afterLaunch: "You receive deployment support and a clear handover. Continued care can be scoped separately.",
    addOns: ["Additional project case studies", "Simple CMS", "Professional copy or bilingual implementation"],
    relatedServiceIds: ["website-ui-ux", "frontend-development", "technical-seo"],
    pricing: quote("Request a scoped quote"),
    timeline: "Delivery schedule confirmed after content and scope review",
    geography: "Worldwide",
    cta: "Build my portfolio"
  },
  {
    id: "landing-page",
    categoryId: "websites",
    title: "Landing Page",
    customerNeed: "I want one focused page for my offer, campaign or service.",
    summary: "A conversion-focused page with one clear audience, message and next action.",
    audience: "New offers, professional services, campaigns and early product validation.",
    scope: ["One responsive page with a focused user journey", "Lead or enquiry form", "Basic analytics and search metadata", "Deployment and handover"],
    exclusions: ["Advertising spend and campaign management", "Guaranteed leads, sales or search rankings", "Complex backend or multi-step application flows"],
    clientInputs: ["Approved offer and audience", "Final text, images and brand assets", "Access to required domain and analytics accounts"],
    priceFactors: ["Content and design complexity", "Form or integration requirements", "Additional languages or experiments"],
    afterLaunch: "We validate the live page and can scope measurement or iteration support separately.",
    addOns: ["Copy refinement", "Bilingual layout", "CRM or email platform integration"],
    relatedServiceIds: ["landing-page-design", "frontend-development", "technical-seo"],
    pricing: quote("Request a scoped quote"),
    timeline: "Delivery schedule confirmed after scope review",
    geography: "Worldwide",
    cta: "Launch my landing page"
  },
  {
    id: "business-website",
    categoryId: "websites",
    title: "Business Website",
    customerNeed: "I need a credible website that explains my company and helps customers contact us.",
    summary: "A clear company website designed around trust, services and qualified enquiries.",
    audience: "Small and growing businesses replacing an outdated site or launching their first professional presence.",
    scope: ["Up to six agreed pages", "Responsive UI design and development", "Service content and enquiry flow", "Technical SEO, analytics, deployment and handover"],
    exclusions: ["Customer portals, subscriptions and complex booking", "Paid media or guaranteed ranking outcomes", "Unplanned custom software modules"],
    clientInputs: ["Approved company information", "Final images and service details", "Required account access"],
    priceFactors: ["Page and content volume", "CMS and integration needs", "Languages and custom functionality"],
    afterLaunch: "The team receives a deployment handover with optional website care available by proposal.",
    addOns: ["CMS collections", "Bilingual delivery", "CRM, booking or quotation integration"],
    relatedServiceIds: ["website-ui-ux", "cms-setup", "frontend-development", "technical-seo"],
    pricing: quote("Request a scoped quote"),
    timeline: "Delivery schedule confirmed after content and scope review",
    geography: "Worldwide",
    cta: "Build my business website"
  },
  {
    id: "bilingual-business-website",
    categoryId: "websites",
    title: "Bilingual Business Website",
    customerNeed: "I want to serve Arabic and English speaking customers.",
    summary: "A bilingual website with deliberate RTL and LTR experiences rather than duplicated pages with broken layouts.",
    audience: "Organizations that have approved Arabic and English content and need one coherent website.",
    scope: ["Arabic and English responsive experiences", "RTL and LTR layout behavior", "Language navigation and bilingual metadata", "CMS collection, editor handover and deployment"],
    exclusions: ["Professional translation unless added to scope", "Complex portals and application workflows", "Ongoing content entry after handover"],
    clientInputs: ["Approved bilingual content", "Brand and image assets", "A reviewer for each language"],
    priceFactors: ["Unique layout count", "Translation readiness", "CMS and integration complexity"],
    afterLaunch: "Editors receive a practical handover for the agreed CMS content areas.",
    addOns: ["Translation coordination", "Additional CMS collections", "Location or service landing pages"],
    relatedServiceIds: ["website-ui-ux", "cms-setup", "frontend-development", "qa-test-cycle"],
    pricing: quote("Scoped after bilingual content review"),
    timeline: "Delivery schedule confirmed after bilingual content review",
    geography: "Worldwide",
    cta: "Plan my bilingual website"
  },
  {
    id: "platform-store-launch",
    categoryId: "commerce",
    title: "Platform Store Launch",
    customerNeed: "I want to start selling products online.",
    summary: "A practical store launch on an agreed hosted-commerce platform using clean, supplied product information.",
    audience: "Retailers and growing brands that need a proven commerce platform without a bespoke commerce engine.",
    scope: ["Platform and theme configuration", "Structured catalogue and navigation", "Supported payment and shipping setup", "Checkout testing and staff handover"],
    exclusions: ["Platform subscriptions and provider fees", "Merchant or shipping-provider approval", "Complex product configuration or marketplace features"],
    clientInputs: ["Clean product data and images", "Merchant and shipping accounts", "Policies, fulfilment rules and tax guidance"],
    priceFactors: ["Catalogue size and data quality", "Theme customization", "Payment, shipping and operational integrations"],
    afterLaunch: "We hand over the operating workflow and can propose store care or enhancements separately.",
    addOns: ["Product-data cleanup", "Custom sections", "Analytics and supported integrations"],
    relatedServiceIds: ["website-ui-ux", "payment-integration", "third-party-integration", "qa-test-cycle"],
    pricing: quote("Scoped store launch quote"),
    timeline: "Delivery schedule confirmed after catalogue and provider review",
    geography: "Worldwide",
    cta: "Launch my online store"
  },
  {
    id: "integrated-online-store",
    categoryId: "commerce",
    title: "Integrated Online Store",
    customerNeed: "I need a tailored store connected to the way my business operates.",
    summary: "A more customized commerce experience with one or more carefully scoped operational connections.",
    audience: "Businesses with established product data, fulfilment processes and documented integration needs.",
    scope: ["Tailored storefront design and implementation", "Payment and shipping configuration", "One agreed documented integration", "Analytics, testing and handover"],
    exclusions: ["Custom marketplaces and bespoke commerce engines", "Undocumented or unsupported systems", "Provider subscriptions and transaction fees"],
    clientInputs: ["Clean catalogue data", "Documented integration access", "Approved fulfilment and customer-service process"],
    priceFactors: ["Catalogue and design complexity", "API quality", "Migration and operational rules"],
    afterLaunch: "We provide technical handover and can scope continued improvement around real store activity.",
    addOns: ["Additional integrations", "Catalogue migration", "Custom reporting"],
    relatedServiceIds: ["third-party-integration", "payment-integration", "backend-api", "qa-test-cycle"],
    pricing: quote("Scoped around your commerce operation"),
    timeline: "Delivery schedule confirmed after integration review",
    geography: "Worldwide",
    cta: "Plan my integrated store"
  },
  {
    id: "product-blueprint",
    categoryId: "products",
    title: "Product Blueprint",
    customerNeed: "I have an idea but need to understand what should be built.",
    summary: "A planning and prototype engagement that turns an idea into prioritized requirements and a credible build path.",
    audience: "Founders and teams that need clarity before committing to production development.",
    scope: ["Focused discovery workshops", "Prioritized requirements and core journeys", "Clickable prototype of key screens", "Technical approach, delivery phases and estimate"],
    exclusions: ["Production application development", "Complete visual design system", "Guaranteed investment or market outcomes"],
    clientInputs: ["Access to decision makers", "Known business constraints", "Existing research or reference material"],
    priceFactors: ["Number of user groups", "Workflow complexity", "Research and technical uncertainty"],
    afterLaunch: "The blueprint can be used to request implementation from Deumatic or another engineering team.",
    addOns: ["User interviews", "Technical proof of concept", "Expanded design system"],
    relatedServiceIds: ["product-discovery", "app-ui-ux", "architecture-review"],
    pricing: quote("Request a scoped quote"),
    timeline: "Workshop schedule confirmed after stakeholder availability review",
    geography: "Worldwide",
    cta: "Shape my product idea"
  },
  {
    id: "web-product-mvp",
    categoryId: "products",
    title: "Web Product MVP",
    customerNeed: "I want the first working version of my web product or internal business system.",
    summary: "A focused first release built around one primary workflow and clear learning goals.",
    audience: "Founders and business teams with a defined problem, decision owner and realistic first-release boundary.",
    scope: ["Product and experience definition", "Frontend, backend and database", "Standard authentication and basic administration", "Testing, deployment and handover"],
    exclusions: ["Unbounded feature backlogs", "Regulated or enterprise complexity without assessment", "Guaranteed adoption or commercial outcomes"],
    clientInputs: ["A product decision maker", "Timely scope and design feedback", "Access to required provider accounts"],
    priceFactors: ["Roles and workflows", "Integration and reporting complexity", "Data migration and security requirements"],
    afterLaunch: "We review evidence from the first release and propose the next smallest useful phase.",
    addOns: ["Additional roles or workflows", "Advanced reporting", "Mobile application"],
    relatedServiceIds: ["product-discovery", "frontend-development", "backend-api", "database-design", "qa-test-cycle"],
    pricing: quote("Scoped around your product"),
    timeline: "Phased delivery plan confirmed after discovery",
    geography: "Worldwide",
    cta: "Launch my web product"
  },
  {
    id: "single-platform-app",
    categoryId: "products",
    title: "Android or iOS App",
    customerNeed: "I need a focused mobile app for one platform.",
    summary: "A single-platform application centered on one defined user journey and a practical release plan.",
    audience: "Teams that can prioritize one platform and a bounded first version.",
    scope: ["Android or iOS application", "UI/UX for the agreed primary flow", "Standard sign-in and backend connection", "Testing and store-submission support"],
    exclusions: ["Store fees and approval guarantees", "Complex offline sync and real-time media", "Features outside the agreed release scope"],
    clientInputs: ["Selected platform and target users", "Store account access", "Approved content and business rules"],
    priceFactors: ["Screen and workflow complexity", "Backend readiness", "Device and integration requirements"],
    afterLaunch: "Submission support is included for the agreed build. Store approval remains with the platform owner.",
    addOns: ["Second platform", "Admin interface", "Advanced notifications or offline behavior"],
    relatedServiceIds: ["app-ui-ux", "android-development", "ios-development", "app-store-assistance"],
    pricing: quote("Scoped around your mobile product"),
    timeline: "Delivery plan confirmed after technical assessment",
    geography: "Worldwide",
    cta: "Plan my mobile app"
  },
  {
    id: "cross-platform-app",
    categoryId: "products",
    title: "Android and iOS App",
    customerNeed: "I want customers to use my app on Android and iPhone.",
    summary: "A shared cross-platform implementation where product requirements and device behavior make that approach suitable.",
    audience: "Teams with one primary mobile workflow and a clear reason to launch on both major platforms.",
    scope: ["Cross-platform mobile application", "Backend and database connection", "Standard notifications and administration", "Testing and submission support for both stores"],
    exclusions: ["Guaranteed store approval", "Separate native codebases unless scoped", "Advanced platform-specific or regulated features"],
    clientInputs: ["Approved requirements and content", "Store and provider accounts", "Availability for release review"],
    priceFactors: ["Workflow and device complexity", "Backend and integration requirements", "Platform-specific behavior"],
    afterLaunch: "We support the agreed store submission process and can scope product evolution after release.",
    addOns: ["Offline capability", "Additional roles", "Advanced analytics or integrations"],
    relatedServiceIds: ["app-ui-ux", "cross-platform-development", "backend-api", "app-store-assistance"],
    pricing: quote("Scoped around your mobile product"),
    timeline: "Delivery plan confirmed after technical assessment",
    geography: "Worldwide",
    cta: "Build for Android and iOS"
  },
  {
    id: "enterprise-platform",
    categoryId: "products",
    title: "Enterprise Platforms & Modernization",
    customerNeed: "We need a larger system, multiple integrations or a phased replacement of existing software.",
    summary: "A discovery-led route for complex platforms, modernization and multi-phase operational systems.",
    audience: "Organizations with multiple stakeholders, systems, departments or migration constraints.",
    scope: ["Architecture and operational discovery", "Risk and dependency mapping", "Prioritized phases and technical roadmap", "Implementation proposal for the approved phase"],
    exclusions: ["A fixed implementation promise before assessment", "Unbounded feature delivery", "Automatic migration or integration compatibility"],
    clientInputs: ["Technical and operational stakeholders", "Existing system documentation", "Access to representative workflows and constraints"],
    priceFactors: ["System and stakeholder complexity", "Integration and migration risk", "Security, data and rollout requirements"],
    afterLaunch: "Each implementation phase is reviewed before the next commitment is made.",
    addOns: ["Prototype phase", "Migration planning", "Embedded engineering capability"],
    relatedServiceIds: ["product-discovery", "architecture-review", "data-migration", "cloud-architecture-review"],
    pricing: quote("Phased scope and proposal"),
    timeline: "Phased plan established during discovery",
    geography: "Worldwide",
    cta: "Discuss an enterprise project"
  },
  {
    id: "workflow-automation",
    categoryId: "automation-ai",
    title: "Workflow Automation",
    customerNeed: "My team keeps repeating the same manual tasks.",
    summary: "A bounded workflow that connects suitable tools, decisions and notifications with clear failure handling.",
    audience: "Operations teams with a repeatable process and identified system owners.",
    scope: ["One documented workflow", "Supported system connections", "Approval and notification steps", "Failure handling, testing and staff handover"],
    exclusions: ["Unlimited workflows or connectors", "Provider usage and premium connector fees", "AI where normal automation is sufficient"],
    clientInputs: ["Current workflow and exceptions", "System access and ownership", "A reviewer for business rules"],
    priceFactors: ["Integration support", "Workflow branches", "Volume, security and approval requirements"],
    afterLaunch: "The workflow is handed over with agreed operating notes and a path for future changes.",
    addOns: ["Additional workflow", "Reporting", "AI-assisted step with evaluation"],
    relatedServiceIds: ["workflow-assessment", "single-automation", "third-party-integration"],
    pricing: quote("Scoped after workflow review"),
    timeline: "Delivery schedule confirmed after system-access review",
    geography: "Worldwide",
    cta: "Automate a workflow"
  },
  {
    id: "ai-opportunity-assessment",
    categoryId: "automation-ai",
    title: "AI Opportunity Assessment",
    customerNeed: "I want to know where AI would actually help my business.",
    summary: "A practical review of candidate use cases, available evidence, risks and the smallest useful experiment.",
    audience: "Organizations considering AI but not yet confident which opportunity is viable.",
    scope: ["Focused stakeholder workshops", "Candidate use-case and data review", "Feasibility, risk and architecture recommendation", "Prototype plan and evaluation criteria"],
    exclusions: ["Production AI application", "Guaranteed accuracy or savings", "Compliance or legal certification"],
    clientInputs: ["Candidate workflows", "Representative sample data", "Business owner and technical contact"],
    priceFactors: ["Use-case count", "Data accessibility", "Technical and operational risk"],
    afterLaunch: "You receive a prioritized recommendation and can decide whether to prototype, pause or pursue another approach.",
    addOns: ["Technical prototype", "Data-quality review", "Architecture workshop"],
    relatedServiceIds: ["workflow-assessment", "ai-architecture-review", "ai-evaluation-review"],
    pricing: quote("Quoted after technical assessment"),
    timeline: "Workshop plan confirmed after use-case review",
    geography: "Worldwide",
    cta: "Find the right AI use case"
  },
  {
    id: "business-knowledge-assistant",
    categoryId: "automation-ai",
    title: "Business Knowledge Assistant",
    customerNeed: "My team needs to find answers in company documents more easily.",
    summary: "An internal RAG assistant that returns source-linked answers from one agreed knowledge collection.",
    audience: "Teams with useful, approved and text-readable internal documents.",
    scope: ["Knowledge ingestion and retrieval workflow", "One internal web interface", "Source-linked answers and evaluation set", "Deployment configuration and handover"],
    exclusions: ["Unlimited ingestion and complex permissions", "Scanned-document OCR unless scoped", "Model, hosting and vector-storage usage fees"],
    clientInputs: ["Approved documents", "Access rules and user group", "Representative evaluation questions"],
    priceFactors: ["Document volume and quality", "Permission model", "Integration and hosting requirements"],
    afterLaunch: "The agreed evaluation set provides a baseline for measured improvements and controlled expansion.",
    addOns: ["Additional knowledge collections", "Identity integration", "Multilingual retrieval"],
    relatedServiceIds: ["rag-prototype", "llm-api-integration", "application-deployment"],
    pricing: quote("Quoted after technical assessment"),
    timeline: "Delivery plan confirmed after document and access review",
    geography: "Worldwide",
    cta: "Build our knowledge assistant"
  },
  {
    id: "ai-business-workflow",
    categoryId: "automation-ai",
    title: "AI-Assisted Business Workflow",
    customerNeed: "I want AI to help process requests, prepare work or support business decisions.",
    summary: "A controlled AI-assisted workflow with defined model tasks, human review and traceable failure behavior.",
    audience: "Teams with a repeatable process, available evidence and a clear owner for consequential decisions.",
    scope: ["One business workflow", "Defined model tasks and supported integrations", "Human approval and activity logs", "Evaluation, deployment and handover"],
    exclusions: ["Autonomous replacement of staff", "Guaranteed accuracy, ROI or savings", "Unbounded integrations or decision authority"],
    clientInputs: ["Representative process examples", "Approved data and system access", "Decision and review owners"],
    priceFactors: ["Model and data requirements", "Integration complexity", "Evaluation and control requirements"],
    afterLaunch: "Operational evidence is reviewed before expanding model responsibilities or workflow coverage.",
    addOns: ["Additional workflow", "Custom evaluation dashboard", "Private-model deployment"],
    relatedServiceIds: ["llm-api-integration", "ai-evaluation-review", "third-party-integration"],
    pricing: quote("Quoted after technical assessment"),
    timeline: "Phased delivery plan confirmed after assessment",
    geography: "Worldwide",
    cta: "Build an AI-assisted workflow"
  },
  {
    id: "computer-vision-pilot",
    categoryId: "automation-ai",
    title: "Computer Vision Pilot",
    customerNeed: "I want to detect or classify something in images.",
    summary: "A pilot that establishes a measurable baseline before any production or field rollout is considered.",
    audience: "Organizations with one defined vision use case and a representative supplied dataset.",
    scope: ["Dataset suitability review", "Baseline detection or classification model", "Evaluation and demonstration interface", "Feasibility report and production roadmap"],
    exclusions: ["Production surveillance operations", "Camera hardware and field installation", "Large-scale labeling or guaranteed model performance"],
    clientInputs: ["Representative dataset and usage rights", "Clear success criteria", "Operational reviewer"],
    priceFactors: ["Dataset quality and labels", "Target conditions", "Performance and deployment constraints"],
    afterLaunch: "The pilot results determine whether production investment is justified and what evidence remains missing.",
    addOns: ["Labeling strategy", "Model deployment pilot", "Operational review interface"],
    relatedServiceIds: ["ai-evaluation-review", "model-serving-pilot", "custom-model-training"],
    pricing: quote("Quoted after dataset assessment"),
    timeline: "Pilot schedule confirmed after dataset review",
    geography: "Worldwide",
    cta: "Test a computer vision idea"
  },
  {
    id: "advanced-ai-ml",
    categoryId: "automation-ai",
    title: "Advanced AI & ML Systems",
    customerNeed: "We need specialized model, inference or research engineering.",
    summary: "A technical-assessment route for model serving, inference optimization, GPU workloads and research prototypes.",
    audience: "Technical teams with a defined workload, baseline and specialist engineering need.",
    scope: ["Technical workload assessment", "Architecture and baseline definition", "Phased engineering plan", "Project-specific evaluation approach"],
    exclusions: ["Performance guarantees before baseline assessment", "Owned GPU or HPC infrastructure claims", "Unbounded research or compute"],
    clientInputs: ["Representative workload", "Current performance evidence", "Environment and infrastructure constraints"],
    priceFactors: ["Model and infrastructure scale", "Baseline quality", "Optimization and deployment targets"],
    afterLaunch: "Each optimization or deployment phase is measured against the agreed technical baseline.",
    addOns: ["Inference implementation", "Private model deployment", "Evaluation architecture"],
    relatedServiceIds: ["llm-inference-assessment", "gpu-hpc-advisory", "model-serving-pilot", "research-prototype"],
    pricing: quote("Quoted after technical assessment"),
    timeline: "Phased plan established after workload assessment",
    geography: "Worldwide",
    cta: "Discuss advanced AI engineering"
  },
  {
    id: "reporting-dashboard",
    categoryId: "data",
    title: "Business Reporting Dashboard",
    customerNeed: "I want a clear view of performance without manually combining spreadsheets.",
    summary: "A focused reporting experience built around agreed metrics and accessible data sources.",
    audience: "Teams with defined business questions and accessible source data.",
    scope: ["Source and metric definition", "Agreed data preparation", "Focused dashboard views", "Refresh configuration and user handover"],
    exclusions: ["BI licences", "Substantial data repair", "New enterprise data platform or unbounded pipelines"],
    clientInputs: ["Source access", "Metric definitions and owners", "Representative data and review users"],
    priceFactors: ["Source accessibility", "Data quality", "Metric and permission complexity"],
    afterLaunch: "Users receive a handover for the agreed reporting workflow and refresh process.",
    addOns: ["Additional source", "Data-quality remediation", "Role-based reporting"],
    relatedServiceIds: ["dashboard-development", "data-cleaning", "data-integration"],
    pricing: quote("Scoped after data review"),
    timeline: "Delivery plan confirmed after source assessment",
    geography: "Worldwide",
    cta: "Organize our business reporting"
  },
  {
    id: "data-foundation",
    categoryId: "data",
    title: "Data Foundation & Governance",
    customerNeed: "Our data is scattered, inconsistent or does not have clear ownership.",
    summary: "An operational and technical engagement that maps data, ownership, quality rules and the next implementation priorities.",
    audience: "A department or business function preparing for dependable reporting, integration or AI use.",
    scope: ["Data inventory and flow mapping", "Ownership and responsibility matrix", "Quality, access and classification recommendations", "Prioritized implementation roadmap"],
    exclusions: ["Legal advice or compliance certification", "Full implementation or migration", "Organization-wide coverage unless scoped"],
    clientInputs: ["System and process owners", "Representative datasets", "Current policies and known quality issues"],
    priceFactors: ["System count and accessibility", "Stakeholder complexity", "Data classification and quality issues"],
    afterLaunch: "The roadmap separates immediate operational fixes from longer-term platform work.",
    addOns: ["Data-cleaning implementation", "Integration pipeline", "Reporting dashboard"],
    relatedServiceIds: ["data-quality-review", "data-governance-workshop", "data-integration"],
    pricing: quote("Scoped after data landscape review"),
    timeline: "Workshop plan confirmed after stakeholder review",
    geography: "Worldwide",
    cta: "Improve our data foundation"
  },
  {
    id: "enterprise-data",
    categoryId: "data",
    title: "Enterprise Data Programme",
    customerNeed: "We need a multi-department data, migration or AI-readiness programme.",
    summary: "A phased assessment and implementation path for larger data foundations and governance needs.",
    audience: "Organizations coordinating data across departments, systems and long-term transformation phases.",
    scope: ["Cross-functional assessment", "Target data and governance direction", "Prioritized phases and dependencies", "Implementation proposal for the approved phase"],
    exclusions: ["Automatic regulatory approval", "Universal compliance claims", "Fixed total implementation before discovery"],
    clientInputs: ["Executive and technical sponsors", "System inventory", "Policy, ownership and migration context"],
    priceFactors: ["Department and system count", "Migration and integration risk", "Governance and operating-model scope"],
    afterLaunch: "Programme phases are reviewed against agreed outcomes before further expansion.",
    addOns: ["Migration pilot", "Quality monitoring", "AI-readiness implementation"],
    relatedServiceIds: ["data-governance-workshop", "data-migration", "data-integration", "cloud-architecture-review"],
    pricing: quote("Phased scope and proposal"),
    timeline: "Phased plan established during assessment",
    geography: "Worldwide",
    cta: "Plan our data programme"
  },
  {
    id: "new-pos-setup",
    categoryId: "pos",
    title: "New POS Setup",
    customerNeed: "My Saudi shop, cafe, restaurant or service business needs its first POS setup.",
    summary: "Software, compatible hardware and implementation coordinated around your actual business requirements.",
    audience: "Saudi Arabia businesses opening or formalizing a physical sales location.",
    scope: ["Requirements and compatibility assessment", "Itemized software and hardware recommendation", "Configuration, supported payment integration and installation", "Initial catalogue setup, training and agreed support plan"],
    exclusions: ["A universal hardware bundle", "Payment processing or merchant approval", "Blanket e-invoicing or regulatory approval claims"],
    clientInputs: ["Saudi city and business type", "Branch, terminal and catalogue requirements", "Merchant-provider and operational context"],
    priceFactors: ["Hardware model and quantity", "Software licence and integration", "City, installation, catalogue and training needs"],
    afterLaunch: "Warranty, licence, maintenance and support terms are itemized in the approved quotation.",
    addOns: ["Additional terminal", "Catalogue preparation", "Ongoing support plan"],
    relatedServiceIds: ["pos-software", "pos-hardware", "pos-installation", "pos-training"],
    pricing: quote("Itemized software, hardware and setup quote"),
    timeline: "Availability and scheduling confirmed during quotation",
    geography: "Saudi Arabia",
    cta: "Plan my new POS setup"
  },
  {
    id: "upgrade-pos",
    categoryId: "pos",
    title: "Upgrade My Existing POS",
    customerNeed: "My current POS needs review, replacement or a safer upgrade path.",
    summary: "A compatibility-led assessment before any software, hardware or migration commitment.",
    audience: "Saudi businesses with an existing POS, known limitations and access to current system information.",
    scope: ["Existing-system and compatibility review", "Software and hardware options", "Feasible migration and integration plan", "Reconfiguration, training and rollout proposal"],
    exclusions: ["Replacement hardware inside an assessment", "Guaranteed data migration", "Compatibility claims before review"],
    clientInputs: ["Current system details", "Hardware and provider information", "Representative catalogue and workflow"],
    priceFactors: ["Compatibility and migration effort", "Hardware condition", "Integration, training and branch scope"],
    afterLaunch: "Approved upgrade work is itemized separately from the initial review.",
    addOns: ["Data or catalogue migration", "Additional terminal", "Support plan"],
    relatedServiceIds: ["pos-configuration", "pos-catalogue-migration", "pos-payment-integration", "pos-training"],
    pricing: quote("Assessment followed by an itemized upgrade quote"),
    timeline: "Schedule confirmed after current-system review",
    geography: "Saudi Arabia",
    cta: "Review my current POS"
  },
  {
    id: "multi-branch-pos",
    categoryId: "pos",
    title: "Multi-Branch POS",
    customerNeed: "We need coordinated POS planning across more than one branch.",
    summary: "A phased POS plan covering branches, terminals, central visibility, rollout and staff readiness.",
    audience: "Saudi retailers, restaurants and service businesses operating or planning multiple locations.",
    scope: ["Branch and terminal planning", "Central reporting and inventory configuration", "Roles, rollout and staff onboarding", "Itemized hardware, licence and support proposal"],
    exclusions: ["One-size-fits-all branch bundles", "Guaranteed provider compatibility", "Nationwide response-time promises"],
    clientInputs: ["City and branch plan", "Terminal and workflow requirements", "Existing systems and reporting needs"],
    priceFactors: ["Branch and terminal count", "Hardware and licences", "Travel, integration, migration and support requirements"],
    afterLaunch: "Maintenance, warranty handling and response targets are defined in the agreed support plan.",
    addOns: ["Phased branch rollout", "Catalogue migration", "Custom reporting integration"],
    relatedServiceIds: ["pos-hardware", "pos-installation", "pos-support", "pos-catalogue-migration"],
    pricing: quote("Itemized multi-branch proposal"),
    timeline: "Phased rollout schedule confirmed after assessment",
    geography: "Saudi Arabia",
    cta: "Plan multi-branch POS"
  }
];

export const serviceCategories = [
  { id: "design", title: "Design & Planning", summary: "Clarify what to build and make the experience easier to use." },
  { id: "engineering", title: "Web & Software Engineering", summary: "Build one technical layer or improve an existing digital product." },
  { id: "ai", title: "AI & Automation", summary: "Automate a workflow or add evaluated AI capability where it is useful." },
  { id: "data", title: "Data", summary: "Make business data easier to understand, maintain and use." },
  { id: "platform", title: "Cloud, Testing & Care", summary: "Deploy, validate and maintain products with clear operating boundaries." },
  { id: "pos", title: "POS: Saudi Arabia Only", summary: "Buy only the POS software, hardware or implementation support you need." }
] as const;

const service = (
  id: string,
  categoryId: string,
  title: string,
  summary: string,
  deliverables: readonly string[],
  relatedSolutionId: string,
  label: string,
  searchTerms: readonly string[] = [],
  geography: "Worldwide" | "Saudi Arabia" = "Worldwide"
): IndividualService => ({ id, categoryId, title, summary, deliverables, relatedSolutionId, pricing: quote(label), geography, searchTerms });

export const individualServices: readonly IndividualService[] = [
  service("ux-review", "design", "UX Review", "Identify the experience issues making a website or application harder to use.", ["Review of agreed key screens", "Prioritized findings", "Actionable improvement recommendations"], "product-blueprint", "Request a scoped quote", ["audit", "usability"]),
  service("landing-page-design", "design", "Landing Page UI Design", "Turn a defined offer into a clear desktop and mobile page design.", ["Page structure", "Responsive visual design", "Developer-ready handoff"], "landing-page", "Request a scoped quote", ["campaign", "one page"]),
  service("website-ui-ux", "design", "Website UI/UX Design", "Make a company or portfolio website clearer, more credible and easier to navigate.", ["Information architecture", "Responsive page layouts", "Design handoff"], "business-website", "Request a scoped quote", ["portfolio", "business website"]),
  service("app-ui-ux", "design", "App UI/UX Design", "Shape a focused web or mobile application around essential user journeys.", ["User flows", "Key screen designs", "Interactive prototype"], "product-blueprint", "Request a scoped quote", ["mobile", "prototype"]),
  service("design-system", "design", "Design System Starter", "Create reusable interface foundations for a growing digital product.", ["Core tokens", "Reusable components", "Usage guidance"], "web-product-mvp", "Scoped around your product", ["components", "ui library"]),
  service("product-discovery", "design", "Product Discovery", "Turn an early idea into prioritized requirements and a practical delivery path.", ["Discovery workshops", "Core journeys", "Phased product plan"], "product-blueprint", "Request a scoped quote", ["strategy", "blueprint"]),

  service("frontend-development", "engineering", "Frontend Development", "Turn approved designs into responsive, accessible interfaces.", ["Responsive implementation", "Component development", "Browser validation"], "web-product-mvp", "Scoped around the approved designs", ["figma", "react", "next.js"]),
  service("backend-api", "engineering", "Backend & API Development", "Build the logic and documented connections behind an application.", ["Business logic", "API endpoints", "Technical documentation"], "web-product-mvp", "Scoped around the module", ["server", "api"]),
  service("database-design", "engineering", "Database Design", "Structure application data so it remains understandable and maintainable.", ["Data model", "Schema design", "Migration plan"], "web-product-mvp", "Scoped around the application", ["sql", "postgresql"]),
  service("cms-setup", "engineering", "CMS Setup", "Give editors a controlled way to manage agreed website content.", ["Content model", "Editor interface", "Handover"], "business-website", "Scoped after content review", ["content management"]),
  service("third-party-integration", "engineering", "Third-Party Integration", "Connect an application with a documented and supported external service.", ["Integration mapping", "Implementation", "Failure handling and testing"], "integrated-online-store", "Quoted after API review", ["api", "integration"]),
  service("payment-integration", "engineering", "Supported Payment Integration", "Connect one supported payment provider without claiming merchant approval or processing responsibility.", ["Provider integration", "Payment-flow testing", "Configuration handover"], "integrated-online-store", "Quoted after provider review", ["payments", "checkout"]),
  service("performance-review", "engineering", "Website Performance Review & Fixes", "Find and address agreed performance issues within a defined website boundary.", ["Performance baseline", "Prioritized fixes", "Before and after technical report"], "business-website", "Quoted after technical review", ["speed", "core web vitals"]),
  service("site-migration", "engineering", "Small-Site Migration", "Move a compatible small website with a clear content and platform boundary.", ["Migration plan", "Content transfer", "Launch validation"], "business-website", "Quoted after compatibility review", ["replatform", "hosting"]),
  service("android-development", "engineering", "Android Development", "Build a focused Android application using approved designs and agreed backend services.", ["Android implementation", "Backend connection", "Testing"], "single-platform-app", "Scoped around your mobile product", ["google play", "kotlin"]),
  service("ios-development", "engineering", "iOS Development", "Build a focused iOS application using approved designs and agreed backend services.", ["iOS implementation", "Backend connection", "Testing"], "single-platform-app", "Scoped around your mobile product", ["iphone", "swift"]),
  service("cross-platform-development", "engineering", "Cross-Platform App Development", "Build one shared mobile codebase where the product and device requirements support it.", ["Shared application", "Platform validation", "Release preparation"], "cross-platform-app", "Scoped around your mobile product", ["flutter", "react native"]),
  service("app-store-assistance", "engineering", "App-Store Submission Assistance", "Prepare and support submission of a release-ready application without guaranteeing approval.", ["Submission checklist", "Store listing support", "Review-response support within scope"], "single-platform-app", "Quoted per release and platform", ["app store", "play store"]),

  service("workflow-assessment", "ai", "Workflow Assessment", "Map one manual workflow and identify the safest useful automation path.", ["Current-state map", "Automation opportunities", "Recommendation report"], "workflow-automation", "Quoted after workflow review", ["operations", "manual tasks"]),
  service("single-automation", "ai", "Single Automation", "Connect suitable tools around one bounded trigger and outcome.", ["Workflow implementation", "Failure handling", "Testing and handover"], "workflow-automation", "Scoped after workflow review", ["make.com", "n8n", "zapier"]),
  service("llm-api-integration", "ai", "LLM/API Integration", "Add one defined language-model feature to an existing application.", ["Model integration", "Prompt and context workflow", "Failure handling"], "ai-business-workflow", "Quoted after technical assessment", ["chatbot", "assistant", "openai"]),
  service("rag-prototype", "ai", "RAG Prototype", "Test grounded answers against one clean knowledge collection before production investment.", ["Document ingestion", "Retrieval prototype", "Evaluation demonstration"], "business-knowledge-assistant", "Quoted after document review", ["knowledge base", "ai assistant"]),
  service("ai-evaluation-review", "ai", "AI Evaluation Review", "Measure one defined AI use case against an agreed test set and failure criteria.", ["Evaluation design", "Error analysis", "Technical findings"], "ai-opportunity-assessment", "Quoted after technical assessment", ["model testing", "quality"]),
  service("model-serving-pilot", "ai", "Model-Serving Pilot", "Expose one supplied model through a controlled application interface in an agreed environment.", ["Model packaging", "Inference API", "Deployment notes"], "advanced-ai-ml", "Quoted after technical assessment", ["onnx", "pytorch", "tensorflow"]),
  service("llm-inference-assessment", "ai", "LLM Inference Assessment", "Profile one model workload and identify evidence-based optimization opportunities.", ["Performance baseline", "Bottleneck analysis", "Optimization recommendations"], "advanced-ai-ml", "Quoted after workload assessment", ["quantization", "triton", "cuda"]),
  service("gpu-hpc-advisory", "ai", "GPU/HPC Advisory", "Review one compute-intensive workload and its resource or execution bottlenecks.", ["Workload review", "Resource analysis", "Technical recommendations"], "advanced-ai-ml", "Quoted after workload assessment", ["slurm", "gpu", "hpc"]),
  service("ai-architecture-review", "ai", "AI Architecture Review", "Review one AI system before expansion, modernization or production release.", ["Architecture assessment", "Risk register", "Prioritized remediation plan"], "ai-opportunity-assessment", "Quoted after technical assessment", ["technical audit", "review"]),
  service("serverless-ai-prototype", "ai", "Serverless AI Prototype", "Test one API-backed AI feature using managed cloud services where suitable.", ["Serverless architecture", "API feature", "Deployment documentation"], "advanced-ai-ml", "Quoted after technical assessment", ["aws lambda", "s3"]),
  service("research-prototype", "ai", "Research & Simulation Prototype", "Translate one technical question into a reproducible prototype or simulation.", ["Prototype or simulation", "Scenario analysis", "Implementation recommendation"], "advanced-ai-ml", "Quoted after technical assessment", ["python", "matlab", "monte carlo"]),
  service("technical-advisory", "ai", "Technical Advisory Workshop", "Bring senior technical guidance into one defined architecture or engineering decision.", ["Preparation", "Focused workshop", "Decision notes"], "ai-opportunity-assessment", "Quoted after agenda review", ["mentoring", "consulting"]),
  service("custom-model-training", "ai", "Custom Model Training", "Assess and build a model only after the dataset, compute and evaluation requirements are understood.", ["Dataset assessment", "Training plan", "Evaluation approach"], "advanced-ai-ml", "Quoted after dataset and compute assessment", ["fine tuning", "machine learning"]),

  service("data-quality-review", "data", "Data-Quality Review", "Identify the quality issues preventing one dataset from being trusted or reused.", ["Sample assessment", "Quality findings", "Prioritized remediation rules"], "data-foundation", "Scoped after data review", ["validation", "quality"]),
  service("data-cleaning", "data", "Data Cleaning", "Apply agreed rules to one bounded dataset and document the changes.", ["Cleaning rules", "Processed dataset", "Change summary"], "reporting-dashboard", "Quoted after volume and quality review", ["spreadsheet", "csv"]),
  service("dashboard-development", "data", "Dashboard Development", "Turn agreed metrics and one or more accessible sources into a clear reporting view.", ["Metric definition", "Dashboard implementation", "User handover"], "reporting-dashboard", "Scoped after data review", ["power bi", "tableau", "reporting"]),
  service("data-integration", "data", "Data Integration", "Move one bounded source into a defined destination with monitored transformation rules.", ["Source mapping", "Pipeline implementation", "Validation and handover"], "data-foundation", "Quoted after source review", ["etl", "pipeline"]),
  service("data-migration", "data", "Data Migration", "Plan and execute a bounded migration after compatibility, volume and quality assessment.", ["Migration mapping", "Validation approach", "Controlled migration"], "enterprise-data", "Quoted after migration assessment", ["legacy", "transfer"]),
  service("data-governance-workshop", "data", "Data-Governance Workshop", "Clarify ownership, quality and action priorities for one agreed business area.", ["Ownership map", "Quality and access recommendations", "Action plan"], "data-foundation", "Scoped after stakeholder review", ["ownership", "policy"]),

  service("application-deployment", "platform", "Application Deployment", "Deploy one release-ready application into an agreed environment.", ["Environment configuration", "Deployment", "Launch validation"], "web-product-mvp", "Quoted after deployment-readiness review", ["vercel", "cloud", "hosting"]),
  service("cicd-setup", "platform", "Basic CI/CD Setup", "Create a repeatable delivery workflow for one repository and target environment.", ["Build workflow", "Deployment automation", "Documentation"], "web-product-mvp", "Quoted after repository review", ["github actions", "pipeline"]),
  service("cloud-architecture-review", "platform", "Cloud Architecture Review", "Review one workload for reliability, performance and maintainability decisions.", ["Architecture review", "Risk and cost considerations", "Prioritized recommendations"], "enterprise-platform", "Quoted after workload review", ["aws", "infrastructure"]),
  service("architecture-review", "platform", "Software Architecture Review", "Assess a product architecture before modernization, scaling or a major release.", ["System review", "Technical risk register", "Modernization roadmap"], "enterprise-platform", "Quoted after system review", ["modernization", "platform"]),
  service("qa-test-cycle", "platform", "QA Test Cycle", "Validate agreed critical journeys for one release and report reproducible defects.", ["Test plan", "Critical-journey testing", "Defect report"], "web-product-mvp", "Quoted after release review", ["testing", "quality assurance"]),
  service("technical-seo", "platform", "Website Technical SEO Setup", "Build sound search foundations without promising rankings.", ["Metadata and indexability", "Sitemap and structured content", "Technical validation"], "business-website", "Quoted after site review", ["google", "search"]),
  service("website-care", "platform", "Website Care", "Keep one small website maintained within an agreed support plan and response window.", ["Maintenance checks", "Minor agreed changes", "Issue reporting"], "business-website", "Support plan tailored to your system", ["maintenance", "monthly"]),
  service("application-care", "platform", "Application Care", "Maintain one application within agreed engineering hours, priorities and response targets.", ["Maintenance backlog", "Agreed engineering capacity", "Release notes"], "web-product-mvp", "Support plan tailored to your system", ["support", "maintenance"]),
  service("ai-system-care", "platform", "AI System Review & Care", "Review one AI feature against agreed evaluation checks and maintenance boundaries.", ["Evaluation checks", "Issue and drift review", "Agreed maintenance work"], "ai-business-workflow", "Support plan tailored to your system", ["monitoring", "evaluation"]),

  service("pos-software", "pos", "POS Software Supply & Licensing", "Select and quote suitable software against the business requirements and provider terms.", ["Requirement matching", "Licence options", "Configuration plan"], "new-pos-setup", "Vendor-specific quote", ["cashier", "licence"], "Saudi Arabia"),
  service("pos-hardware", "pos", "POS Hardware Supply", "Quote compatible terminals and peripherals by model, quantity and warranty terms.", ["Compatibility review", "Itemized hardware quote", "Warranty details"], "new-pos-setup", "Model and quantity-specific quote", ["terminal", "printer", "scanner"], "Saudi Arabia"),
  service("pos-configuration", "pos", "POS Configuration", "Configure one supported POS setup around the agreed catalogue and operating rules.", ["Software configuration", "Catalogue setup", "Operational validation"], "new-pos-setup", "Itemized configuration quote", ["cashier", "setup"], "Saudi Arabia"),
  service("pos-installation", "pos", "On-Site POS Installation", "Install agreed compatible equipment at a confirmed Saudi location and schedule.", ["Physical setup", "Connection checks", "Installation handover"], "new-pos-setup", "Location and equipment-specific quote", ["onsite", "terminal"], "Saudi Arabia"),
  service("pos-payment-integration", "pos", "POS Payment Integration", "Coordinate supported payment integration without acting as the payment processor.", ["Compatibility review", "Provider coordination", "Payment-flow testing"], "new-pos-setup", "Compatibility-based quote", ["mada", "merchant"], "Saudi Arabia"),
  service("pos-training", "pos", "POS Staff Training", "Train an agreed staff group on the configured daily sales workflow.", ["Role-based session", "Daily workflow practice", "Handover notes"], "new-pos-setup", "Session-specific quote", ["cashier", "staff"], "Saudi Arabia"),
  service("pos-support", "pos", "POS Support Plan", "Define maintenance, response targets and supported equipment around the installed system.", ["Support boundaries", "Response targets", "Maintenance schedule"], "multi-branch-pos", "Support plan tailored to your system", ["maintenance", "helpdesk"], "Saudi Arabia"),
  service("pos-catalogue-migration", "pos", "POS Catalogue Migration", "Move clean product or menu data into a supported POS system after compatibility review.", ["Data mapping", "Catalogue import", "Validation"], "upgrade-pos", "Quoted after catalogue review", ["products", "menu", "data"], "Saudi Arabia")
];

export const enquiryPackageOptions = solutionPackages.map((item) => item.title);

export const enquiryServiceGroups = serviceCategories.map((category) => ({
  label: category.title,
  options: individualServices.filter((item) => item.categoryId === category.id).map((item) => item.title)
}));

export function getCategory(id: string | undefined) {
  return solutionCategories.find((category) => category.id === id) ?? solutionCategories[0];
}

export function getPackagesForCategory(categoryId: string) {
  return solutionPackages.filter((item) => item.categoryId === categoryId);
}

export function getSolutionPackage(id: string) {
  return solutionPackages.find((item) => item.id === id);
}

export function getIndividualService(id: string) {
  return individualServices.find((item) => item.id === id);
}
