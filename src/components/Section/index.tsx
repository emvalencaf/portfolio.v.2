// styles
import * as Styled from './styles';

// types
export type SectionProps = {
	id: string;
	children: React.ReactNode;
};

const Section = ({ id, children }: SectionProps) => {
	return (
		<Styled.Wrapper id={id}>
			{ children }
		</Styled.Wrapper>
	);
};

export default Section;
