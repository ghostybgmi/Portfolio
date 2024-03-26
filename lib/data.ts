import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated B.Tech(DTU)",
    location: "Delhi, IND",
    description:
      "I graduated after 4 years of studying. I immediately found a job as an Associate Software Engineer.",
    icon: React.createElement(LuGraduationCap),
    date: "2023",
  },
  {
    title: "Front-End Developer",
    location: "Delhi, IND",
    description:
      "I worked as a front-end developer for 1 year in a startup. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2022",
  },
  {
    title: "Associate Software Engineer",
    location: "Delhi, IND",
    description:
      "I'm now a full-stack developer working as a fulltime employee. My stack includes React,Angular15, Next.js, TypeScript, Tailwind,.NET and MySQL. I'm open to new full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2023 -2024",
  },
] as const;

export const projectsData = [
  {
    title: "Weather-App",
    description:
      "Get live weather updates with our stylish Next.js, Tailwind CSS, and Material-UI app. Stay informed with accurate forecasts in a sleek interface",
    tags: ["React", "Next.js", "Tailwind", "MUI"],
    imageUrl: corpcommentImg,
    // width: 'auto',
    // height: 'auto'
    link: "https://weather-app-nextjs-seven-rho.vercel.app/",
  },
  {
    title: "Spotify Clone",
    description:
      "Seamless music experience: Next.js, Tailwind CSS, and Material-UI power our Spotify clone for exploring favorite tracks. ",
    tags: ["React", "Next.js", "Typescript", "Tailwind"],
    imageUrl: wordanalyticsImg,
    // width: 'auto',
    // height: 'auto'
    link: "https://spotify-clone-omega-liart.vercel.app/",
  },
  {
    title: "Task Management App",
    description:
      "Easily manage tasks with our sleek Next.js, Tailwind CSS, and Material-UI powered app.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "MUI"],
    imageUrl: rmtdevImg,
    // width: 'auto',
    // height: 'auto'
    link: "https://task-management-psv5.vercel.app/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Git",
  "Tailwind",
  "Redux",
  "Angular",
  ".Net Core",
  "MySQL",
] as const;
