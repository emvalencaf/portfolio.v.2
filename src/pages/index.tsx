// components
import Head from "next/head";

// templates
import HomeTemplate from "../templates/Home";

// controller
import PortfolioController from "../api/controller/portfolio";

// types
import { GetStaticProps } from "next";
import { Portfolio } from "../shared-types/portfolio";
import GithubDataController from "../api/controller/githubData";
import { GithubHoverCardProps } from "../components/GithubHoverCard";
type IndexProps = {
	portfolio: Portfolio;
	githubData?: GithubHoverCardProps;
};

export default function Index({ portfolio, githubData }: IndexProps) {
	return (
		<>
			<Head>
				<title>{portfolio.settings.websiteName}</title>
			</Head>
			<HomeTemplate
				settings={portfolio?.settings}
				content={portfolio?.content}
				githubData={githubData}
			/>
		</>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	try {
		const response = await PortfolioController.get();
		let githubData;

		if (!response)
			return {
				notFound: true,
			};

		const { portfolio } = response;

		const responseGithubGraphQL =
			await GithubDataController.loadGithubGraphQL(
				process.env.NEXT_PUBLIC_API_GITHUB_USERNAME,
				process.env.GITHUB_TOKEN
			);

		const responseGithubAPI = await GithubDataController.loadGithubAPI(
			process.env.NEXT_PUBLIC_API_GITHUB_USERNAME
		);

		if (responseGithubGraphQL) {
			const { totalCommitContributions, totalRepositoryContributions } =
				responseGithubGraphQL;

			githubData = {
				totalCommitContributions,
				totalRepositoryContributions,
			};
		}

		if (responseGithubAPI) {
			const { public_repos } = responseGithubAPI;
			githubData.public_repos = public_repos;
		}
		return {
			props: {
				portfolio,
				githubData,
			},
			revalidate: 72000, // it will re-render once each 20 hours
		};
	} catch (err) {
		console.log(err);
		return {
			notFound: true,
		};
	}
};
