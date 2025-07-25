import TernaryText from "./ui/TernaryText";

const Footer = () => {
	const year = new Date().getFullYear();
	return (
		<footer className="my-10 px-3 text-center text-gray-500 dark:text-white/70">
			<small className="mb-2 text-xs">
				&copy; {year} Made by <TernaryText>guanghui</TernaryText>. All rights
				reserved.
			</small>
		</footer>
	);
};

export default Footer;
