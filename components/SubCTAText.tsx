type CTAProps = {
	children: React.ReactNode;
};
export const SubCTAText = ({ children }: CTAProps) => (
	<span className="font-semibold text-purple-600 dark:text-purple-400">
		{children}
	</span>
);
