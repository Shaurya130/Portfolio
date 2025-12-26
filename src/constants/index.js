import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  mlcoe,
  software,
  Vidtube,
  nexus,
  tailwind,
  nextjs,
  postgres,
  nodejs,
  akgec,
  mongodb,
  git,
  docker,
  threejs,
} from "../assets";

/* ================= NAV LINKS ================= */

export const navLinks = [
  { id: "about", title: "About" },
  { id: "work", title: "Work" },
  { id: "contact", title: "Contact" },
];

/* ================= SERVICES ================= */

const services = [
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Next.js Developer",
    icon: creator,
  },
];

/* ================= TECHNOLOGIES ================= */

const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "React JS", icon: reactjs },
  { name: "Next.js", icon: nextjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "MongoDB", icon: mongodb },
  { name: "PostgreSQL", icon: postgres },
  { name: "Three JS", icon: threejs },
  { name: "Git", icon: git },
  { name: "Docker", icon: docker },
];

/* ================= EXPERIENCE ================= */

const experiences = [
  {
    title: "Backend Developer",
    company_name: "MLCOE, AKGEC",
    icon: mlcoe,
    iconBg: "#1d1836",
    date: "Oct 2024 – Present",
    points: [
      "Designed and developed RESTful APIs using Node.js and Express for internal college projects.",
      "Worked with MongoDB and PostgreSQL for schema design, queries, and performance optimization.",
      "Collaborated with frontend developers to integrate APIs smoothly with React and Next.js.",
      "Focused on clean architecture, reusable code, and proper error handling.",
    ],
  },
  {
    title: "Training & Placement Coordinator",
    company_name: "AKGEC, Ghaziabad",
    icon: akgec,
    iconBg: "#E6DEDD",
    date: "Oct 2025 – Present",
    points: [
      "Coordinated between students, faculty, and recruiters for placement activities.",
      "Managed technical communication, scheduling, and student data workflows.",
      "Assisted peers with resume reviews, project guidance, and interview preparation.",
      "Developed strong leadership, communication, and organizational skills.",
    ],
  },
];

/* ================= PROJECTS ================= */

const projects = [
  {
    name: "Software Circuit",
    description:
      "A full-stack Stack Overflow–style Q&A platform that allows users to ask questions, post answers, and interact through votes. The application is built using Appwrite for authentication, database, and real-time backend services, ensuring scalability and security.",
    tags: [
      { name: "nextjs", color: "blue-text-gradient" },
      { name: "appwrite", color: "green-text-gradient" },
      { name: "zustand", color: "pink-text-gradient" },
    ],
    image: software,
    source_code_link: "https://github.com/Shaurya130/Software-Circuit",
  },
  {
    name: "Nexus Playground",
    description:
      "Nexus Playground is an AI-powered SaaS platform built with Next.js and Cloudinary that simplifies media optimization and transformation. It leverages Cloudinary’s AI features to intelligently resize, crop, and enhance images, as well as compress and optimize videos for faster delivery.",
    tags: [
      { name: "typescript", color: "blue-text-gradient" },
      { name: "cloudinary", color: "green-text-gradient" },
      { name: "prisma", color: "pink-text-gradient" },
    ],
    image: nexus,
    source_code_link: "https://github.com/Shaurya130/Nexus-Playground",
  },
  {
    name: "Video-Platform-Backend-System",
    description:
      "This repository contains the backend system for a full-featured video-sharing platform, inspired by platforms like YouTube. It’s built using Node.js and Express, focusing on robust API design, media handling, and scalable backend architecture.",
    tags: [
      { name: "expressjs", color: "blue-text-gradient" },
      { name: "mongodb", color: "green-text-gradient" },
      { name: "multer", color: "pink-text-gradient" },
    ],
    image: Vidtube,
    source_code_link: "https://github.com/Shaurya130/Video-Platform-Backend-System",
  },
];

export { services, technologies, experiences, projects };
