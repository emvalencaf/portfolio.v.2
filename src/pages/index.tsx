// templates
import HomeTemplate from "../templates/Home";

// controller
import PortfolioController from "../api/controller/portfolio";

// types
import { GetStaticProps } from "next";
import { Portfolio } from "../shared-types/portfolio";
// import GithubDataController from "../api/controller/githubData";
import { GithubHoverCardProps } from "../components/GithubHoverCard";
type IndexProps = {
	portfolio: Portfolio;
	githubData?: GithubHoverCardProps;
};

export default function Index({ portfolio, githubData }: IndexProps) {
	return (
		<HomeTemplate
			settings={portfolio?.settings}
			content={portfolio?.content}
			githubData={githubData}
		/>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	const response = await PortfolioController.get();
	console.log(process.env.NEXT_PUBLIC_API_GITHUB_USERNAME);
	if (!response)
		return {
			notFound: true,
		};

	const { portfolio } = response;
	/*
	const responseGithubGraphQL = await GithubDataController.loadGithubGraphQL(
		process.env.NEXT_PUBLIC_API_GITHUB_USERNAME,
		process.env.GITHUB_TOKEN
	);
	const responseGithubAPI = await GithubDataController.loadGithubAPI(
		process.env.NEXT_PUBLIC_API_GITHUB_USERNAME
	);

	const { totalCommitContributions, totalRepositoryContributions } =
		responseGithubGraphQL;

	const { public_repos } = responseGithubAPI;
	console.log(responseGithubAPI);
	console.log(responseGithubGraphQL);*/

	return {
		props: {
			portfolio /*
			githubData: {
				totalCommitContributions,
				totalRepositoryContributions,
				public_repos,
			},*/,
		},
		revalidate: 72000, // it will re-render once each 20 hours
	};
};
