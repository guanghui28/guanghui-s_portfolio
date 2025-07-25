import React from "react";
import { FaReact } from "react-icons/fa";
import { LuGamepad2, LuGraduationCap } from "react-icons/lu";
import { FaComputer } from "react-icons/fa6";
import bookshelfImg from "@/public/projects/blog-app.png";
import threadAppImg from "@/public/projects/thread-app.png";
import transactionImg from "@/public/projects/transaction.png";
import blogAppImg from "@/public/projects/blog-app.png";

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
		title: "Bachelor's Computer Science",
		location: "UIT (VNU - HCM)",
		description:
			"At university, I learned C++, Python & some concept about Machine Learning, which sparked my interest in programming. This foundation led me to explore web development.",
		icon: React.createElement(FaComputer),
		date: "2020",
		iconTheme: {
			light: "oklch(64.5% 0.246 16.439)", // Hot Pink
			dark: "oklch(45.9% 0.187 3.815)", // Darker Pink
		},
	},
	{
		title: "Pursuit Web Development",
		location: "HCM, Vietnam",
		description:
			"I'm a self-taught web developer with a passion for React and web development. My journey involves mastering modern web technologies to create dynamic, user-friendly applications. Constantly learning and adapting, I aim to build innovative solutions and contribute to the ever-evolving digital landscape.",
		icon: React.createElement(FaReact),
		date: "2021 - present",
		iconTheme: {
			light: "oklch(87.9% 0.169 91.605)", // Gold
			dark: "oklch(47.3% 0.137 46.201)", // Darker Yellow
		},
	},
	{
		title: "Graduate UIT University",
		location: "HCM, VietNam",
		description:
			"I am about to graduate after four years of studying. Thanks to my university, I have cherished this time immensely, discovering my passion for programming and web development.",
		icon: React.createElement(LuGraduationCap),
		date: "10/2020 - 11/2024",
		iconTheme: {
			light: "oklch(86.5% 0.127 207.078)", // Light Sky Blue
			dark: "oklch(45% 0.085 224.283)", // Darker Sky Blue
		},
	},
	{
		title: "Nexon Dev Vina - HTML5 Game Developer",
		location: "HCM, VietNam",
		description:
			"Worked in the web-based gaming industry, with a strong focus on front-end development. I was responsible for building engaging browser-based games using modern library JavaScript (REACTJS), HTML5 Canvas API, and CSS. My role involved designing and implementing smooth, responsive user interfaces, optimizing rendering performance, and ensuring cross-browser compatibility. I paid close attention to visual polish and UX details — from pixel-perfect layouts to intuitive game controls — while maintaining clean, modular, and maintainable code.",
		icon: React.createElement(LuGamepad2),
		date: "9/2024 - 7/2025",
		iconTheme: {
			light: "oklch(87.1% 0.15 154.449)", // Lime Green
			dark: "oklch(44.8% 0.119 151.328)", // Forest Green
		},
	},
] as const;

export const projectsData = [
	{
		title: "Transaction App",
		description:
			"This app that help people tracking the money they spend & investment or saving",
		tags: ["React", "ExpressJs", "GraphQL", "MongoDB", "CharkaUI"],
		imageUrl: transactionImg,
	},
	{
		title: "My Bookshelf",
		description:
			"Build a website to reviews book, and searching the author that like goodreads",
		tags: ["React", "ReactQuery", "Supabase", "Styled Components"],
		imageUrl: bookshelfImg,
	},
	{
		title: "Thread App",
		description:
			"Build a small social media based on Thread App (Light/Dark mode, Authenticate, Upload Image, CRUD post,...)",
		tags: ["React", "MongoDB", "Tailwind", "Charka UI", "Recoil", "ExpressJs"],
		imageUrl: threadAppImg,
	},
	{
		title: "Personal Blog",
		description:
			"Build for my own a Blog page, improve a whole functionalities (Ligh/Dark mode, Authenticate, Authorization, Dashboard Admin, CRUD,...)",
		tags: ["React", "MongoDB", "Tailwind", "FlowBite", "Redux", "ExpressJs"],
		imageUrl: blogAppImg,
	},
] as const;

export const skillsData = [
	{ name: "HTML5", image: "tech-stack/html5-original.svg" },
	{ name: "CSS3", image: "tech-stack/css3-original.svg" },
	{ name: "JavaScript", image: "tech-stack/javascript-original.svg" },
	{ name: "TypeScript", image: "tech-stack/typescript-original.svg" },
	{ name: "Python", image: "tech-stack/python-original.svg" },
	{ name: "NodeJS", image: "tech-stack/nodejs-original.svg" },
	{ name: "ReactJS", image: "tech-stack/react-original.svg" },
	{ name: "NextJS", image: "tech-stack/nextjs-original.svg" },
	{ name: "AngularJS", image: "tech-stack/angular-original.svg" },
	{ name: "VueJs", image: "tech-stack/vuejs-original.svg" },
	{ name: "NuxtJS", image: "tech-stack/nuxtjs-original.svg" },
	{ name: "Vite", image: "tech-stack/vitejs-original.svg" },
	{ name: "TailwindCSS", image: "tech-stack/tailwindcss-original.svg" },
	{ name: "Express", image: "tech-stack/express-original.svg" },
	{ name: "MongoDB", image: "tech-stack/mongodb-original.svg" },
	{ name: "PostgreSQL", image: "tech-stack/postgresql-original.svg" },
	{ name: "Redux", image: "tech-stack/redux-original.svg" },
	{ name: "Zustand", image: "tech-stack/zustand-original.svg" },
	{ name: "React Router", image: "tech-stack/reactrouter-original.svg" },
	{ name: "Framer Motion", image: "tech-stack/framermotion-original.svg" },
	{ name: "GraphQL", image: "tech-stack/graphql-original.svg" },
	{ name: "Prisma", image: "tech-stack/prisma-original.svg" },
	{ name: "Git", image: "tech-stack/git-original.svg" },
	{ name: "Docker", image: "tech-stack/docker-original.svg" },
] as const;
