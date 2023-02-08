// components
import Heading from '../Heading';
import Section, { SectionProps } from '../Section';
import CardProject, { CardProjectProps } from '../CardProject';

// styles
import * as Styled from './styles';

// types
export type SectionProjectProps = {
	projects?: CardProjectProps[];
} & SectionProps;

const SectionProject = ({
		id,
		background,
		color,
		projects = [],
	}: SectionProjectProps) => {
	return (
		<Section id={id} background={background} color={color}>
			<Heading as='h2' size='big'>
				Projetos
			</Heading>
			<Styled.Wrapper>
				{projects.length >= 1 && projects.map((project, index) => <CardProject key={`${index} -${project.title} - ${project.mainLang}`} {...project} />)}
			</Styled.Wrapper>
		</Section>
	);
};

export default SectionProject;
