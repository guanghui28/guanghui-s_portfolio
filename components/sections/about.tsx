"use client";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "../ui/section-heading";
import { motion } from "framer-motion";
import Paragraph from "../ui/Paragraph";

const About = () => {
	const { ref } = useSectionInView("About", 0.5);

	return (
		<motion.section
			ref={ref}
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.175 }}
			className="px-3 max-w-[45rem] text-justify leading-8 scroll-mt-28 "
			id="about"
		>
			<SectionHeading>About me</SectionHeading>
			<div className="space-y-10">
				<Paragraph>
					Hi there! I'm an aspiring full-stack developer with a strong love for
					JavaScript and a mild addiction to debugging at 2 AM. My coding
					journey kicked off at university, where C++ and Python gave me my
					first taste of turning caffeine into code — and I’ve been hooked ever
					since.
				</Paragraph>

				<Paragraph>
					Since then, I’ve self-taught myself modern web technologies and have
					been building both front-end interfaces and back-end logic (a.k.a.
					talking to databases like they're my therapist). While I haven’t
					officially started my professional career, I’m more than ready to roll
					up my sleeves, prove myself, and grow in the world of tech.
				</Paragraph>
				<Paragraph>
					Outside the terminal, you’ll find me reading books, watching movies,
					and brewing just one more cup of coffee. I’m always curious, always
					learning, and always up for a challenge — especially if it involves
					cool projects and good people.
				</Paragraph>
			</div>
		</motion.section>
	);
};

export default About;
