// controller
import SettingsController from "../../../api/controller/settings";

// components
import PrivateComponent from "../../../components/PrivateComponent";

// template
import SettingsAdminTemplate, {
	SettingsAdminTemplateProps,
} from "../../../templates/SettingsAdmin";

// type
import { GetServerSideProps } from "next";
import { Session } from "../../../shared-types/session-nextauth";

// utils
import { privateServerSideProps } from "../../../utils/private-serverside-props";

export default function ProjectAdminPage({
	settings = [],
}: SettingsAdminTemplateProps) {
	return (
		<PrivateComponent>
			<SettingsAdminTemplate settings={settings} />
		</PrivateComponent>
	);
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	return privateServerSideProps(ctx, async (session: Session) => {
		const settings = await SettingsController.getAll(session.accessToken);
		if (!settings)
			return {
				props: null,
				notFound: true,
			};

		return {
			props: {
				session,
				settings,
			},
			notFound: false,
		};
	});
};
