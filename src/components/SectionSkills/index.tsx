// components
import Heading from '../Heading';
import Section from '../Section';

// styles
import * as Styled from './styles';

// types
type Tech = {
	techName: string;
	icon?: React.ReactNode;
}
export type SectionSkillsProps = {
	id: string;
	techs?: Tech[];
};

const SectionSkills = ({ id }: SectionSkillsProps) => {
	return (
		<Section id={id}>
			<Heading as='h2' size='big'>
				Habilidades
			</Heading>
			<Styled.Wrapper>
			</Styled.Wrapper>
		</Section>
	);
};

export default SectionSkills;
