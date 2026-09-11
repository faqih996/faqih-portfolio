import type { Project } from "~/types";

export const projects: Project[] = [
  {
    id: 1,

    title: "SEA Education",

    slug: "sea-education",

    company: "SEA Education",

    role: "Full Stack Web Developer",

    description:
      "A modern web platform for overseas education, internship, recruitment, and student management.",

    thumbnail: "/images/projects/sea-education.png",

    technologies: ["Laravel", "Livewire", "Alpine.js", "MySQL"],

    website: "https://seaeducation.id",

    github: "",

    featured: true,

    year: 2022,

    color: "#1053B7",
  },

  {
    id: 2,

    title: "DNG Logistic Service",

    slug: "dng-logistic-service",

    company: "DNG Coorporation",

    role: "Full Stack Web Developer",

    description:
      "A web-based logistics solution for a delivery service, focusing on practical business workflows and operational needs.",

    thumbnail: "/images/projects/dng-logistic-service.png",

    technologies: ["Laravel", "Alpine.js", "MySQL"],

    website: "https://dnglogisticservice.com/",

    github: "",

    featured: true,

    year: 2025,

    color: "#C41E22",
  },

  {
    id: 3,

    title: "SMP Kebangsaan",

    slug: "smp-kebangsaan",

    company: "Yayasan Hadi Siswa",

    role: "Web Developer",

    description:
      "A Landing Page for SMP Kebangsaan, a school in South Tangerang, Indonesia, providing information about the school, its programs, and enrollment process.",

    thumbnail: "/images/projects/smpkebangsaan.png",

    technologies: ["Laravel", "Alpine.js", "MySQL"],

    website: "https://smpkebangsaan.sch.id/",

    github: "",

    featured: true,

    year: 2024,

    color: "#C41E22",
  },

  {
    id: 4,

    title: "Travelo Travel Agency",

    slug: "travelo-travel-agency",

    description:
      "A travel agency web application featuring travel package management, customer bookings, and trip information, with a responsive frontend built using React, TypeScript, and TailwindCSS.",

    thumbnail: "/images/projects/travelo.png",

    technologies: ["React", "TypeScript", "TailwindCSS"],

    github: "https://github.com/username/project",

    featured: false,

    year: 2023,
  },

  {
    id: 5,

    title: "Meet Doctor",

    slug: "meet-doctor",

    description:
      "A doctor appointment web application for managing doctors, schedules, and patient appointments, built with Laravel, MySQL, and TailwindCSS.",

    thumbnail: "/images/projects/meet-doctor.png",

    technologies: ["Laravel", "MySQL", "TailwindCSS"],

    github: "https://github.com/username/project",

    featured: false,

    year: 2024,
  },

  {
    id: 6,

    title: "Campus Management System",

    slug: "campus-management-system",

    description:
      "A full-stack campus management system covering student management, academic activities, payments, and administrative workflows, integrating Laravel, React.js, Inertia.js, and Midtrans.",

    thumbnail: "/images/projects/siaku-web.png",

    technologies: [
      "Laravel",
      "MySQL",
      "TailwindCSS",
      "Shadcn/UI",
      "Midtrans",
      "React.js",
      "Inertia.js",
    ],

    github: "https://github.com/username/project",

    featured: false,

    year: 2025,
  },
];
