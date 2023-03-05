// controller
import SectionController from "../../../api/controller/section";

// components
import PrivateComponent from "../../../components/PrivateComponent";

// template
import SectionAdminTemplate, {
	SectionAdminTemplateProps,
} from "../../../templates/SectionAdmin";

// type
import { GetServerSideProps } from "next";
import { Session } from "../../../shared-types/session-nextauth";

// utils
import { privateServerSideProps } from "../../../utils/private-serverside-props";

export default function ProjectAdminPage({
	sections = [],
}: SectionAdminTemplateProps) {
	return (
		<PrivateComponent>
			<SectionAdminTemplate sections={sections} />
		</PrivateComponent>
	);
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	return privateServerSideProps(ctx, async (session: Session) => {
		const sections = await SectionController.getAll(session.accessToken);
		if (!sections)
			return {
				props: null,
				notFound: true,
			};
		return {
			props: {
				session,
				sections,
			},
			notFound: false,
		};
	});
};
