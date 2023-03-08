// hooks
import { useRouter } from "next/router";
import { useGetProject } from "../../hooks/useGetProject";

// controllers
import PortfolioController from "../../api/controller/portfolio";
// template
import ProjectTemplate, { ProjectTemplateProps } from "../../templates/Project";

// types
import { GetStaticPaths, GetStaticProps } from "next";

export default function ProjectPage({
	settings,
}: Pick<ProjectTemplateProps, "settings">) {
	// params
	const router = useRouter();
	const { id } = router.query;
	// states
	const {
		project,
		isLoading: isLoadingProject,
		isError: isErrorProject,
	} = useGetProject(id);

	if (isLoadingProject) return <p>is loading...</p>;

	if (isErrorProject) return <p>{isErrorProject.message}</p>;

	if (!project) return <p> page not found it</p>;

	return <ProjectTemplate settings={settings} content={project} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
	return {
		paths: [],
		fallback: "blocking",
	};
};

export const getStaticProps: GetStaticProps = async () => {
	try {
		const responsePortfolio = await PortfolioController.get();

		const { portfolio } = responsePortfolio;

		return {
			props: {
				settings: portfolio.settings,
			},
		};
	} catch (err) {
		console.log(err);
		return {
			notFound: true,
		};
	}
};
