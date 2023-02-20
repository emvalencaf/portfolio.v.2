// templates
import HomeTemplate from "../templates/Home";

// controller
import PortfolioController from "../api/controller/portfolio";

// types
import { GetServerSideProps } from "next";

export default function Index({ portfolio }) {
  return <HomeTemplate portfolio={portfolio} />;
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {

	const portfolio = await PortfolioController.get();

	if (!portfolio) return {
		notFound: true,
	}

	return {
		props: {
			portfolio,
		}
	}
}