// components
import PrivateComponent from "../../../../components/PrivateComponent";

// template
import SettingsCreationTemplate from "../../../../templates/SettingsCreation";

// types
import { GetServerSideProps } from "next/types";

// utils
import { privateServerSideProps } from "../../../../utils/private-serverside-props";

export default function SettingsCreationPage() {
	return (
		<PrivateComponent>
			<SettingsCreationTemplate />
		</PrivateComponent>
	);
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	return privateServerSideProps(ctx);
};
