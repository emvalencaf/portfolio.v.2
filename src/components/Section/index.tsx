// styles
import * as Styled from './styles';

// types
export type SectionProps = {
	children: React.ReactNode;
};

const Section = ({ children }: SectionProps) => {
	return (
		<Styled.Wrapper>
			{ children }
		</Styled.Wrapper>
	);
};

export default Section;
