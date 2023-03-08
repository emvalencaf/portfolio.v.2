// components
import PrivateComponent from "../../components/PrivateComponent";

// template
import DashboardTemplate from "../../templates/Dashboard";

// type
import { GetServerSideProps } from "next";
// import { Session } from "next-auth";

// utils
import { privateServerSideProps } from "../../utils/private-serverside-props";
// import PortfolioController from "../../api/controller/portfolio";
import { useGetPortfolio } from "../../hooks/useGetPortfolio";

export default function DashboardPage() {
	const {
		portfolio,
		isLoading: isLoadingPortfolio,
		isError: isErrorPortfolio,
	} = useGetPortfolio();

	if (isLoadingPortfolio) return <p>is loading...</p>;

	if (isErrorPortfolio) return <p>{isErrorPortfolio.message}</p>;

	return (
		<PrivateComponent>
			<DashboardTemplate sections={portfolio.content.sections} />
		</PrivateComponent>
	);
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	return privateServerSideProps(ctx);
};
