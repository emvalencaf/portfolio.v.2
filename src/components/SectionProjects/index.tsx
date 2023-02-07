// components
import Heading from '../Heading';
import Section from '../Section';
import CardProject, { CardProjectProps } from '../CardProject';

// styles
import * as Styled from './styles';

// types
export type SectionProjectProps = {
	id: string;
	projects?: CardProjectProps[];
};

const SectionProject = ({ id, projects = [] }: SectionProjectProps) => {
	return (
		<Section id={id}>
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
