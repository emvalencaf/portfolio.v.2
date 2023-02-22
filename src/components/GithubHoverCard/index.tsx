import { useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";

// components
import Heading from "../Heading";

// styles
import * as Styled from "./styles";

// types
type DataFecthedGithubAPI = {
	public_repos: string | number;
	followers: string | number;
};

// graphql
import { GraphQLClient } from "graphql-request";
import { GRAPHQL_QUERIES } from "../../graphql/queries";

const client = new GraphQLClient(`https://api.github.com/graphql`, {
	headers: {
		Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
	},
});

const GithubHoverCard = () => {
	const { data, status } = useFetch<DataFecthedGithubAPI>(
		`https://api.github.com/users/emvalencaf`
	);
	const [repoPrivate, setRepoPrivate] = useState();
	const [commitsContributions, setCommitsContributions] = useState();
	useEffect(() => {
		const loadGithub = async () => {
			try {
				const data = await client.request(GRAPHQL_QUERIES, {
					username: process.env.GITHUB_USERNAME,
				});
				const {
					totalRepositoryContributions,
					totalCommitContributions,
				} = data.user.contributionsCollection;

				setRepoPrivate(() => totalRepositoryContributions);
				setCommitsContributions(() => totalCommitContributions);
			} catch (err) {
				console.log(err);
			}
		};

		loadGithub();
	}, []);

	if (status === "idle") return;

	if (status === "error") return;

	if (status === "loading") return <p>Carregando...</p>;

	if (status === "success")
		return (
			<Styled.Wrapper>
				<Styled.DisplayerContainer>
					<Styled.HeadingDisplayContainer>
						<Heading as="h2" size="small" color="secondary">
							Repos. total
						</Heading>
					</Styled.HeadingDisplayContainer>
					<Heading as="h3" size="small" color="secondary">
						{!!repoPrivate && repoPrivate}
					</Heading>
				</Styled.DisplayerContainer>
				<Styled.DisplayerContainer>
					<Styled.HeadingDisplayContainer>
						<Heading as="h2" size="small" color="secondary">
							Repos. Públicos
						</Heading>
					</Styled.HeadingDisplayContainer>
					<Heading as="h3" size="small" color="secondary">
						{data && data?.public_repos}
					</Heading>
				</Styled.DisplayerContainer>
				<Styled.DisplayerContainer>
					<Styled.HeadingDisplayContainer>
						<Heading as="h2" size="small" color="secondary">
							Commits
						</Heading>
					</Styled.HeadingDisplayContainer>
					<Heading as="h3" size="small" color="secondary">
						{!!commitsContributions && commitsContributions}
					</Heading>
				</Styled.DisplayerContainer>
				<Styled.DisplayerContainer>
					<Styled.HeadingDisplayContainer>
						<Heading as="h2" size="small" color="secondary">
							Followers
						</Heading>
					</Styled.HeadingDisplayContainer>
					<Heading as="h3" size="small" color="secondary">
						{data && data?.followers}
					</Heading>
				</Styled.DisplayerContainer>
			</Styled.Wrapper>
		);
};

export default GithubHoverCard;
