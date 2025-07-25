const Paragraph = ({ children }: { children: React.ReactNode }) => {
	return (
		<p className="text-balance text-sm sm:text-base lg:text-lg">{children}</p>
	);
};
export default Paragraph;
