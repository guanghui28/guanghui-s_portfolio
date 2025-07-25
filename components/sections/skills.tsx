"use client";

import { skillsData } from "@/lib/data";
import SectionHeading from "../ui/section-heading";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import Image from "next/image";

const fadeInAnimationVariants = {
	initial: {
		opacity: 0,
		y: 100,
	},
	animate: (index: number) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: 0.05 * index,
		},
	}),
};

const Skills = () => {
	const { ref } = useSectionInView("Skills", 0.2);

	return (
		<section
			id="skills"
			ref={ref}
			className="px-3 max-w-[42rem] scroll-mt-28 text-center"
		>
			<SectionHeading>My Skills</SectionHeading>
			<ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
				{skillsData.map((skill, index) => (
					<motion.li
						className="bg-white borderBlack rounded-lg p-3 dark:text-white/80 dark:bg-white/10 shadow-md dark:shadow-slate-50/20"
						key={skill.name}
						variants={fadeInAnimationVariants}
						initial="initial"
						// animate="animate"
						whileInView="animate"
						viewport={{
							once: true,
							amount: 0.2,
						}}
						custom={index}
					>
						<Image
							width="80"
							height="80"
							src={skill.image}
							alt={skill.name}
							className="w-10 h-10"
						/>
					</motion.li>
				))}
			</ul>
		</section>
	);
};

export default Skills;
