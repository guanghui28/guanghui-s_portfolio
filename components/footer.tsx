const Footer = () => {
	const year = new Date().getFullYear();
	return (
		<footer className="mb-10 px-4 text-center text-gray-500">
			<small className="mb-2 text-xs">
				&copy; {year} Made by{" "}
				<span className="text-slate-900 font-bold">GuangHui</span>. All rights
				reserved.
			</small>
			<p className="text-xs">
				<span className="font-semibold">About this website:</span> built with
				React & Next.js (App Router & Server Actions), Typescript, Tailwind CSS,
				Framer Motion, React Email & Resend, Vercel hosting.
			</p>
		</footer>
	);
};

export default Footer;
