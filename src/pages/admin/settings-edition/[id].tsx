// hooks
import { useSession } from "next-auth/react";
import { useGetSettings } from "../../../hooks/useGetSettings";
import { useRouter } from "next/router";

// components
import PrivateComponent from "../../../components/PrivateComponent";

// template
import SettingsEditionTemplate from "../../../templates/SettingsEdition";

// types
import { Session } from "../../../shared-types/session-nextauth";
import { privateServerSideProps } from "../../../utils/private-serverside-props";

// utils
import { GetServerSideProps } from "next";

export default function EditionSettingsPage() {
	const router = useRouter();
	const { id } = router.query;
	// session data
	const { data } = useSession();
	const session: Session = data;

	// states
	const { settings, isLoading, isError } = useGetSettings(
		id,
		session.accessToken
	);

	if (isLoading) return <p>Is loading...</p>;

	if (isError) return <p>{isError.message}</p>;

	return (
		<PrivateComponent>
			<SettingsEditionTemplate settings={settings} />
		</PrivateComponent>
	);
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	return privateServerSideProps(ctx);
};
