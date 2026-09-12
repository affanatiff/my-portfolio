export const CAL_LINK = "https://cal.com/code-blue";
export const GITHUB_LINK = "https://github.com/affanatiff";
export const EMAILS = ["affan@codeblue.sbs", "shaheer@codeblue.sbs"];

export const CAPABILITIES = [
  "n8n",
  "AI Automation",
  "OpenAI",
  "APIs & Webhooks",
  "Google Sheets",
  "Telegram",
  "CRM Sync",
  "Lead Generation",
  "AI Chatbots",
  "Shopify",
];

export const NAV_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Automations", href: "#automations" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const SERVICES = [
  {
    number: "01",
    eyebrow: "Workflows that run themselves",
    title: "AI Automation",
    description:
      "We build practical AI-powered systems that remove repetitive work and connect the tools your business already uses.",
    features: [
      "AI-powered workflows",
      "Business process automation",
      "API integrations",
      "Human-in-the-loop systems",
    ],
  },
  {
    number: "02",
    eyebrow: "Built with n8n",
    title: "n8n Automation",
    description:
      "Custom n8n workflows for lead generation, customer support, data processing, notifications, and internal operations.",
    features: [
      "Webhook & API workflows",
      "CRM & Google Sheets sync",
      "Lead qualification",
      "Email & Telegram automation",
    ],
  },
  {
    number: "03",
    eyebrow: "AI-powered experiences",
    title: "AI Chatbots & Agents",
    description:
      "Useful AI assistants connected to real business data, APIs, databases, and communication channels.",
    features: [
      "Telegram chatbots",
      "AI customer support",
      "Order & booking flows",
      "Knowledge-based assistants",
    ],
  },
];

export const PROCESS = [
  {
    number: "01",
    title: "Discover",
    description:
      "We identify the repetitive process, understand your existing tools, and define what the automation needs to accomplish.",
  },
  {
    number: "02",
    title: "Design & Build",
    description:
      "We map the workflow, configure the integrations, build the automation, and test each part before connecting everything together.",
  },
  {
    number: "03",
    title: "Launch",
    description:
      "The finished workflow is deployed, tested with real scenarios, and documented so you understand exactly how it works.",
  },
  {
    number: "04",
    title: "Support",
    description:
      "After launch, workflows can be improved, expanded, monitored, and connected to additional tools as your business grows.",
  },
];

export type Project = {
  number: string;
  category: string;
  title: string;
  trigger: string;
  stat: string;
  description: string;
  stack: string[];
  features: string[];
  pipeline: string[];
  payload: Record<string, unknown>;
  jsonFile: string;
};

export const PROJECTS: Project[] = [
  {
    number: "01",
    category: "AI Lead Generation",
    title: "Lead Sourcing & Enrichment",
    trigger: "Webhook / New Lead",
    stat: "⚡ Qualifies in seconds",
    description:
      "An automated pipeline designed to collect leads, enrich company information, qualify prospects, and organize the results for outreach.",
    stack: ["n8n", "APIs", "Google Sheets", "AI"],
    features: [
      "Automated lead intake",
      "Company enrichment",
      "Lead qualification",
      "Structured output",
    ],
    pipeline: [
      "Webhook — New Lead",
      "Normalize Lead Fields",
      "Enrich Company Data",
      "AI Qualification Score",
      "Route: Qualified / Unqualified",
      "Slack Alert to Sales",
    ],
    payload: {
      event: "lead.captured",
      receivedAt: "2026-09-12T09:14:00Z",
      lead: {
        fullName: "Jordan Reyes",
        email: "jordan@northfieldlogistics.com",
        company: "Northfield Logistics",
        source: "Webform",
      },
      enrichment: {
        industry: "Freight & Logistics",
        employees: 85,
        website: "northfieldlogistics.com",
      },
      qualification: { score: 82, status: "Qualified" },
    },
    jsonFile: "/n8n/lead-sourcing-enrichment.json",
  },
  {
    number: "02",
    category: "AI Chatbot",
    title: "Telegram AI Ordering Assistant",
    trigger: "Telegram / New Message",
    stat: "💬 Books orders in chat",
    description:
      "A conversational ordering workflow designed to manage customer messages, collect order information, and maintain pending order states.",
    stack: ["n8n", "Telegram", "AI", "Database"],
    features: [
      "Conversational ordering",
      "Customer identification",
      "Pending order management",
      "Automated responses",
    ],
    pipeline: [
      "Telegram Trigger",
      "Identify Customer",
      "AI Agent — Order Intake",
      "Upsert Pending Order",
      "Confirm or Ask Follow-up",
    ],
    payload: {
      event: "telegram.message",
      chatId: 5839201,
      customer: {
        name: "Maria Santos",
        phone: "+63 917 555 0132",
        returning: true,
      },
      order: {
        items: [
          { name: "Iced Latte", qty: 2 },
          { name: "Blueberry Muffin", qty: 1 },
        ],
        status: "pending_confirmation",
      },
    },
    jsonFile: "/n8n/telegram-ai-ordering-assistant.json",
  },
  {
    number: "03",
    category: "E-Commerce Automation",
    title: "Shopify Customer Workflow",
    trigger: "Shopify / Order Created",
    stat: "🛒 Zero-touch fulfillment ops",
    description:
      "An automation concept connecting store activity with customer communication and internal business processes.",
    stack: ["Shopify", "n8n", "Webhooks", "Email"],
    features: [
      "Webhook-based triggers",
      "Customer data processing",
      "Automated notifications",
      "Workflow logging",
    ],
    pipeline: [
      "Shopify Trigger — Order Created",
      "Extract Customer & Order Data",
      "Update Internal CRM",
      "Send Confirmation Email",
      "Notify VIP Team if High-Value",
    ],
    payload: {
      event: "orders/create",
      orderId: "#SHP-10432",
      customerEmail: "hello@brightleafstudio.com",
      orderTotal: 264.5,
      currency: "USD",
      lineItems: [{ title: "Studio Lighting Kit", quantity: 1 }],
    },
    jsonFile: "/n8n/shopify-customer-workflow.json",
  },
  {
    number: "04",
    category: "Lead Qualification",
    title: "Lead Qualification Pipeline",
    trigger: "Form / New Submission",
    stat: "📊 Scores & routes instantly",
    description:
      "A structured workflow that receives lead information, evaluates qualification criteria, assigns relevant data, and routes the result.",
    stack: ["n8n", "Forms", "Google Sheets", "AI"],
    features: [
      "Lead intake",
      "Qualification logic",
      "Lead scoring",
      "Automated routing",
    ],
    pipeline: [
      "Form Submission Trigger",
      "Assign Criteria Weights",
      "Calculate Total Score",
      "Route by Tier (Hot / Warm / Cold)",
      "Notify Sales or Archive",
    ],
    payload: {
      event: "form.submitted",
      fullName: "Devon Clarke",
      budgetScore: 30,
      urgencyScore: 25,
      fitScore: 28,
      totalScore: 83,
      tier: "Hot",
    },
    jsonFile: "/n8n/lead-qualification-pipeline.json",
  },
];

