// template
import ProjectTemplate from "../../templates/Project";

// types
import { Project } from "../../shared-types/project";
import { GetStaticPaths, GetStaticProps } from "next";
import ProjectController from "../../api/controller/project";
export type ProjectPageProps = {
	project: Project;
};

export default function ProjectPage({ project }: ProjectPageProps) {
	console.log(project);
	return <ProjectTemplate {...project} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
	const projects = await ProjectController.getAll();

	const paths = projects.map((project) => ({
		params: { id: project._id },
	}));

	if (projects)
		return {
			paths,
			fallback: false,
		};
};

export const getStaticProps: GetStaticProps = async (ctx) => {
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
		revalidate: 72000, // it will re-render once each 20 hours
	};
};
