export interface ContainerProps extends React.ComponentProps<"div"> {}

export const Container = ({
	children,
	className,
	...props
}: ContainerProps) => {
	return (
		<div
			className={`w-full px-4 sm:max-w-[640px] md:max-w-3xl lg:max-w-5xl xl:max-w-7xl mx-auto ${className}`}
			{...props}
		>
			{children}
		</div>
	);
};
