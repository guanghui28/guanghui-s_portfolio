"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsDownload } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import MainCTAText from "@/components/ui/MainCTAText";
import SubCTAText from "@/components/ui/SubCTAText";
import heroImg from "@/assets/my-image.jpg";
import TernaryText from "../ui/TernaryText";

const Intro = () => {
	const { ref } = useSectionInView("Home");
	const { updateActiveSectionWithTime } = useActiveSectionContext();

	return (
		<section
			ref={ref}
			className="px-3 max-w-[50rem] text-center scroll-mt-28"
			id="home"
		>
			<div className="flex items-center justify-center">
				<motion.div
					initial={{ opacity: 0, scale: 0 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{
						type: "tween",
						duration: 0.2,
					}}
				>
					<Image
						src={heroImg}
						alt="Personal image"
						height={800}
						width={800}
						quality={95}
						priority={true}
						className="size-32 lg:size-48 object-cover rounded-full border-[0.35rem] border-white/50 dark:border-white/80 shadow-xl"
					/>
				</motion.div>
			</div>

			<motion.div
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
				className="mb-10 mt-4 px-4 text-xl font-medium leading-relaxed sm:text-2xl text-opacity-90 dark:text-white/80 space-y-4"
			>
				<MainCTAText>Pham Quang Huy</MainCTAText>
				<SubCTAText>Software Engineer</SubCTAText>
				<p>
					<TernaryText className="text-balance text-sm sm:text-base xl:text-lg">
						"Enjoys creating responsive, user-friendly websites and
						applications"
					</TernaryText>
				</p>
			</motion.div>

			<motion.div
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{
					delay: 0.1,
				}}
				className="flex flex-col items-center sm:flex-row sm:justify-center gap-2 px-4 text-lg font-medium"
			>
				<Link
					href="#contact"
					className="text-sm sm:text-base lg:text-lg group bg-gray-900 flex items-center gap-2 px-7 py-3 text-white rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition shadow-sm duration-200 ease-in-out"
					onClick={() => updateActiveSectionWithTime("Contact", true)}
				>
					Contact me here{" "}
					<BsArrowRight className="opacity-80 group-hover:translate-x-1" />
				</Link>
				<a
					className="text-sm sm:text-base lg:text-lg group bg-white flex items-center gap-2 px-7 py-3 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/50 dark:text-white/70 duration-200 ease-in-out"
					href="/PhamQuangHuy_Resume.pdf"
					download
				>
					Download CV{" "}
					<BsDownload className="opacity-60 group-hover:translate-y-1" />
				</a>
				<a
					className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-[1.1] active:scale-[1.1] transition duration-200 ease-in-out cursor-pointer borderBlack hover:text-gray-950 dark:bg-white/50 dark:text-white/70 shadow-sm dark:shadow-slate-50/50"
					href="https://www.instagram.com/guanghuijs"
					target="_blank"
				>
					<FaInstagramSquare />
				</a>
				<a
					className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full text-[1.35rem] outline-none focus:scale-[1.15] hover:scale-[1.1]  hover:text-gray-950 active:scale-105 transition duration-200 ease-in-out cursor-pointer borderBlack dark:bg-white/50 dark:text-white/70 shadow-sm dark:shadow-slate-50/50"
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
