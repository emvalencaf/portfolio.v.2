// controllers
import ProjectController from "../../api/controller/project";

// template
import ProjectTemplate from "../../templates/Project";

// types
import { Project } from "../../shared-types/project";
import { GetServerSideProps } from "next";
export type ProjectPageProps = {
	project: Project;
};

export default function ProjectPage({ project }: ProjectPageProps) {
	console.log(project);
	return <ProjectTemplate {...project} />;
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const { id } = ctx.params;

	const response = await ProjectController.getById(id);

	console.log(response);

	if (!response)
		return {
			notFound: true,
		};

	const { project } = response;

	return {
		props: {
			project,
		},
	};
};
