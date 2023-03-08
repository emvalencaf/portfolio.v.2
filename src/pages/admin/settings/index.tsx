// hooks
import { useGetAllSettings } from "../../../hooks/useGetAllSettings";
import { useSession } from "next-auth/react";

// components
import PrivateComponent from "../../../components/PrivateComponent";

// template
import SettingsAdminTemplate from "../../../templates/SettingsAdmin";

// type
import { GetServerSideProps } from "next";
import { Session } from "../../../shared-types/session-nextauth";

// utils
import { privateServerSideProps } from "../../../utils/private-serverside-props";

export default function ProjectAdminPage() {
	// session
	const { data } = useSession();
	const session: Session = data;
	// states
	const { settings, isLoading, isError } = useGetAllSettings(
		session.accessToken
	);

	if (isLoading) return <p>is loading...</p>;

	if (isError) return <p>{isError.message}</p>;

	return (
		<PrivateComponent>
			<SettingsAdminTemplate settings={settings} />
		</PrivateComponent>
	);
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	return privateServerSideProps(ctx);
};
