// An array of links for navigation bar
const navBarLinks = [
  { name: "Home", url: "/" },
  { name: "Video", url: "/#video" },
  { name: "Mission", url: "/#mission" },
  { name: "Rules", url: "/#rules" },
  { name: "Prizes", url: "/#prizes" },
  { name: "Sponsors", url: "/#sponsors" },
  { name: "Timeline", url: "/#timeline" },
  { name: "Docs", url: "/welcome-to-docs/" },
];
// An array of links for footer
const footerLinks = [
  {
    section: "Hackathon",
    links: [
      { name: "Official Rules", url: "/guides/rules/" },
      { name: "Getting Started", url: "/guides/getting-started/" },
      { name: "How to Submit", url: "/guides/submission/" },
    ],
  },
  {
    section: "Resources",
    links: [
      { name: "Documentation", url: "/welcome-to-docs/" },
      { name: "FAQ & Support", url: "/support/faq/" },
      { name: "Contact Us", url: "/contact" },
    ],
  },
];
// An object of links for social icons
const socialLinks = {
  facebook: "https://www.facebook.com/",
  x: "https://twitter.com/",
  github: "https://github.com/VibeCodeUtah",
  google: "https://www.google.com/",
  slack: "https://slack.com/",
};

export default {
  navBarLinks,
  footerLinks,
  socialLinks,
};
