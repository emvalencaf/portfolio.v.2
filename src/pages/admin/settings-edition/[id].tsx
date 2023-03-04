// components
import PrivateComponent from "../../../components/PrivateComponent";

// template
import SettingsEditionTemplate, {
	SettingsEditionTemplateProps,
} from "../../../templates/SettingsEdition";

// types
import { privateServerSideProps } from "../../../utils/private-serverside-props";

// utils
import { GetServerSideProps } from "next";
import SettingsController from "../../../api/controller/settings";

import { Session } from "../../../shared-types/session-nextauth";

export default function EditionSettingsPage({
	settings,
}: SettingsEditionTemplateProps) {
	return (
		<PrivateComponent>
			<SettingsEditionTemplate settings={settings} />
		</PrivateComponent>
	);
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	return privateServerSideProps(ctx, async (session: Session) => {
		const { id } = ctx.params;
		const response = await SettingsController.getById(
			id,
			session.accessToken
		);

		const { settings } = response;

		if (!settings)
			return {
				notFound: true,
			};

		return {
			props: {
				session,
				settings,
			},
		};
	});
};
