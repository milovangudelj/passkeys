export interface ButtonProps extends React.ComponentProps<"button"> {}

export const Button = ({ children, className, ...props }: ButtonProps) => {
	return (
		<button
			className={`px-4 py-2 rounded-lg bg-teal-500 hover:bg-teal-400 focus:bg-teal-600 focus-visible:outline-2 focus-visible:outline-teal-600 outline-offset-2 outline-none text-gray-900 transition ${className}`}
			{...props}
		>
			{children}
		</button>
	);
};
