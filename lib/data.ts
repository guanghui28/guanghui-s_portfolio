import React from "react";
import { FaReact } from "react-icons/fa";
import { LuGamepad2, LuGraduationCap } from "react-icons/lu";
import { FaComputer } from "react-icons/fa6";
import bookshelfImg from "@/public/bookshelf.png";
import threadAppImg from "@/public/thread-app.png";
import transactionImg from "@/public/transaction.png";
import blogAppImg from "@/public/blog-app.png";

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
		title: "Learn Programming Skill",
		location: "UIT University, HCM",
		description:
			"At university, I learned C++, Python & some concept about Machine Learning, which sparked my interest in programming. This foundation led me to explore web development,",
		icon: React.createElement(FaComputer),
		date: "2020",
	},
	{
		title: "Learn ReactJs",
		location: "Self Taught",
		description:
			"I'm a self-taught web developer with a passion for React and web development. My journey involves mastering modern web technologies to create dynamic, user-friendly applications. Constantly learning and adapting, I aim to build innovative solutions and contribute to the ever-evolving digital landscape.",
		icon: React.createElement(FaReact),
		date: "2021 - present",
	},
	{
		title: "Graduate UIT University (coming soon...)",
		location: "HCM, VietNam",
		description:
			"I am about to graduate after four years of studying. Thanks to my university, I have cherished this time immensely, discovering my passion for programming and web development.",
		icon: React.createElement(LuGraduationCap),
		date: "2024",
	},
	{
		title: "Nexon Dev Vina - HTML5 Game Developer",
		location: "HCM, VietNam",
		description:
			"Worked in the web-based gaming industry, with a strong focus on front-end development. I was responsible for building engaging browser-based games using modern library JavaScript (REACTJS), HTML5 Canvas API, and CSS. My role involved designing and implementing smooth, responsive user interfaces, optimizing rendering performance, and ensuring cross-browser compatibility. I paid close attention to visual polish and UX details — from pixel-perfect layouts to intuitive game controls — while maintaining clean, modular, and maintainable code.",
		icon: React.createElement(LuGamepad2),
		date: "9/2024 - 7/2025",
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
	"HTML",
	"CSS",
	"JavaScript",
	"TypeScript",
	"React",
	"Next.js",
	"Node.js",
	"Git",
	"Tailwind",
	"MongoDB",
	"Redux",
	"ReactQuery",
	"Zustand",
	"GraphQL",
	"Apollo",
	"Express",
	"PostgreSQL",
	"Python",
	"Framer Motion",
] as const;
