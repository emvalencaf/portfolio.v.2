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
	const paths = [];

	const projects = await ProjectController.getAll();

	if (projects instanceof Array) {
		projects.forEach((project) => {
			paths.push({ params: { id: project._id } });
		});
	}

	if (projects)
		return {
			paths,
			fallback: false,
		};
};

export const getStaticProps: GetStaticProps = async (ctx) => {
	const { id } = ctx.params;

	const project = await ProjectController.getById(id);

	if (!project)
		return {
			notFound: true,
		};

	return {
		props: {
			project,
		},
		revalidate: 72000, // it will re-render once each 20 hours
	};
};
