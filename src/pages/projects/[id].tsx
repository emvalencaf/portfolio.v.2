// hooks
import { useRouter } from "next/router";
import { useGetProject } from "../../hooks/useGetProject";

// template
import ProjectTemplate from "../../templates/Project";
// types
import { Project } from "../../shared-types/project";

export type ProjectPageProps = {
	project: Project;
};

export default function ProjectPage() {
	// router
	const router = useRouter();
	const { id } = router.query;

	// states
	const { project, isLoading } = useGetProject(id ? id : null);

	if (isLoading) return <p>Is loading...</p>;

	return <ProjectTemplate {...project} owner={project?.owner?.name} />;
}

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
