import React from "react";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { FaComputer } from "react-icons/fa6";
import bookshelfImg from "@/public/bookshelf.png";
import threadAppImg from "@/public/thread-app.png";
import transactionImg from "@/public/transaction.png";

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
			"This is the biggest project I have made, build a small social media based on Thread App",
		tags: ["React", "MongoDB", "Tailwind", "Zustand", "ExpressJs"],
		imageUrl: threadAppImg,
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
