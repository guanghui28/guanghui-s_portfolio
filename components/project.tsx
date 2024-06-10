"use client";

import { projectsData } from "@/lib/data";
import Image from "next/image";
import { useScroll, motion, useTransform } from "framer-motion";
import { useRef } from "react";

type ProjectType = (typeof projectsData)[number];

function Project({ title, description, tags, imageUrl }: ProjectType) {
	const ref = useRef<HTMLDivElement>(null);

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["0 1", "1.33 1"],
	});

	const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
	const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
	return (
		<motion.div
			ref={ref}
			style={{
				scale: scaleProgress,
				opacity: opacityProgress,
			}}
			className="group mb-3 sm:mb-8 last:mb-0"
		>
			<section className=" rounded-lg bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition">
				<div className="py-4  px-5 pb-7 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full group-even:ml-[18rem]">
					<h3 className="text-2xl font-semibold">{title}</h3>
					<p className="mt-2 leading-relaxed text-gray-700">{description}</p>
					<ul className="mt-4 flex flex-wrap gap-2 sm:mt-auto">
						{tags.map((tag, index) => (
							<li
								className="bg-black/[0.7] text-white uppercase tracking-wider rounded-full px-3 py-1 text-xs"
								key={index}
							>
								{tag}
							</li>
						))}
					</ul>
				</div>

				<Image
					src={imageUrl}
					alt="Project I worked on"
					quality={95}
					className="absolute top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl group-even:right-[initial] group-even:-left-40 group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-2 transition group-hover:scale-[1.04] group-even:group-hover:translate-x-3 group-even:group-hover:rotate-2"
				/>
			</section>
		</motion.div>
	);
}

export default Project;
