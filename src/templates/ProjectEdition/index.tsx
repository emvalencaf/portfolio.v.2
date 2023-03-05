// components
import ProjectForm from "../../components/ProjectForm";

// types
import { Project } from "../../shared-types/project";
export type ProjectEditionTemplateProps = {
	project: Project;
};

const ProjectEditionTemplate = ({ project }: ProjectEditionTemplateProps) => {
	return (
		<ProjectForm
			id={project._id}
			typeForm="update"
			titleProps={project.title}
			resumeProps={project.resume}
			srcImgProps={project.srcImg}
			descriptionProps={project.description}
			mainLangProps={project.mainLang}
			urlDemoProps={project.urlDemo}
			urlRepositoryProps={project.urlRepository}
		/>
	);
};

export default ProjectEditionTemplate;
