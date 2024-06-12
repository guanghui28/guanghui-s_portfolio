"use client";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";

const About = () => {
	const { ref } = useSectionInView("About");

	return (
		<motion.section
			ref={ref}
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.175 }}
			className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
			id="about"
		>
			<SectionHeading>About me</SectionHeading>
			<p className="mb-3">
				I am an aspiring{" "}
				<span className="font-bold italic">full-stack developer</span>, with
				strong skills in <span className="font-bold italic">JavaScript</span>{" "}
				programming. My journey into web development began at university, where
				I studied C++ and Python, which ignited my passion for technology.
			</p>
			<p className="mb-3">
				I have self-learned{" "}
				<span className="font-bold">modern web technologies</span> and honed my
				skills in both <span className="font-bold">front-end</span> and{" "}
				<span className="font-bold">back-end</span> development. Although I
				haven't started my professional career yet, I am eager to prove myself
				and am seeking an opportunity to showcase my abilities. I believe my
				determination and passion make me a valuable asset, and I am ready to
				contribute to innovative projects and grow within the tech industry.
			</p>
			<p>
				<span className="italic">When I'm not coding</span>, I enjoy reading
				books, watching movies, and playing with my dog. I also enjoy{" "}
				<span className="font-medium">learning new things</span>.
			</p>
		</motion.section>
	);
};

export default About;
