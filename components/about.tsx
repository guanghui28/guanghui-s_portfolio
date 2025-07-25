"use client";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";

const Paragraph = ({ children }: { children: React.ReactNode }) => {
	return <p className="text-balance text-sm sm:text-lg">{children}</p>;
};

const About = () => {
	const { ref } = useSectionInView("About");

	return (
		<motion.section
			ref={ref}
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.175 }}
			className="mb-28 max-w-[45rem] text-justify leading-8 sm:mb-40 scroll-mt-28 space-y-10"
			id="about"
		>
			<SectionHeading>About me</SectionHeading>
			<Paragraph>
				Hi there! I'm an aspiring full-stack developer with a strong love for
				JavaScript and a mild addiction to debugging at 2 AM. My coding journey
				kicked off at university, where C++ and Python gave me my first taste of
				turning caffeine into code — and I’ve been hooked ever since.
			</Paragraph>

			<Paragraph>
				Since then, I’ve self-taught myself modern web technologies and have
				been building both front-end interfaces and back-end logic (a.k.a.
				talking to databases like they're my therapist). While I haven’t
				officially started my professional career, I’m more than ready to roll
				up my sleeves, prove myself, and grow in the world of tech.
			</Paragraph>
			<Paragraph>
				Outside the terminal, you’ll find me reading books, watching movies, and
				brewing just one more cup of coffee. I’m always curious, always
				learning, and always up for a challenge — especially if it involves cool
				projects and good people.
			</Paragraph>
		</motion.section>
	);
};

export default About;
