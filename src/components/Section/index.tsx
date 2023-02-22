// styles
import * as Styled from "./styles";

// types
export type SectionProps = {
	id: string;
	children?: React.ReactNode;
	background?: boolean;
	icon?: React.ReactNode;
	color?:
		| "primary"
		| "secondary"
		| "tertiary"
		| "quaternary"
		| "quinary"
		| "senary";
	backgroundImg?: string;
};

const Section = ({
	id,
	children,
	background = false,
	color = "secondary",
	backgroundImg = "",
}: SectionProps) => {
	return (
		<Styled.Wrapper
			id={id}
			background={background}
			color={color}
			backgroundImg={backgroundImg}
		>
			{children}
		</Styled.Wrapper>
	);
};

export default Section;
