// ─────────────────────────────────────────────────────────────────────────
// PORTFOLIO PROJECTS
// Add a new project by copying an object below and editing its fields.
// No real project files were supplied, so every entry here is a clearly
// marked DEMO placeholder (isPlaceholder: true) that only exists to show
// the gallery, filtering, and modal working. Delete these once you add
// your real work, or edit them in place.
//
// Fields:
//   id           — unique number
//   title        — project title
//   category     — must exactly match a label in src/data/categories.js
//   thumbnail    — path inside /public/images used on the grid card
//   images       — array of one or more larger images for the modal
//   description  — short description shown in the card + modal
//   featured     — true/false, reserved for future use
//   isPlaceholder— set to false (or remove) once you replace the images
// ─────────────────────────────────────────────────────────────────────────

const projects = [
  {
    id: 1,
    title: "Adroise",
    category: "Logo Design",
    thumbnail: "/images/imgs/logos/1.jpg",
    images: ["/images/imgs/logos/1.jpg"],
    description:
      "A colorful educational logo designed for Ardoise, featuring an open book to represent knowledge and learning. The bright colors reflect creativity, accessibility, and the brand’s vision: “Learning without borders.”",
    featured: true,
    isPlaceholder: true,
  },
  {
    id: 2,
    title: "Sample UI/UX Project",
    category: "UI/UX Design",
    thumbnail: "/images/placeholders/uiux.webp",
    images: ["/images/placeholders/uiux.webp"],
    description:
      "DEMO PLACEHOLDER — replace with a real UI/UX case study: screens, flow, and the problem it solves.",
    featured: true,
    isPlaceholder: true,
  },
  {
    id: 3,
    title: "Sample Social Media Set",
    category: "Social Media Design",
    thumbnail: "/images/placeholders/social.webp",
    images: ["/images/placeholders/social.webp"],
    description:
      "DEMO PLACEHOLDER — replace with a real social media design set (posts, stories, carousels).",
    featured: false,
    isPlaceholder: true,
  },
  {
    id: 4,
    title: "Sample Business Card",
    category: "Business Card Design",
    thumbnail: "/images/placeholders/bizcard.webp",
    images: ["/images/placeholders/bizcard.webp"],
    description:
      "DEMO PLACEHOLDER — replace with a real business card design, front and back.",
    featured: false,
    isPlaceholder: true,
  },
  {
    id: 5,
    title: "Sample Flyer Design",
    category: "Flyer Design",
    thumbnail: "/images/placeholders/flyer.webp",
    images: ["/images/placeholders/flyer.webp"],
    description:
      "DEMO PLACEHOLDER — replace with a real flyer design for an event or promotion.",
    featured: false,
    isPlaceholder: true,
  },
  {
    id: 6,
    title: "Sample Banner Set",
    category: "Banner & Advertising Design",
    thumbnail: "/images/placeholders/banner.webp",
    images: ["/images/placeholders/banner.webp"],
    description:
      "DEMO PLACEHOLDER — replace with a real banner or advertising design.",
    featured: false,
    isPlaceholder: true,
  },
];

export default projects;
