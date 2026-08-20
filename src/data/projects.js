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
    id: 19,
    title: "Fitness App",
    category: "UI/UX Design",
    thumbnail: "/images/imgs/logos/19.jpg",
    images: ["/images/imgs/logos/19.jpg"],
    description:
      "A modern dark-themed fitness app UI featuring an engaging welcome screen, simple login flow, personalized daily workouts, activity tracking, step counts, and weekly progress monitoring.",
    featured: true,
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
    id: 20,
    title: "Taleeb",
    category: "UI/UX Design",
    thumbnail: "/images/imgs/logos/20.jpg",
    images: ["/images/imgs/logos/20.jpg"],
    description:
      "A clean mobile UI for Taleeb, a student platform featuring secure login, daily schedules, exam countdowns, semester progress, announcements, and a searchable class feed.",
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
    id: 11,
    title: "Thumbnail Design",
    category: "Thumbnail Design",
    thumbnail: "/images/imgs/logos/11.jpg",
    images: ["/images/imgs/logos/11.jpg"],
    description:
      "A collection of eye-catching YouTube thumbnails covering business, language learning, sports, and social media topics, using expressive subjects, bold typography, and strong visual contrast.",
    featured: true,
    isPlaceholder: true,
  },
  {
    id: 12,
    title: "Thumbnail Design",
    category: "Thumbnail Design",
    thumbnail: "/images/imgs/logos/12.jpg",
    images: ["/images/imgs/logos/12.jpg"],
    description:
      "A collection of Arabic YouTube thumbnails covering entertainment, storytelling, money, and pest-control topics, using expressive characters, bold typography, vibrant colors, and strong visual contrast.",
    featured: true,
    isPlaceholder: true,
  },
  {
    id: 14,
    title: "flowers store",
    category: "Logo Design",
    thumbnail: "/images/imgs/logos/14.jpg",
    images: ["/images/imgs/logos/14.jpg"],
    description:
      "A bilingual logo design for Zahret Ishbiliyah, featuring a clean gift-box icon and elegant Arabic and English typography, presented in multiple color variations for flexible brand use.",
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
    id: 15,
    title: "Wild Pixel",
    category: "Logo Design",
    thumbnail: "/images/imgs/logos/15.jpg",
    images: ["/images/imgs/logos/15.jpg"],
    description:
      "A modern logo for Wild Pixel, featuring a clean “WP” monogram, vibrant gradient colors, and bold typography that reflects the agency’s creative and digital identity.",
    featured: true,
    isPlaceholder: true,
  },
  {
    id: 17,
    title: "Sombra Chicken",
    category: "UI/UX Design",
    thumbnail: "/images/imgs/logos/17.jpg",
    images: ["/images/imgs/logos/17.jpg"],
    description:
      "A modern restaurant website design for Sombra Chicken, featuring an appetizing menu, easy phone ordering, delivery information, and a bold orange-and-green visual identity.",
    featured: true,
    isPlaceholder: true,
  },
  {
    id: 18,
    title: "E-commerce Website",
    category: "UI/UX Design",
    thumbnail: "/images/imgs/logos/18.jpg",
    images: ["/images/imgs/logos/18.jpg"],
    description:
      "A modern mobile e-commerce website design featuring product categories, search and price filters, product cards, and customer benefits such as free shipping, returns, and 24/7 support.",
    featured: true,
    isPlaceholder: true,
  },
  {
    id: 16,
    title: "Karam Coffee",
    category: "Logo Design",
    thumbnail: "/images/imgs/logos/16.jpg",
    images: ["/images/imgs/logos/16.jpg"],
    description:
      "A minimalist logo for Karam Coffee, combining a simple cup icon with warm brown and beige tones to create a cozy and inviting café identity.",
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
