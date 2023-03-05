// components
import PrivateComponent from "../../components/PrivateComponent";

// template
import DashboardTemplate, { DashboardProps } from "../../templates/Dashboard";

// type
import { GetServerSideProps } from "next";
import { Session } from "next-auth";

// utils
import { privateServerSideProps } from "../../utils/private-serverside-props";
import PortfolioController from "../../api/controller/portfolio";

export default function DashboardPage({ sections = [] }: DashboardProps) {
	return (
		<PrivateComponent>
			<DashboardTemplate sections={sections} />
		</PrivateComponent>
	);
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	return privateServerSideProps(ctx, async (session: Session) => {
		const response = await PortfolioController.get();

		if (!response)
			return {
				props: null,
				notFound: true,
			};

		const { portfolio } = response;

		const { sections } = portfolio.content;
		return {
			props: {
				session,
				sections,
			},
			notFound: false,
		};
	});
};
