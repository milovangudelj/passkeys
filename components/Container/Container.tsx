export interface ContainerProps extends React.ComponentProps<"div"> {}

export const Container = ({
	children,
	className,
	...props
}: ContainerProps) => {
	return (
		<div className={`container mx-auto ${className}`} {...props}>
			{children}
		</div>
	);
};
