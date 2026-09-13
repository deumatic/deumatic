export const site = {
  name: "Deumatic",
  url: "https://www.deumatic.com",
  github: "https://github.com/deumatic",
  email: "deumatic.ai@gmail.com",
  foundingDate: "2026-05",
  tagline: "Digital products built around real business needs.",
  description:
    "Deumatic designs and builds web platforms, mobile apps, AI automation and digital products for startups, growing companies and enterprise teams."
} as const;

export const navItems = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" }
] as const;

export const services = [
  {
    number: "01",
    slug: "product-strategy",
    title: "Product Strategy & Discovery",
    short: "Turn an opportunity into a focused product direction before expensive decisions are made.",
    description:
      "We help teams clarify the problem, understand the people involved, define priorities and shape a practical roadmap that design and engineering can execute.",
    capabilities: ["Discovery workshops", "Product definition", "Requirements and roadmaps", "Technical feasibility"]
  },
  {
    number: "02",
    slug: "experience-design",
    title: "Experience Design",
    short: "Create digital experiences that feel clear, purposeful and easy to use.",
    description:
      "From information architecture and interaction design to polished interfaces and design systems, we connect user needs with business intent.",
    capabilities: ["UX research", "User journeys", "UI design", "Prototypes and design systems"]
  },
  {
    number: "03",
    slug: "software-engineering",
    title: "Software Engineering",
    short: "Build reliable web platforms and full-stack applications around real business requirements.",
    description:
      "We engineer responsive frontends, robust backends, APIs and integrations with maintainability, security and future growth in mind.",
    capabilities: ["Web applications", "Frontend engineering", "Backend systems and APIs", "Platform modernization"]
  },
  {
    number: "04",
    slug: "mobile-applications",
    title: "Mobile Applications",
    short: "Deliver mobile products that perform naturally across Android and iOS.",
    description:
      "We plan, design and develop mobile experiences with thoughtful platform behavior, dependable integrations and a clear path to release.",
    capabilities: ["Android applications", "iOS applications", "Cross-platform development", "App integration and release"]
  },
  {
    number: "05",
    slug: "ai-automation",
    title: "AI & Automation",
    short: "Use AI and automation where they remove friction, improve decisions or create a stronger service.",
    description:
      "We design practical workflows, intelligent assistants and application features that connect models, data, people and existing systems.",
    capabilities: ["AI-enabled products", "Workflow automation", "Intelligent assistants", "Model and system integration"]
  },
  {
    number: "06",
    slug: "cloud-platforms",
    title: "Cloud & Platform Engineering",
    short: "Create the technical foundation products need to deploy, operate and evolve with confidence.",
    description:
      "We support architecture, cloud deployment, integration, performance and delivery workflows so product teams can move without accumulating avoidable risk.",
    capabilities: ["Cloud architecture", "Deployment workflows", "Performance and reliability", "System integration"]
  },
  {
    number: "07",
    slug: "digital-growth",
    title: "Digital Growth",
    short: "Connect product, brand and digital channels around a coherent path to adoption.",
    description:
      "We help businesses strengthen their digital presence through conversion-aware websites, content direction, campaign experiences and measurable growth foundations.",
    capabilities: ["Digital strategy", "Conversion experiences", "SEO foundations", "Campaign and content systems"]
  }
] as const;

export const process = [
  { number: "01", title: "Discover", text: "Understand the opportunity, users, constraints and decisions that matter." },
  { number: "02", title: "Define", text: "Turn findings into a focused scope, product direction and delivery plan." },
  { number: "03", title: "Design", text: "Make the experience tangible, test important flows and align the team." },
  { number: "04", title: "Build", text: "Engineer the product in reviewable releases with quality built into delivery." },
  { number: "05", title: "Launch", text: "Prepare production, validate critical journeys and release with confidence." },
  { number: "06", title: "Evolve", text: "Use feedback and product signals to improve what creates the most value." }
] as const;

export const engagementModels = [
  {
    title: "Product Sprint",
    label: "Define the right next move",
    text: "A focused engagement for discovery, validation, product definition or an actionable technical roadmap."
  },
  {
    title: "Project Delivery",
    label: "Move from scope to release",
    text: "A cross-functional team responsible for designing and building a defined digital product or platform."
  },
  {
    title: "Embedded Partnership",
    label: "Add focused capability",
    text: "Product, design or engineering specialists working closely with your existing team and operating rhythm."
  },
  {
    title: "Continuous Evolution",
    label: "Improve after launch",
    text: "Ongoing product development, optimization, maintenance and automation as priorities change."
  }
] as const;

export const team = [
  {
    initials: "MU",
    name: "Muhammad Usman",
    role: "Software Engineer & Product Strategist",
    bio: "Connects product planning with hands-on software development, translating business requirements into focused, buildable systems.",
    linkedIn: "https://www.linkedin.com/in/datawithusman/"
  },
  {
    initials: "NF",
    name: "Noor Fatima",
    role: "Product Experience Designer & Growth Strategist",
    bio: "Shapes clear product experiences and connects interface decisions with adoption, communication and sustainable digital growth.",
    linkedIn: "https://www.linkedin.com/in/noorfatima-ai/"
  },
  {
    initials: "DC",
    name: "David Castellon",
    role: "Software Architect & Platform Engineer",
    bio: "Focuses on application architecture, scalable frontend systems, platform reliability and disciplined technical delivery.",
    linkedIn: "https://www.linkedin.com/in/david-castellon-81579418b/"
  },
  {
    initials: "ET",
    name: "Esha Tariq",
    role: "AI Systems & Automation Engineer",
    bio: "Develops AI-enabled workflows and automation systems that connect models, applications and operational processes.",
    linkedIn: "https://www.linkedin.com/in/esha-tariqdev/"
  }
] as const;

export const principles = [
  { title: "Clarity before complexity", text: "We define the problem and the decision before recommending a platform, model or feature." },
  { title: "One connected team", text: "Strategy, design and engineering work together so important context is not lost between handoffs." },
  { title: "Useful over impressive", text: "Technology earns its place by improving the product, workflow or customer experience." },
  { title: "Built to keep moving", text: "We make deliberate architecture and design decisions that leave room for the next release." }
] as const;

export const faqs = [
  {
    question: "What kinds of companies do you work with?",
    answer: "We work with founders, growing companies and established teams that need focused product, design, engineering or automation capability."
  },
  {
    question: "Can Deumatic handle both design and development?",
    answer: "Yes. Our model connects product direction, experience design and engineering so the same team can move from early definition to production delivery."
  },
  {
    question: "Do you build web and mobile applications?",
    answer: "Yes. We design and develop full-stack web platforms as well as Android, iOS and cross-platform mobile applications."
  },
  {
    question: "Do you only work on new products?",
    answer: "No. We can help launch a new product, improve an existing experience, modernize a platform or automate a specific operational workflow."
  },
  {
    question: "How does a project begin?",
    answer: "We start with a focused conversation about the problem, current context and desired outcome. From there we recommend the smallest sensible next step."
  }
] as const;
