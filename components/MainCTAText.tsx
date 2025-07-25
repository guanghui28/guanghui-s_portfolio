type CTAProps = {
	children: React.ReactNode;
};

export const MainCTAText = ({ children }: CTAProps) => (
	<span className="text-2xl sm:text-4xl inline-block uppercase font-extrabold tracking-wide slate-900 dark:text-white  cursor-pointer select-none">
		{children}
	</span>
);
