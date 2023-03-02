// services
import GithubDataService from "../../services/githubData";

export default class GithubDataController {
	static async loadGithubGraphQL(username: string, token: string) {
		try {
			const data = await GithubDataService.loadGithubGraphQL(
				username,
				token
			);

			console.log(data);

			const { totalRepositoryContributions, totalCommitContributions } =
				data.user.contributionsCollection;

			return {
				totalCommitContributions,
				totalRepositoryContributions,
			};
		} catch (err) {
			console.log(err);
		}
	}
	static async loadGithubAPI(username: string) {
		try {
			const data = await GithubDataService.loadGithubAPI(username);

			const { public_repos, followers } = data;

			return {
				public_repos,
				followers,
			};
		} catch (err) {
			console.log(err);
		}
	}
}
