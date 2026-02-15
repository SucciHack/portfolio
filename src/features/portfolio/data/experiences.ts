import type { Experience } from "../types/experiences"

export const EXPERIENCES: Experience[] = [
  {
    id: "freelance",
    companyName: "Freelance",
    positions: [
      {
        id: "fullstack-developer",
        title: "Fullstack Developer",
        employmentPeriod: {
          start: "2023",
        },
        employmentType: "Freelance",
        description: `Building modern, scalable web applications from frontend to backend.
- Developed e-commerce platforms with Next.js, React, and TypeScript
- Built management systems and API-driven applications
- Created interactive user interfaces with focus on performance and usability
- Worked with Laravel, Prisma, Go, and MongoDB for backend development`,
        icon: "code",
        skills: [
          "React",
          "Next.js",
          "TypeScript",
          "Laravel",
          "Prisma",
          "Go",
          "MongoDB",
          "MySQL",
          "Tailwind CSS",
          "API Development",
          "E-commerce",
        ],
        isExpanded: true,
      },
    ],
    isCurrentEmployer: true,
  },
]
