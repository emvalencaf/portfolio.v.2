// styles
import * as Styled from './styles';

// types
export type SectionProjectProps = {
	title?: string;
};

const SectionProject = ({ title = '' }: SectionProjectProps) => {
	return (
		<Styled.Wrapper>
			<h1> {title} </h1>
		</Styled.Wrapper>
	);
};

export default SectionProject;
