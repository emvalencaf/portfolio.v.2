// components

import PrivateComponent from "../../../../components/PrivateComponent";

// template
import SettingsCreationTemplate from "../../../../templates/SettingsCreation";


// types
import { GetServerSideProps } from "next/types";

// utils
import { privateServerSideProps } from "../../../../utils/private-serverside-props";
import CreateFetch from "../../../../utils/createFetch";
import SettingsService from "../../../../api/services/settings";


export default function SectionCreationPage({ settings = [] }){

	console.log(settings);

	return (
		<PrivateComponent>
			<SettingsCreationTemplate />
		</PrivateComponent>
	)
}


export const getServerSideProps: GetServerSideProps = async (ctx) => {

	return privateServerSideProps(ctx, async (session) => {

		const settings = await SettingsService.getAll(session.accessToken);

		return {
			props: {
				session,
				settings,
			},
		}
	});
}