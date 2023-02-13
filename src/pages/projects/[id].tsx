// template
import ProjectTemplate from "../../templates/Project";

// types
import { FetchResponseProject, Project } from "../../shared-types/project";
import { GetServerSideProps } from "next";
export type ProjectPageProps = {
	project: Project
};

export default function ProjectPage({ project }: ProjectPageProps) {
	console.log(project);
	return <ProjectTemplate {...project} />;
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const { id } = ctx.params;

	const response: FetchResponseProject = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/projects/${id}`).then((data) => data.json());
	const { project } = response;

	if (!project) return {
		notFound: true,
	}

	return {
		props: {
			project,
		}
	}
}