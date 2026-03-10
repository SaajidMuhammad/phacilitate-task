export const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Benefits", href: "#benefits" },
  { label: "Company", href: "#about" },
  { label: "Insight", href: "#faq" },
] as const;

export const PARTNER_LOGOS = [
  "loom",
  "HubSpot",
  "OpenAI",
  "Raycast",
  "zenefits",
] as const;

export const VALUES = [
  {
    icon: "transparency",
    title: "Transparency",
    description:
      "A standard for the industry even when complex data meets simple daily tasks with financial strategy.",
  },
  {
    icon: "expansion",
    title: "Creative expansion",
    description:
      "Our innovation approach to creative understanding allows for you to expand without limiting expectations.",
  },
  {
    icon: "investment",
    title: "Private Credit Investments",
    description:
      "Proprietary access to unique private credit opportunities that aren't available to most investors.",
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: "How sending a bank transfer",
    answer:
      "You can send a bank transfer directly from your Ascone account. Navigate to the transfer section, enter the recipient details, and confirm the amount. Transfers are processed within 1-2 business days.",
  },
  {
    question: "What is the scheduled payments feature?",
    answer:
      "The scheduled payments feature lets you automate recurring payments so you can set a date for every recurring transaction. This way, you don't need to manually initiate every payment each time.",
  },
  {
    question: "How can I reach/end a terminated card?",
    answer:
      "If your card has been terminated, please contact our support team through the app or email. We'll help you understand the reason and guide you through getting a replacement card if needed.",
  },
  {
    question: "How about with a refund?",
    answer:
      "Refunds are processed automatically when a merchant initiates one. Typically, refunds appear in your account within 5-10 business days depending on the merchant and payment method.",
  },
  {
    question: "How can add money to my account?",
    answer:
      "You can add money to your Ascone account via bank transfer, debit card, or direct deposit. Simply go to the deposit section in your app and choose your preferred method.",
  },
] as const;

export const FOOTER_LINKS = {
  Account: [
    { label: "Profile", href: "#" },
    { label: "Settings", href: "#" },
    { label: "Security", href: "#" },
  ],
  Help: [
    { label: "Support", href: "#" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#" },
  ],
  Finance: [
    { label: "Savings", href: "#" },
    { label: "Transfers", href: "#" },
    { label: "Investments", href: "#" },
  ],
  Company: [
    { label: "About", href: "#about" },
    { label: "Careers", href: "#" },
    { label: "Press", href: "#" },
  ],
} as const;
