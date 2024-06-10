"use client";

import { FaPaperPlane } from "react-icons/fa";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const Contact = () => {
	const { ref } = useSectionInView("Contact", 0.5);
	return (
		<motion.section
			id="contact"
			ref={ref}
			className="mb-28 sm:mb-40 scroll-mt-28 w-[min(100%,38rem)] text-center"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			whileInView={{
				opacity: 1,
			}}
			transition={{
				duration: 1,
			}}
			viewport={{
				once: true,
			}}
		>
			<SectionHeading>Contact Me</SectionHeading>
			<p className="text-gray-700 -mt-6">
				Please contact me directly at{" "}
				<a href="mailto:phamquanghuy2809@gmail.com" className="font-bold">
					phamquanghuy2809@gmail.com
				</a>{" "}
				or through this form.
			</p>
			<form className="mt-10 flex flex-col">
				<input
					type="email"
					required
					className="h-14 border borderBlack rounded-lg px-4"
					placeholder="Your email"
				/>
				<textarea
					className="h-52 my-3 rounded-lg borderBlack p-4"
					placeholder="Your message"
				/>
				<button
					type="submit"
					className="group flex items-center justify-center text-sm gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-[1.05] active:scale-[1.15] hover:bg-gray-950"
				>
					Submit{" "}
					<FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-all opacity-70" />
				</button>
			</form>
		</motion.section>
	);
};

export default Contact;
