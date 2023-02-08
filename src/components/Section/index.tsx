// styles
import * as Styled from './styles';

// types
export type SectionProps = {
	id: string;
	children: React.ReactNode;
	background?: boolean;
	color?: string;
};

const Section = ({ id, children, background = false, color }: SectionProps) => {
	return (
		<Styled.Wrapper id={id} background={background} color={color}>
			{ children }
		</Styled.Wrapper>
	);
};

export default Section;
