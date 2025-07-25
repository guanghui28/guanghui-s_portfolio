import { ReactNode } from "react";

const SectionHeading = ({ children }: { children: ReactNode }) => {
	return (
		<h2
			className="text-3xl pb-4 md:text-5xl font-medium capitalize mb-4 text-center text-transparent bg-clip-text 
      bg-gradient-to-r from-pink-500 via-rose-500 to-red-500
      dark:from-red-400 dark:via-rose-500 dark:to-pink-600
      drop-shadow-md dark:drop-shadow-lg"
		>
			{children}
		</h2>
	);
};

export default SectionHeading;
