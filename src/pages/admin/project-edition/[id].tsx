// hooks
import { useRouter } from "next/router";
import { useGetProject } from "../../../hooks/useGetProject";

// components
import PrivateComponent from "../../../components/PrivateComponent";

// template
import ProjectEditionTemplate from "../../../templates/ProjectEdition";

// types
import { privateServerSideProps } from "../../../utils/private-serverside-props";

// utils
import { GetServerSideProps } from "next";

export default function EditionProjectPage() {
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

	return (
		<PrivateComponent>
			<ProjectEditionTemplate project={project} />
		</PrivateComponent>
	);
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	return privateServerSideProps(ctx);
};
