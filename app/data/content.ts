export const CAL_LINK = "https://cal.com/code-blue";
export const GITHUB_LINK = "https://github.com/affanatiff";
export const EMAILS = ["affan@codeblue.sbs", "shaheer@codeblue.sbs"];

export const CAPABILITIES = [
  "n8n",
  "OpenAI",
  "APIs & Webhooks",
  "GoHighLevel",
  "PostgreSQL",
  "HubSpot",
  "Airtable",
  "Slack",
  "RAG",
  "WhatsApp Business Cloud",
];

export const NAV_LINKS = [
  { label: "Projects", href: "/#projects" },
  { label: "Automations", href: "/#automations" },
  { label: "Experience", href: "/#experience" },
  { label: "Contact", href: "/#contact" },
];

export const SERVICES = [
  {
    number: "01",
    eyebrow: "Workflows that run themselves",
    title: "AI Automation",
    description:
      "We build practical AI-powered systems that remove repetitive work and connect the tools your business already uses.",
    features: [
      "AI-powered Workflows",
      "Business Process Automation",
      "API Integrations",
      "Human-in-the-Loop Systems",
    ],
  },
  {
    number: "02",
    eyebrow: "Built with n8n",
    title: "n8n Automation",
    description:
      "Custom n8n workflows for lead generation, customer support, data processing, notifications, and internal operations.",
    features: [
      "Webhook & API Workflows",
      "CRM & Google Sheets Sync",
      "Lead Qualification",
      "Email & Telegram Automation",
    ],
  },
  {
    number: "03",
    eyebrow: "AI-powered Experiences",
    title: "AI Chatbots & Voice Agents",
    description:
      "Useful AI assistants connected to real business data, APIs, databases, and communication channels.",
    features: [
      "Telegram Chatbots",
      "AI Customer Support",
      "Order & Booking Flows",
      "Knowledge-based Assistants",
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
  /** URL segment for the case study page: /projects/<slug> */
  slug: string;
  number: string;
  category: string;
  title: string;
  trigger: string;
  stat: string;
  description: string;
  /** Optional: the business problem this project solves. Left unset until
   *  supplied per-project — not fabricated. */
  problem?: string;
  stack: string[];
  features: string[];
  pipeline: string[];
  payload: Record<string, unknown>;
  jsonFile: string;
  /** This project's own GitHub repo. Replace with the real repo URL once
   *  it exists — placeholders follow github.com/affanatiff/<slug>. */
  github: string;
};

export const PROJECTS: Project[] = [
  {
    slug: "b2b-lead-sourcing-enrichment",
    number: "01",
    category: "AI Lead Generation",
    title: "B2B Lead Sourcing & Enrichment",
    trigger: "Google Sheets / Add Or Update Row",
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
      "Google Sheets Trigger",
      "Validate Lead Data",
      "Clean Lead Data",
      "Enrich Company Info",
      "Calculate Lead Score",
      "Route: Hot / Warm / Nurture / Disqualified",
      "Prepare CRM Record",
      "Update Sheets",
    ],
    payload: {
    row_number: "4",
      lead: {
        "Company Name": "Atlassian",
        "Website": "https://www.atlassian.com",
        "Contact Name": "Mike Cannon-Brookes",
        "Email": "IR@atlassian.com",
        "Phone": "14157011110",
        "Industry": "Software",
        "Country": "Australia",
        "Job Title": "Co-Founder & CEO",
      },
      enrichment: {
        "Lead ID": "LEAD-1789557867774",
        "Enriched Country": "United States",
        "Enriched Legal Name": "Atlassian Corporation",
        "Enriched Industry": "Software | Media & Internet Data Collection & Internet Portals | Business Services Custom Software & IT Services",
        "Enriched Employees": "over 10,000",
        "Enriched Revenue": "over-10 billion",
      },
      qualification: { 
        "ICP Fit": "Strong",
        "Lead Quality": "Low",
        "Recommended Action": "Research Further / Nurture",
        "Score Breakdown": "company size 3 | industry fit 20 | decision maker 0 | data completeness 9 | commercial potential 10 | data quality 0",
        "Final Score": 42,
        "Status": "NURTURE,"
       },
    },
    jsonFile: "/n8n/lead-sourcing-enrichment.json",
    github: "https://github.com/affanatiff/b2b-lead-sourcing-enrichment",
  },
  {
    slug: "customer-messages-ai-agent",
    number: "02",
    category: "AI Agent",
    title: "Customer Messages AI Agent",
    trigger: "Webhook / Incoming Message",
    stat: "💬 Books orders in chat",
    description:
      "A conversational ordering workflow designed to manage customer messages, collect order information, and maintain pending order states.",
    stack: ["n8n", "Webhook", "Gemini", "Sheets", "Gmail"],
    features: [
      "Conversational Ordering",
      "Customer Identification",
      "Pending Order Management",
      "Automated Responses",
    ],
    pipeline: [
      "Webhook Trigger",
      "Edit Fields / Normalize Input",
      "AI Agent Gemini",
      "Parse AI Output",
      "Log to Google Sheets",
      "Confidence Check",
      "Send Auto Reply / Notify Team (Gmail)",
      "Webhook Response",
    ],
    payload: {
      event: "webhook.message",
      customer: {
        name: "Anum",
        email: "Account Issue",
        message: "Hello, i have been trying to get in touch with customer support but have received no response. I have subscribed for your application services but my credentials have not been sent to me. Can someone please help me this",
        executionMode: "test",
      },
      "parsed output": {
        "received at": "2026-09",
        category: "Technical Support",
        sentiment: "negative",
        priority: "high",
        confidence: 0.95,
        suggested_reply: "Hello! We sincerely apologize for the delay in our response and for the frustration caused by the missing credentials. I have escalated your request to our technical team to ensure your access is provided immediately. Thank you for your patience while we resolve this for you.",
      },
      "final output": {
        "id": "1a0aa23a4a4a633d",
        "threadId": "1a0aa23a4a4a633d",
        "labelIds": [
          "SENT"
  ]
}
      },
    jsonFile: "/n8n/customers-messages-ai-agent.json",
    github: "https://github.com/affanatiff/customer-messages-ai-agent",
  },
  {
    slug: "ai-document-processing",
    number: "03",
    category: "AIAutomation",
    title: "AI Document Processing",
    trigger: "Document Upload / Webhook Trigger",
    stat: "� Automates Document Analysis and Processing",
    description:
      "An automation concept connecting store activity with customer communication and internal business processes.",
    stack: ["n8n", "Webhooks", "Code (Base64)", "OpenRouter", "Google Sheets", "Slack"],
    features: [
      "Webhook-based Triggers",
      "Customer Data Processing",
      "Automated Notifications",
      "Workflow Logging",
    ],
    pipeline: [
      "Document Upload",
      "Document Pre-Processing",
      "AI Data Classification & Data Extraction",
      "Parse AI Response",
      "Validate & Triage",
      "Route Document Type (Invoice / Contract / Other)",
      "Format Extracted Data",
      "Store Document Data",
      "Respond & Confirm",
    ],
    payload: [
{
"status":"processed",
"documentType":"Invoice",
"vendor":"APEX DISTRIBUTOR",
"invoiceNumber":"321597",
"totalAmount":"3494694",
"extractedDataJson": 
"{\"vendor\":\"APEX DISTRIBUTOR\",\"invoiceNumber\":\"321597\",\"date\":\"2026-05-06\",\"dueDate\":null,\"totalAmount\":3494694,\"currency\":\"PKR\",\"lineItems\":[{\"description\":\"VENOFER 100MG INJ\",\"quantity\":1000,\"unitPrice\":3825,\"total\":3494694}],\"keyTerms\":[\"Warranty Under Section 23(1)(i) of the Drugs Act 1976\",\"FORM 2A\",\"Sales Tax\",\"Advance Income Tax u/s 236H\"]}"
}
  ],
    jsonFile: "/n8n/ai-document-processing.json",
    github: "https://github.com/affanatiff/ai-document-processing",
  },
  {
    slug: "lead-qualification-pipeline",
    number: "04",
    category: "Lead Qualification",
    title: "Lead Qualification Pipeline",
    trigger: "Form / New Submission",
    stat: "📊 Scores & Routes Instantly",
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
    github: "https://github.com/affanatiff/lead-qualification-pipeline",
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
