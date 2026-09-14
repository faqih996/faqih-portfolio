export const experiences: Experience[] = [
  {
    id: 1,
    company: "SEA Education International",
    position: "Full Stack Web Developer",
    location: "South Jakarta, Indonesia",
    employmentType: "Full Time",
    startDate: "February 2022",
    endDate: "May 2026",
    current: true,

    description:
      "Developed and maintained internal web applications for student registration, payment management, training programs, and company operations.",

    achievements: [
      "Developed and maintained Sea Education web applications using Laravel, Livewire, Alpine.js, and MySQL.",
      "Developed and maintained 3 internal web applications using Laravel, Livewire, Alpine.js, and MySQL.",
      "Optimized database queries and application logic, reducing response time by approximately 30%.",
      "Integrated REST APIs to support internal systems and third-party services.",
    ],

    technologies: [
      "Laravel",
      "Livewire",
      "Alpine.js",
      "Tailwind CSS",
      "MySQL",
      "JavaScript",
    ],

    logo: "/images/experiences/sea.png",
  },

  {
    id: 2,
    company: "DNG Corporation",
    position: "Freelance Web Developer",
    location: "East Jakarta, Indonesia",
    employmentType: "Freelance",
    startDate: "August 2024",
    endDate: "February 2025",
    current: false,

    description:
      "Developed a web-based logistics solution for a delivery service, focusing on practical business workflows and operational needs.",

    achievements: [
      "Developed the frontend and backend of a custom logistics web application.",
      "Integrated REST APIs to enhance system functionality and automation across modules.",
      "Implemented database integration and business logic based on client requirements.",
      "Handled deployment, maintenance, and technical adjustments throughout the project.",
    ],

    technologies: ["Laravel", "PHP", "Tailwind CSS", "MySQL", "JavaScript"],

    logo: "/images/experiences/dng.png",
  },

  {
    id: 3,
    company: "PT Sentina Arta Sumberdaya",
    position: "IT Support",
    location: "Jakarta, Indonesia",
    employmentType: "Contract",
    startDate: "June 2018",
    endDate: "February 2022",
    current: false,

    description:
      "Provided technical support and maintained IT infrastructure to ensure smooth day-to-day operations across the organization.",

    achievements: [
      "Provided hardware and software troubleshooting for daily operational issues.",
      "Maintained computers, printers, and other workplace devices.",
      "Performed software installation, configuration, and system maintenance.",
      "Provided basic network and connectivity support for users.",
    ],

    technologies: [
      "Windows",
      "Hardware Troubleshooting",
      "Software Support",
      "Printer Support",
      "Basic Networking",
    ],

    logo: "/images/experiences/sas.png",
  },
];
