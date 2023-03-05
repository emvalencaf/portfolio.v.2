// components
import PrivateComponent from "../../../components/PrivateComponent";

// template
// types
import { privateServerSideProps } from "../../../utils/private-serverside-props";

// utils
import { GetServerSideProps } from "next";
import SectionController from "../../../api/controller/section";

import { Session } from "../../../shared-types/session-nextauth";
import SectionEditionTemplate, {
	SectionEditioTemplateProps,
} from "../../../templates/SectionEdition";

export default function EditionSettingsPage({
	section,
}: SectionEditioTemplateProps) {
	return (
		<PrivateComponent>
			<SectionEditionTemplate section={section} />
		</PrivateComponent>
	);
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	return privateServerSideProps(ctx, async (session: Session) => {
		const { id } = ctx.params;
		const section = await SectionController.getById(
			id,
			session.accessToken
		);

		if (!section)
			return {
				notFound: true,
			};

		return {
			props: {
				session,
				section,
			},
		};
	});
};
