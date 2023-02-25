// services
import GithubDataService from "../../services/githubData";

export default class GithubDataController {
	static async loadGithubGraphQL() {
		try {
			const data = await GithubDataService.loadGithubGraphQL();

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
	static async loadGithubAPI() {
		try {
			const data = await GithubDataService.loadGithubAPI();

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
