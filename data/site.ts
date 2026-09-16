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

export type Service = {
  number: string;
  slug: string;
  title: string;
  short: string;
  homeDescription?: string;
  description: string;
  capabilities: readonly string[];
};

export const services: readonly Service[] = [
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
    slug: "ai-intelligent-systems",
    title: "AI & Intelligent Systems",
    short: "Design practical AI products, intelligent workflows and production-oriented machine-learning systems that improve decisions, reduce operational friction and create stronger digital services.",
    homeDescription: "Design and deploy practical AI systems that connect models, business data, people and operational workflows, from early feasibility and RAG applications to computer vision, inference optimization and cloud deployment.",
    description:
      "Each engagement is shaped around the problem, with the appropriate product, software, AI and infrastructure capability brought into the delivery team.",
    capabilities: ["AI-enabled products and agents", "LLM and RAG systems", "Computer vision solutions", "Model deployment and optimization"]
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
];

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

export const aiServiceGroups = [
  {
    slug: "explore-and-define",
    title: "Explore and Define",
    intro: "Clarify the opportunity, constraints and delivery path before significant technical investment.",
    services: [
      {
        number: "01",
        title: "AI/ML Technical Discovery and Feasibility",
        description: "Assess whether an AI or machine-learning opportunity is technically viable before significant product investment.",
        deliverables: ["Use-case and data-readiness assessment", "Technical constraints and dependency review", "Model and infrastructure options", "Proof-of-concept plan", "Measurable acceptance criteria", "Technical delivery roadmap"]
      },
      {
        number: "10",
        title: "AI Architecture and Technical Review",
        description: "Review an existing AI system before production release, modernization or expansion.",
        deliverables: ["AI architecture review", "Model-serving assessment", "Performance and reliability review", "Maintainability assessment", "Technical risk register", "Prioritized remediation roadmap", "Engineering review session"]
      },
      {
        number: "13",
        title: "Technical Advisory and Engineering Enablement",
        description: "Provide senior technical guidance for organizations and engineering teams making important AI system decisions.",
        deliverables: ["Architecture consultations", "Technical proposal support", "Design reviews", "Code reviews", "Engineering mentoring", "Knowledge-transfer sessions", "Client-facing technical workshops"]
      }
    ]
  },
  {
    slug: "build-intelligent-products",
    title: "Build Intelligent Products",
    intro: "Turn defined use cases into useful AI-enabled products, workflows and application experiences.",
    services: [
      {
        number: "02",
        title: "LLM Application and RAG Engineering",
        description: "Design grounded LLM applications that connect language models with approved knowledge, business data and application workflows.",
        deliverables: ["RAG architecture and implementation", "Document ingestion and retrieval workflows", "Prompt and context orchestration", "Vector search integration", "Model and API integration", "Retrieval and response evaluation", "Evidence-grounded AI experiences"]
      },
      {
        number: "03",
        title: "AI Agent Development",
        description: "Build AI agents that support clearly defined business processes while preserving appropriate controls, traceability and human oversight.",
        deliverables: ["Agent workflow design", "Tool and API integration", "Business-rule implementation", "Memory and context architecture", "Human-review checkpoints", "Failure handling and auditability", "Agent evaluation"]
      },
      {
        number: "07",
        title: "Computer Vision Solutions",
        description: "Develop computer-vision systems for detection, classification and operational decision support.",
        deliverables: ["Dataset and labeling strategy", "Model selection and fine-tuning", "YOLO or CNN-based systems", "Detection and classification workflows", "False-alarm and detection analysis", "Prototype API integration", "Operational review interfaces"]
      },
      {
        number: "11",
        title: "Serverless AI Application Development",
        description: "Build focused AI-enabled applications using managed cloud services where serverless architecture fits the workload.",
        deliverables: ["Serverless backend architecture", "AWS Lambda and S3 implementation", "Model-provider integration", "API development", "Frontend connection", "Deployment documentation", "Scaling and workload-limit assessment"]
      }
    ]
  },
  {
    slug: "deploy-and-optimize",
    title: "Deploy and Optimize",
    intro: "Create the infrastructure and performance foundations needed to operate suitable AI workloads responsibly.",
    services: [
      {
        number: "04",
        title: "LLM Inference Performance Optimization",
        description: "Improve the speed, memory efficiency and infrastructure utilization of suitable LLM workloads.",
        deliverables: ["Inference profiling", "Bottleneck analysis", "Quantization strategy", "CUDA graph optimization", "KV-cache optimization", "Triton or CUDA-level optimization where justified", "Latency, throughput, memory and cost benchmarking"]
      },
      {
        number: "05",
        title: "Model Deployment and Serving",
        description: "Package and deploy machine-learning models behind reliable application interfaces and operational workflows.",
        deliverables: ["PyTorch, TensorFlow or ONNX deployment", "Inference APIs", "Containerized model services", "Deployment architecture", "Environment configuration", "Monitoring and rollback planning", "Technical handover"]
      },
      {
        number: "06",
        title: "Cloud Architecture for AI Workloads",
        description: "Create cloud foundations that allow AI products to deploy, operate and evolve with appropriate performance, reliability and cost controls.",
        deliverables: ["Cloud architecture", "AWS solution design", "Compute and storage selection", "Container and deployment planning", "Serverless architecture where appropriate", "Cost and performance analysis", "Architecture documentation"]
      },
      {
        number: "09",
        title: "GPU and HPC Workload Engineering",
        description: "Support compute-intensive simulation, experimentation and machine-learning workloads through structured resource planning and performance analysis.",
        deliverables: ["SLURM workload planning", "GPU and CPU profiling", "Runtime bottleneck analysis", "Parallel execution strategy", "Distributed workload guidance", "Resource-utilization review", "Reproducibility planning"]
      }
    ]
  },
  {
    slug: "evaluate-and-advance",
    title: "Evaluate and Advance",
    intro: "Use repeatable evidence to judge model quality, understand failure behavior and guide the next technical decision.",
    services: [
      {
        number: "08",
        title: "ML Experimentation and Evaluation",
        description: "Build repeatable experiments that show whether a model meets its intended technical and operational requirements.",
        deliverables: ["Metrics and baseline definition", "Reproducible evaluation pipelines", "Error analysis", "Robustness testing", "Sensitivity analysis", "Model comparison", "Technical reporting"]
      },
      {
        number: "12",
        title: "Research Prototyping and Simulation",
        description: "Translate technically complex concepts into testable prototypes, simulations and evidence-backed engineering recommendations.",
        deliverables: ["Python or MATLAB prototypes", "Monte Carlo simulation", "Scenario analysis", "Performance evaluation", "Sensitivity analysis", "Research summary", "Implementation recommendation"]
      }
    ]
  }
] as const;

