type CTAProps = {
	children: React.ReactNode;
};
export const SubCTAText = ({ children }: CTAProps) => (
	<h4>
		<span
			className="font-semibold uppercase text-base sm:text-xl lg:text-2xl tracking-wide
      text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-rose-500 to-red-500
      dark:from-red-400 dark:via-rose-500 dark:to-pink-600 drop-shadow-sm dark:drop-shadow select-none"
		>
			{children}
		</span>
	</h4>
);
