"use client";

import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";
import SubmitButton from "./submit-button";
import toast from "react-hot-toast";
import { useRef } from "react";

const Contact = () => {
	const { ref } = useSectionInView("Contact", 0.5);
	const formRef = useRef<HTMLFormElement | null>(null);

	const sendFormContact = async (formData: FormData) => {
		const { data, error } = await sendEmail(formData);

		if (error) {
			return toast.error(error);
		}

		if (!formRef.current) return;

		formRef.current.reset();
		toast.success("Email sent successfully!");
	};

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
			<p className="text-gray-700 -mt-6 dark:text-white/70">
				Please contact me directly at{" "}
				<a href="mailto:phamquanghuy2809@gmail.com" className="font-bold">
					phamquanghuy2809@gmail.com
				</a>{" "}
				or through this form.
			</p>
			<form
				ref={formRef}
				className="mt-10 flex flex-col dark:text-black"
				action={sendFormContact}
			>
				<input
					type="email"
					name="senderEmail"
					required
					maxLength={500}
					className="h-14 border borderBlack rounded-lg px-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
					autoComplete="off"
					placeholder="Your email"
				/>
				<textarea
					className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white  dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
					autoComplete="off"
					placeholder="Your message"
					required
					maxLength={2000}
					name="message"
				/>
				<SubmitButton />
			</form>
		</motion.section>
	);
};

export default Contact;
