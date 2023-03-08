// hooks
import { useGetAllSections } from "../../../hooks/useGetAllSections";
import { useSession } from "next-auth/react";

// components
import PrivateComponent from "../../../components/PrivateComponent";

// template
import SectionAdminTemplate from "../../../templates/SectionAdmin";

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
	const { sections, isLoading, isError } = useGetAllSections(
		session.accessToken
	);

	if (isLoading) return <p>is loading...</p>;

	if (isError) return <p>{isError.message}</p>;

	return (
		<PrivateComponent>
			<SectionAdminTemplate sections={sections} />
		</PrivateComponent>
	);
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	return privateServerSideProps(ctx);
};
