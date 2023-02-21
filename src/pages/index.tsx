// templates
import HomeTemplate from "../templates/Home";

// controller
import PortfolioController from "../api/controller/portfolio";

// types
import { GetServerSideProps } from "next";
import { Portfolio } from "../shared-types/portfolio";
type IndexProps = {
	portfolio: Portfolio;
};

export default function Index({ portfolio }: IndexProps) {
	
	return <HomeTemplate settings={portfolio?.settings} content={portfolio?.content}  />;
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {

	const response = await PortfolioController.get();

	if (!response) return {
		notFound: true,
	}

	const { portfolio } = response;

	return {
		props: {
			portfolio,
		}
	}
}