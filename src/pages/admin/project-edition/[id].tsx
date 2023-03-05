// components
import PrivateComponent from "../../../components/PrivateComponent";

// controller
import ProjectController from "../../../api/controller/project";

// template
import ProjectEditionTemplate, {
	ProjectEditionTemplateProps,
} from "../../../templates/ProjectEdition";

// types
import { privateServerSideProps } from "../../../utils/private-serverside-props";
import { Session } from "../../../shared-types/session-nextauth";

// utils
import { GetServerSideProps } from "next";

export default function EditionProjectPage({
	project,
}: ProjectEditionTemplateProps) {
	return (
		<PrivateComponent>
			<ProjectEditionTemplate project={project} />
		</PrivateComponent>
	);
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	return privateServerSideProps(ctx, async (session: Session) => {
		const { id } = ctx.params;
		const response = await ProjectController.getById(id);

		const { project } = response;

		if (!project)
			return {
				notFound: true,
			};

		return {
			props: {
				session,
				project,
			},
		};
	});
};
