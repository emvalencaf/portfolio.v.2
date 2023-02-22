import * as Styled from "./styles";

export type HeadingProps = {
	children: React.ReactNode;
	color?:
		| "primary"
		| "secondary"
		| "tertiary"
		| "quaternary"
		| "quinary"
		| "senary";
	as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
	size?: "small" | "medium" | "big" | "huge";
	uppercase?: boolean;
};

const Heading = ({
	children,
	color = "secondary",
	as = "h1",
	size = "huge",
	uppercase = false,
}: HeadingProps) => {
	return (
		<Styled.Title color={color} as={as} size={size} uppercase={uppercase}>
			{children}
		</Styled.Title>
	);
};

export default Heading;
