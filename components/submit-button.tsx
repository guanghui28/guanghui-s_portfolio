"use client";

import { useFormStatus } from "react-dom";
import { FaPaperPlane } from "react-icons/fa";

const SubmitButton = () => {
	const { pending } = useFormStatus();
	return (
		<button
			type="submit"
			className="group flex items-center justify-center text-sm gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-[1.05] active:scale-[1.15] hover:bg-gray-950 disabled:scale-100 disabled:bg-opacity-65"
			disabled={pending}
		>
			{pending ? (
				<div className="animate-spin h-5 w-5 rounded-full border-b-2 border-white" />
			) : (
				<>
					Submit{" "}
					<FaPaperPlane className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-all opacity-70" />
				</>
			)}
		</button>
	);
};

export default SubmitButton;
