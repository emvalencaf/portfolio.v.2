import { gql } from "graphql-request";

export const GRAPHQL_QUERIES = gql`
	query ($username: String!) {
		user(login: $username) {
			contributionsCollection {
				contributionCalendar {
					totalContributions
				}
				totalCommitContributions
				totalRepositoryContributions
			}
		}
	}
`;
