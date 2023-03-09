// hooks
import { useSession } from "next-auth/react";

// components
import PrivateComponent from "../../../../components/PrivateComponent";

// template
import SectionCreationTemplate from "../../../../templates/SectionCreation";

// types
import { Settings } from "../../../../shared-types/settings";
import { Session } from "../../../../shared-types/session-nextauth";
import { GetServerSideProps } from "next/types";

type SectionCreationPage = {
	settings: Settings[];
};

// utils
import { privateServerSideProps } from "../../../../utils/private-serverside-props";
import { useGetAllSettings } from "../../../../hooks/useGetAllSettings";

export default function SectionCreationPage() {
	// auth
	const { data } = useSession();
	const session: Session = data;
	// states
	const { settings, isLoading, isError } = useGetAllSettings(
		session.accessToken
	);

	if (isLoading) return <p>Is loading...</p>;

	if (isError) return <p>{isError.message}</p>;

	return (
		<PrivateComponent>
			<SectionCreationTemplate allSettings={settings} />
		</PrivateComponent>
	);
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	return privateServerSideProps(ctx);
};
