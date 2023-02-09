// styles
import * as Styled from './styles';

// types
export type SectionProps = {
	id: string;
	children: React.ReactNode;
	background?: boolean;
	color?: "primary" | "secondary" | "tertiary" | "quaternary" | "quinary" | "senary";
};

const Section = ({ id, children, background = false, color = "secondary" }: SectionProps) => {
	return (
		<Styled.Wrapper id={id} background={background} color={color}>
			{ children }
		</Styled.Wrapper>
	);
};

export default Section;
