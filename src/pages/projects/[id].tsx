// template
import ProjectTemplate from "../../templates/Project";

// types
import { FetchResponseProject, Project } from "../../shared-types/project";
import { GetServerSideProps } from "next";
import ProjectController from "../../api/controller/project";
export type ProjectPageProps = {
	project: Project
};

export default function ProjectPage({ project }: ProjectPageProps) {
	console.log(project);
	return <ProjectTemplate {...project} />;
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const { id } = ctx.params;

	const project = await ProjectController.getById(id);

	if (!project) return {
		notFound: true,
	}

	return {
		props: {
			project,
		}
	}
}