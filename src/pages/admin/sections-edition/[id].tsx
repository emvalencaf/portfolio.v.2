// hooks
import { useGetSection } from "../../../hooks/useGetSection";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

// components
import PrivateComponent from "../../../components/PrivateComponent";

// template
import SectionEditionTemplate from "../../../templates/SectionEdition";

// types
import { privateServerSideProps } from "../../../utils/private-serverside-props";
import { Session } from "../../../shared-types/session-nextauth";

// utils
import { GetServerSideProps } from "next";

export default function EditionSettingsPage() {
	// params
	const router = useRouter();
	const { id } = router.query;
	// session
	const { data } = useSession();
	const session: Session = data;
	// state
	const { section, isLoading, isError } = useGetSection(
		id,
		session.accessToken
	);

	if (isLoading) return <p>Is loading...</p>;

	if (isError) return <p>{isError.message}</p>;

	return (
		<PrivateComponent>
			<SectionEditionTemplate section={section} />
		</PrivateComponent>
	);
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	return privateServerSideProps(ctx);
};