export const AUTOMATIONS = [
  {
    number: "01",
    title: "Lead Generation",
    description: "Capture → enrich → qualify → score → store → notify",
    tools: ["Forms", "n8n", "APIs", "Google Sheets"],
  },
  {
    number: "02",
    title: "Customer Support",
    description: "Message → classify → generate response → human review → reply",
    tools: ["Email", "AI", "n8n", "Sheets"],
  },
  {
    number: "03",
    title: "E-Commerce",
    description: "Order → process → update → notify → record",
    tools: ["Shopify", "Webhooks", "n8n", "Email"],
  },
];

export const EXPERIENCE = [
  {
    period: "CURRENT",
    title: "AI Automation & n8n",
    company: "CodeBlue",
    description:
      "Building workflow automations, AI-powered processes, API integrations, chatbots, and business systems using n8n.",
  },
  {
    period: "FOCUS",
    title: "Business Automation",
    company: "AI + No-Code / Low-Code",
    description:
      "Focused on turning repetitive manual processes into reliable workflows that businesses can operate with less manual effort.",
  },
  {
    period: "BACKGROUND",
    title: "Business & Entrepreneurship",
    company: "Business Administration",
    description:
      "Business background combined with practical automation work, allowing technical solutions to be approached from a business-process perspective.",
  },
];

export const FAQS = [
  {
    question: "What can you automate?",
    answer:
      "Almost any repetitive process involving structured data and digital tools can potentially be automated. Examples include lead generation, customer support, notifications, data entry, reporting, CRM updates, order processing, and internal workflows.",
  },
  {
    question: "Do I need to change my existing tools?",
    answer:
      "Usually not. The goal is to connect the tools you already use. n8n can work with APIs, webhooks, Google Sheets, databases, email platforms, CRMs, Telegram, Shopify, and many other services.",
  },
  {
    question: "Can AI be included in the automation?",
    answer:
      "Yes. AI can be used for classification, extraction, summarization, lead qualification, response generation, document processing, and other tasks where normal fixed rules are not enough.",
  },
  {
    question: "Can you build an automation without an AI Agent?",
    answer:
      "Yes. Many reliable automations are actually better built using normal n8n nodes, APIs, conditions, code, databases, and structured logic instead of an AI Agent.",
  },
  {
    question: "Will I be able to understand and manage the workflow?",
    answer:
      "Yes. The workflow should be structured clearly so you can understand what triggers it, what happens at each stage, where data is stored, and where errors are handled.",
  },
  {
    question: "Can an existing workflow be improved?",
    answer:
      "Yes. Existing n8n workflows can be reviewed, debugged, simplified, expanded, and connected to additional services.",
  },
];
