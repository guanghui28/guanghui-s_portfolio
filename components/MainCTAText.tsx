type CTAProps = {
	children: React.ReactNode;
};

export const MainCTAText = ({ children }: CTAProps) => (
	<span
		className="text-2xl sm:text-4xl inline-block uppercase font-extrabold tracking-wide
      text-transparent bg-clip-text 
      bg-gradient-to-r from-pink-500 via-rose-500 to-red-500
      dark:from-red-400 dark:via-rose-500 dark:to-pink-600
      drop-shadow-md dark:drop-shadow-lg
      select-none transition-transform duration-300 transform hover:scale-105"
	>
		{children}
	</span>
);
