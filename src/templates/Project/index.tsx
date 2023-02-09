// components
import Menu from '../../components/Menu';

// styles
import * as Styled from './styles';

// types
import { Project } from '../../shared-types/project';
export type ProjectTemplateProps = Project;

const ProjectTemplate = ({
		id,
		title,
		resume,
		description,
		mainLang,
		srcImg,
		urlDemo,
		urlRepository,
	}: ProjectTemplateProps) => {
	return (
		<Styled.Wrapper>
			<Menu />
		</Styled.Wrapper>
	);
};

export default ProjectTemplate;
