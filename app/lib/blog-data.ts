export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  content: string[];
  author: string;
  date: string;
  readTime: string;
};

export const posts: BlogPost[] = [
  {
    slug: "brand-story-that-converts",
    title: "How to build a brand story that actually converts",
    category: "Brand Strategy",
    excerpt:
      "Turn your positioning into a story customers remember and trust before they ever speak to you.",
    author: "Northstar Studio",
    date: "September 18, 2026",
    readTime: "5 min read",
    content: [
      "Most businesses think branding is about design and tone. In reality, it is about clarity. When your audience understands exactly why you exist, what you solve, and why your offer matters now, the buying decision becomes easier.",
      "The strongest brands do not shout louder. They create a simpler narrative that removes friction from the decision. Start by identifying the real problem your customer feels and show the exact transformation your service creates.",
      "Then make that transformation visible in your messaging, offers, and customer experience. When every touchpoint reinforces the same story, your website feels premium and your conversion path becomes smoother.",
      "This is where strong landing pages outperform crowded pages: they make your value impossible to ignore."
    ]
  },
  {
    slug: "landing-page-ux-checklist",
    title: "The landing page UX checklist that improves conversion",
    category: "UX",
    excerpt:
      "A practical list of UX decisions that help visitors understand value quickly and take action.",
    author: "Northstar Studio",
    date: "September 11, 2026",
    readTime: "6 min read",
    content: [
      "A good landing page should answer three questions in under ten seconds: what is this, who is it for, and why should I care? If the visitor has to guess, the page is failing.",
      "The best landing pages are focused around one action. Remove unrelated navigation, reduce decision fatigue, and increase visibility around the primary call to action.",
      "Social proof, concise benefits, and a polished visual hierarchy all support trust. If your message is clear and your page feels calm, the conversion path becomes much easier for the visitor to follow.",
      "The goal is never to impress everyone. The goal is to help the right people decide quickly."
    ]
  },
  {
    slug: "content-system-for-startups",
    title: "A simple content system for startup teams with no time",
    category: "Growth",
    excerpt:
      "Build a repeatable publishing process that keeps your brand visible without exhausting your team.",
    author: "Northstar Studio",
    date: "September 02, 2026",
    readTime: "4 min read",
    content: [
      "Most startup teams do not need more content ideas. They need a system that turns one insight into multiple assets without burning time.",
      "Start with one core topic, one customer problem, and one business goal. Use that as the base for a short article, a LinkedIn post, a one-paragraph email, and a landing page update.",
      "When your content is connected to customer pain points, it becomes easier to publish consistently and measure impact. The system matters more than volume.",
      "A monthly content rhythm is enough if it is designed around repetitive value creation. This is how small teams become visible brands."
    ]
  }
];
