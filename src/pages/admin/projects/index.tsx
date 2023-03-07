// controller
import ProjectController from "../../../api/controller/project";

// components
import PrivateComponent from "../../../components/PrivateComponent";

// template

// type
import { GetServerSideProps } from "next";
import { Session } from "next-auth";

// utils
import { privateServerSideProps } from "../../../utils/private-serverside-props";
import ProjectAdminTemplate, {
	ProjectAdminTemplateProps,
} from "../../../templates/ProjectAdmin";

export default function ProjectAdminPage({
	projects = [],
}: ProjectAdminTemplateProps) {
	return (
		<PrivateComponent>
			<ProjectAdminTemplate projects={projects} />
		</PrivateComponent>
	);
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	return privateServerSideProps(ctx, async (session: Session) => {
		const response = await ProjectController.getAll();
		const { projects } = response;

		if (!projects)
			return {
				props: null,
				notFound: true,
			};

		return {
			props: {
				session,
				projects,
			},
			notFound: false,
		};
	});
};
