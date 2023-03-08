// hooks
import { useGetAllProjects } from "../../../hooks/useGetAllProjects";

// components
import PrivateComponent from "../../../components/PrivateComponent";

// template

// type
import { GetServerSideProps } from "next";

// utils
import { privateServerSideProps } from "../../../utils/private-serverside-props";
import ProjectAdminTemplate from "../../../templates/ProjectAdmin";

export default function ProjectAdminPage() {
	// states
	const { projects, isLoading, isError } = useGetAllProjects();

	if (isLoading) return <p>Is loading...</p>;

	if (isError) return <p>{isError.message}</p>;

	return (
		<PrivateComponent>
			<ProjectAdminTemplate projects={projects} />
		</PrivateComponent>
	);
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	return privateServerSideProps(ctx);
};
