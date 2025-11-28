// An array of links for navigation bar
const navBarLinks = [
  { name: "Home", url: "/" },
  { name: "Mission", url: "/#mission" },
  { name: "Teams", url: "/teams" },
  { name: "Rules", url: "/#rules" },
  { name: "Sponsors", url: "/#sponsors" },
  { name: "Timeline", url: "/#timeline" },
  { name: "Docs", url: "/docs/welcome-to-docs/" },
];
// An array of links for footer
const footerLinks = [
  {
    section: "Hackathon",
    links: [
      { name: "Official Rules", url: "/docs/rules/official-rules/" },
      { name: "Getting Started", url: "/docs/guides/getting-started/" },
      { name: "How to Submit", url: "/docs/guides/submission/" },
    ],
  },
  {
    section: "Resources",
    links: [
      { name: "Documentation", url: "/docs/welcome-to-docs/" },
      { name: "FAQ & Support", url: "/docs/support/faq/" },
      { name: "Contact Us", url: "/contact" },
    ],
  },
];
// An object of links for social icons
const socialLinks = {
  github: "https://github.com/VibeCodeUtah",
  x: "https://twitter.com/VibeCodeUtah",
  discord: "https://discord.gg/vibecodeutah",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};
