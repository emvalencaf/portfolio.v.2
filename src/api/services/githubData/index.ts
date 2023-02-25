// types
type DataFetchedGithub = {
	public_repos: number;
	followers: number;
};

// utils
import { GraphQLClient } from "graphql-request";
import { GRAPHQL_QUERIES } from "../../../graphql/queries";
import CreateFetch from "../../../utils/createFetch";

const client = new GraphQLClient(`https://api.github.com/graphql`, {
	headers: {
		Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_GITHUB_TOKEN}`,
	},
});

export default class GithubDataService {
	static async loadGithubGraphQL() {
		console.log(process.env.NEXT_PUBLIC_API_GITHUB_USERNAME);
		console.log(process.env.NEXT_PUBLIC_API_GITHUB_TOKEN);
		return await client.request(GRAPHQL_QUERIES, {
			username: process.env.NEXT_PUBLIC_API_GITHUB_USERNAME,
		});
	}

	static async loadGithubAPI() {
		return await CreateFetch.dispatch<DataFetchedGithub>(
			`https://api.github.com/users/${process.env.NEXT_PUBLIC_API_GITHUB_USERNAME}`
		);
	}
}
