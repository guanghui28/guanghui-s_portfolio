"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsDownload, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

const Intro = () => {
	const { ref } = useSectionInView("Home", 0.5);
	const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

	return (
		<section
			ref={ref}
			className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-28"
			id="home"
		>
			<div className="flex items-center justify-center">
				<div className="relative">
					<motion.div
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{
							type: "tween",
							duration: 0.2,
						}}
					>
						<Image
							src="/guanghui.png"
							alt="Personal image"
							height={800}
							width={800}
							quality={95}
							priority={true}
							className="w-24 h-24 object-cover rounded-full border-[0.35rem] border-white shadow-xl"
						/>
					</motion.div>

					<motion.span
						className="text-4xl absolute bottom-0 right-0"
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{
							type: "spring",
							stiffness: 125,
							delay: 0.1,
							duration: 0.7,
						}}
					>
						👋
					</motion.span>
				</div>
			</div>

			<motion.h1
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
				className="mb-10 mt-4 px-4 text-xl font-medium leading-[1.5] sm:text-2xl"
			>
				Hello! I'm <span className="font-bold">GuangHui</span>, an aspiring{" "}
				<span className="font-bold">full-stack developer</span>. Though I
				haven't worked professionally yet, I enjoy building sites & apps AND
				I've been learning <span className="font-bold">NextJS & ExpressJS</span>
				. Thank you for considering my profile 😊!
			</motion.h1>

			<motion.div
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{
					delay: 0.1,
				}}
				className="flex flex-col sm:flex-row sm:justify-center gap-2 px-4 text-lg font-medium"
			>
				<Link
					href="#contact"
					className="group bg-gray-900 flex items-center gap-2 px-7 py-3 text-white rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
					onClick={() => {
						setActiveSection("About");
						setTimeOfLastClick(Date.now());
					}}
				>
					Contact me here{" "}
					<BsArrowRight className="opacity-80 group-hover:translate-x-1" />
				</Link>
				<a
					className="group bg-white flex items-center gap-2 px-7 py-3 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack"
					href="/CV.pdf"
					download
				>
					Download CV{" "}
					<BsDownload className="opacity-60 group-hover:translate-y-1" />
				</a>
				<a
					className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-[1.1] active:scale-[1.1] transition cursor-pointer borderBlack hover:text-gray-950"
					href="https://linkedin.com"
					target="_blank"
				>
					<BsLinkedin />
				</a>
				<a
					className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full text-[1.35rem] outline-none focus:scale-[1.15] hover:scale-[1.1]  hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack"
					href="https://github.com/guanghui28"
					target="_blank"
				>
					<FaGithubSquare />
				</a>
			</motion.div>
		</section>
	);
};

export default Intro;
