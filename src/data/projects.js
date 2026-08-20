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
    title: "Sidi Ali Water",
    category: "Social Media Design",
    thumbnail: "/images/imgs/logos/3.jpg",
    images: ["/images/imgs/logos/3.jpg"],
    description:
      "A refreshing social media advertisement for Sidi Ali mineral water, combining snowy mountain scenery, cool blue tones, and the message “Drink Pure. Live Pure.” to emphasize freshness and natural purity.",
    featured: false,
    isPlaceholder: true,
  },
  {
    id: 3,
    title: "Ice Cream Social",
    category: "Social Media Design",
    thumbnail: "/images/imgs/logos/2.jpg",
    images: ["/images/imgs/logos/2.jpg"],
    description:
      "A vibrant social media advertisement featuring pistachio ice cream, bold typography, and promotional offers. The fresh green palette and playful graphics create an appetizing and eye-catching design.",
    featured: true,
    isPlaceholder: true,
  },
  {
    id: 4,
    title: "Business Card",
    category: "Business Card Design",
    thumbnail: "/images/imgs/logos/4.jpg",
    images: ["/images/imgs/logos/4.jpg"],
    description:
      "A diverse collection of modern business card designs created for a freelance web developer and graphic designer, featuring consistent branding, clean layouts, and multiple color variations.",
    featured: false,
    isPlaceholder: true,
  },
  {
    id: 5,
    title: "Flyer Design",
    category: "Flyer Design",
    thumbnail: "/images/imgs/logos/6.jpg",
    images: ["/images/imgs/logos/6.jpg"],
    description:
      "Two colorful promotional flyer designs: one advertising a back-to-school offer and the other promoting 24/7 home-delivery services, using bold typography, vibrant colors, and clear discount information.",
    featured: false,
    isPlaceholder: true,
  },

  {
    id: 7,
    title: "Delicious Burger",
    category: "Social Media Design",
    thumbnail: "/images/imgs/logos/7.jpg",
    images: ["/images/imgs/logos/7.jpg"],
    description:
      "A bold social media advertisement featuring a delicious burger, warm colors, and eye-catching typography. Promotional elements highlight a 50% discount, free home delivery, and a clear ordering call to action.",
    featured: true,
    isPlaceholder: true,
  },
  {
    id: 8,
    title: "Special Pizza",
    category: "Social Media Design",
    thumbnail: "/images/imgs/logos/8.jpg",
    images: ["/images/imgs/logos/8.jpg"],
    description:
      "A warm promotional pizza advertisement featuring an appetizing product image, elegant typography, a clear $10 special offer, free delivery details, and a strong ordering call to action.",
    featured: true,
    isPlaceholder: true,
  },
  {
    id: 9,
    title: "Smart phone",
    category: "Social Media Design",
    thumbnail: "/images/imgs/logos/9.jpg",
    images: ["/images/imgs/logos/9.jpg"],
    description:
      "A modern social media campaign for a smartphone promotion, featuring a dark premium color palette, dynamic product presentation, Arabic typography, and a bold 50% discount offer.",
    featured: true,
    isPlaceholder: true,
  },
  {
    id: 10,
    title: "ATS résumé",
    category: "Resume Design",
    thumbnail: "/images/imgs/logos/10.jpg",
    images: ["/images/imgs/logos/10.jpg"],
    description:
      "Two professional résumé designs for a senior marketing specialist, featuring clear information hierarchy, structured sections, clean typography, and modern layouts suitable for job applications.",
    featured: true,
    isPlaceholder: true,
  },
  {
    id: 13,
    title: "ATS résumé",
    category: "Resume Design",
    thumbnail: "/images/imgs/logos/13.jpg",
    images: ["/images/imgs/logos/13.jpg"],
    description:
      "Two professional résumé designs for a senior marketing specialist, featuring clear information hierarchy, structured sections, clean typography, and modern layouts suitable for job applications.",
    featured: true,
    isPlaceholder: true,
  },
  {
    id: 6,
    title: "Banner Set",
    category: "Banner & Advertising Design",
    thumbnail: "/images/imgs/logos/5.jpg",
    images: ["/images/imgs/logos/5.jpg"],
    description:
      "Two promotional banner designs: one for a men’s fashion store and another for a traditional Moroccan restaurant, using bold colors, product imagery, and clear Arabic and French typography.",
    featured: false,
    isPlaceholder: true,
  },
];

export default projects;
