import clsx from "clsx";

const TernaryText = ({
	children,
	className = "",
}: {
	children: React.ReactNode;
	className?: string;
}) => {
	return (
		<span
			className={clsx(
				"italic inline-block text-transparent bg-clip-text  bg-gradient-to-r from-pink-500 via-rose-500 to-red-500 dark:from-red-400 dark:via-rose-500 dark:to-pink-600",
				className
			)}
		>
			{children}
		</span>
	);
};

export default TernaryText;
