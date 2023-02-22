// components

import PrivateComponent from "../../../../components/PrivateComponent";

// template
import SectionCreationTemplate from "../../../../templates/SectionCreation";

// controller
import SettingsController from "../../../../api/controller/settings";

// types
import { GetServerSideProps } from "next/types";
type SectionCreationPage = {
	settings: Settings[];
};

// utils
import { privateServerSideProps } from "../../../../utils/private-serverside-props";
import { Settings } from "../../../../shared-types/settings";

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
	return privateServerSideProps(ctx, async (session) => {
		const settings = await SettingsController.getAll(session.accessToken);

		return {
			props: {
				session,
				settings,
			},
		};
	});
};