export const aiDeliveryProcess = [
  { number: "01", title: "Assess", text: "Understand the business problem, available data, users, constraints and success criteria." },
  { number: "02", title: "Design", text: "Choose the appropriate model, system architecture, controls and evaluation approach." },
  { number: "03", title: "Prototype", text: "Build the smallest useful version needed to test the important technical assumptions." },
  { number: "04", title: "Evaluate", text: "Measure quality, reliability, latency, cost and failure behavior against agreed criteria." },
  { number: "05", title: "Deploy", text: "Integrate the system into the product or workflow with appropriate monitoring and human control." },
  { number: "06", title: "Improve", text: "Use operational evidence and feedback to refine the model, retrieval, infrastructure and user experience." }
] as const;

export const aiTrustPoints = [
  "Measurable acceptance criteria",
  "Evidence-grounded outputs",
  "Human review where decisions require it",
  "Traceable system behavior",
  "Explicit failure handling",
  "Project-specific performance validation"
] as const;

export const aiEngagementModels = [
  { title: "AI Discovery Sprint", label: "Establish a viable direction", text: "A focused engagement to assess feasibility, data readiness, architecture, risks and the smallest useful proof of concept." },
  { title: "AI Project Delivery", label: "Build a defined AI system", text: "A cross-functional team responsible for designing, building, integrating and evaluating a defined AI-enabled product or workflow." },
  { title: "Embedded AI Capability", label: "Add specialist depth", text: "AI/ML specialists working alongside a client's product and engineering teams for a defined objective or delivery period." },
  { title: "AI System Evolution", label: "Improve after deployment", text: "Ongoing evaluation, optimization, maintenance and expansion after initial deployment." }
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
    bio: "Builds AI-enabled workflows, system integrations and operational automation that connect models with dependable business processes.",
    linkedIn: "https://www.linkedin.com/in/esha-tariqdev/"
  },
  {
    initials: "AA",
    name: "Abdullah Abu Zaid",
    role: "Lead AI/ML Systems Engineer",
    bio: "Designs and optimizes applied AI systems for business applications, with a focus on LLMs, AI agents, RAG, computer vision, model deployment, inference performance and scalable machine-learning infrastructure.",
    linkedIn: "https://www.linkedin.com/in/AAbuzaid"
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
