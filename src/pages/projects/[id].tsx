// controllers
import PortfolioController from "../../api/controller/portfolio";
import ProjectController from "../../api/controller/project";

// template
import ProjectTemplate, { ProjectTemplateProps } from "../../templates/Project";

// types
import { GetStaticPaths, GetStaticProps } from "next";

export default function ProjectPage({
	settings,
	content,
}: ProjectTemplateProps) {
	return <ProjectTemplate settings={settings} content={content} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
	return {
		paths: [],
		fallback: "blocking",
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
				content: project,
			},
		};
	} catch (err) {
		console.log(err);
		return {
			notFound: true,
		};
	}
};
