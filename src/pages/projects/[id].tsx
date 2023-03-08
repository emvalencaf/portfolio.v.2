// template
import NotFound from "../NotFound";
import ProjectTemplate from "../../templates/Project";

// types
import { Project } from "../../shared-types/project";
import { useGetProject } from "../../hooks/useGetProject";
import { useRouter } from "next/router";

export type ProjectPageProps = {
	project: Project;
};

export default function ProjectPage() {
	// router
	const router = useRouter();
	const { id } = router.query;

	// states
	const { project, isLoading } = useGetProject(id);

	if (isLoading) return <p> is loading...</p>;

	if (!project) return <NotFound />;

	return <ProjectTemplate {...project} />;
}
/*
export const getStaticProps: GetStaticProps = async (ctx) => {
	try {
		const { id } = ctx.params;
		const { project } = await ProjectController.getById(id);

		return {
			props: {
				fallback: {
					[`${id}`]: project,
				},
			},
		};
	} catch (err) {
		return {
			notFound: true,
		};
	}
};*/

/*
export default function ProjectPage({ project }: ProjectPageProps) {
	console.log(project);
	return <ProjectTemplate {...project} />;
}
/*
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
*/
