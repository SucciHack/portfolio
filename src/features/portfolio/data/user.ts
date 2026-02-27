import type { User } from "@/features/portfolio/types/user"

export const USER = {
  firstName: "Samuel",
  lastName: "Kaweesi",
  displayName: "Kaweesi Samuel",
  username: "SucciHack",
  gender: "male",
  pronouns: "he/him",
  bio: "Building modern, scalable web applications from frontend to backend.",
  flipSentences: [
    "Building modern, scalable web applications from frontend to backend.",
    "Fullstack Developer",
    "Open Source Contributor",
  ],
  address: "Uganda",
  phoneNumber: "KzI1Njc0MjE4MDU0Mg==", // E.164 format, base64 encoded (https://t.io.vn/base64-string-converter)
  email: "a2F3ZWVzaXNhbXVlbDEzNkBnbWFpbC5jb20=", // base64 encoded
  website: "https://github.com/SucciHack",
  jobTitle: "Fullstack Developer",
  jobs: [
    {
      title: "Fullstack Developer",
      company: "Freelance",
      website: "https://github.com/SucciHack",
    },
  ],
  about: `
- **Fullstack Developer** experienced in building modern, scalable web applications from frontend to backend.
- Work across the full development stack using technologies like **React**, **Next.js**, **TypeScript**, **Laravel**, **Prisma**, **Go**, and **MongoDB** to create efficient, data-driven systems.
- Experience includes developing e-commerce platforms, management systems, API-driven applications, and interactive user interfaces — with a strong focus on performance, usability, and clean architecture.
- Passionate about building reliable software solutions and continuously improving skills in system design and backend development.
`,
  avatar: "https://github.com/SucciHack.png",
  ogImage: "https://github.com/SucciHack.png",
  namePronunciationUrl: "",
  timeZone: "Africa/Kampala",
  keywords: [
    "SucciHack",
    "Kaweesi Samuel",
    "Samuel Kaweesi",
    "fullstack developer",
    "react developer",
    "nextjs developer",
    "laravel developer",
  ],
  dateCreated: "2025-02-15", // YYYY-MM-DD
} satisfies User
