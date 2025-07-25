const Footer = () => {
	const year = new Date().getFullYear();
	return (
		<footer className="mb-10 px-4 text-center text-gray-500 dark:text-white/70">
			<small className="mb-2 text-xs">
				&copy; {year} Made by{" "}
				<span className="text-slate-900 font-bold dark:text-white">
					GuangHui
				</span>
				. All rights reserved.
			</small>
		</footer>
	);
};

export default Footer;
