// controllers
import PortfolioController from "../../api/controller/portfolio";
import ProjectController from "../../api/controller/project";
// template
import ProjectTemplate from "../../templates/Project";

// types
import { GetStaticPaths, GetStaticProps } from "next";
import { Settings } from "../../shared-types/settings";
import { Project } from "../../shared-types/project";

type ProjectPageProps = {
	settings: Settings;
	project: Project;
};

export default function ProjectPage({ settings, project }: ProjectPageProps) {
	return <ProjectTemplate settings={settings} content={project} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = [];

	const responseProjects = await ProjectController.getAll();
	const { projects } = responseProjects;

	projects.forEach((project) => {
		paths.push({ params: { id: project._id } });
	});

	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps: GetStaticProps = async (ctx) => {
	const { id } = ctx.params;

	try {
		const responsePortfolio = await PortfolioController.get();
		const responseProject = await ProjectController.getById(id);

		const { portfolio } = responsePortfolio;
		const { project } = responseProject;
		return {
			props: {
				settings: portfolio.settings,
				project: project,
			},
		};
	} catch (err) {
		console.log(err);
		return {
			notFound: true,
		};
	}
};
