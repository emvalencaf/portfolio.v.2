// components

import PrivateComponent from "../../../../components/PrivateComponent";

// template
import SectionCreationTemplate from "../../../../templates/SectionCreation";

// controller
import SettingsController from "../../../../api/controller/settings";

// types
import { Settings } from "../../../../shared-types/settings";
import { Session } from "../../../../shared-types/session-nextauth";
import { GetServerSideProps } from "next/types";
type SectionCreationPage = {
	settings: Settings[];
};

// utils
import { privateServerSideProps } from "../../../../utils/private-serverside-props";

export default function SectionCreationPage({
	settings = [],
}: SectionCreationPage) {
	return (
		<PrivateComponent>
			<SectionCreationTemplate allSettings={settings} />
		</PrivateComponent>
	);
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	return privateServerSideProps(ctx, async (session: Session) => {
		const settings = await SettingsController.getAll(session.accessToken);

		return {
			props: {
				session,
				settings,
			},
		};
	});
};
