"use client";

import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";
import SubmitButton from "./submit-button";
import toast from "react-hot-toast";

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
			<form
				className="mt-10 flex flex-col"
				action={async (formData) => {
					const { data, error } = await sendEmail(formData);

					if (error) {
						return toast.error(error);
					}

					toast.success("Email sent successfully!");
				}}
			>
				<input
					type="email"
					name="senderEmail"
					required
					maxLength={500}
					className="h-14 border borderBlack rounded-lg px-4"
					placeholder="Your email"
				/>
				<textarea
					className="h-52 my-3 rounded-lg borderBlack p-4"
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
