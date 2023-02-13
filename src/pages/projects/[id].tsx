// template
import ProjectTemplate from "../../templates/Project";

// types
import { Project } from "../../shared-types/project";
import { GetServerSideProps } from "next";
export type ProjectPageProps = {
	project: Project
};

export default function ProjectPage({ project }: ProjectPageProps) {
	return <ProjectTemplate {...project} />;
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const { id } = ctx.params;
	const project: Project = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/project/${id}`).then((data) => data.json());

	if (!project) return {
		notFound: true,
	}

	return {
		props: {
			project,
		}
	}
}