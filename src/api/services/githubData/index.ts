// types
type DataFetchedGithub = {
	public_repos: number;
	followers: number;
};
type DataGraphQLGithub = {
	user: {
		contributionsCollection: ContributionsCollection;
	};
};

type ContributionsCollection = {
	contributionCalendar: unknown;
	totalCommitContributions: number;
	totalRepositoryContributions: number;
};

// utils
import { GraphQLClient } from "graphql-request";
import { GRAPHQL_QUERIES } from "../../../graphql/queries";
import CreateFetch from "../../../utils/createFetch";

export default class GithubDataService {
	static async loadGithubGraphQL(
		username: string,
		token: string
	): Promise<DataGraphQLGithub> {
		const client = new GraphQLClient(`https://api.github.com/graphql`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		return await client.request(GRAPHQL_QUERIES, {
			username,
		});
	}

	static async loadGithubAPI(username: string) {
		const options = {
			method: "GET",
		};
		return await CreateFetch.dispatch<DataFetchedGithub>(
			`https://api.github.com/users/${username}`,
			options
		);
	}
}
