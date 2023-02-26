// import { useEffect, useState } from "react";

// controller
// import GithubDataController from "../../api/controller/githubData";

// components
import Heading from "../Heading";

// styles
import * as Styled from "./styles";

// types
export type GithubHoverCardProps = {
	public_repos: number | string;
	totalCommitContributions: number | string;
	totalRepositoryContributions: number | string;
};

const GithubHoverCard = ({
	totalRepositoryContributions,
	totalCommitContributions,
	public_repos,
}: GithubHoverCardProps) => {
	/*
	const [repoPrivate, setRepoPrivate] = useState(0);
	const [commitsContributions, setCommitsContributions] = useState(0);
	const [repoPublic, setRepoPublic] = useState(0);

	// fetch
	useEffect(() => {
		const fetchData = async () => {
			try {
				const data = await GithubDataController.loadGithubGraphQL();

				setRepoPrivate(() => data.totalRepositoryContributions);
				setCommitsContributions(() => data.totalCommitContributions);

				const dataFetched = await GithubDataController.loadGithubAPI();

				setRepoPublic(dataFetched.public_repos);
			} catch (err) {
				console.log(err);
			}
		};

		fetchData();
	}, []);
	*/
	console.log();
	return (
		<Styled.Wrapper>
			<Styled.DisplayerContainer>
				<Styled.HeadingDisplayContainer>
					<Heading as="h2" size="small" color="secondary">
						Repos. total
					</Heading>
				</Styled.HeadingDisplayContainer>
				<Heading as="h3" size="small" color="secondary">
					{!!totalRepositoryContributions &&
						totalRepositoryContributions}
				</Heading>
			</Styled.DisplayerContainer>
			<Styled.DisplayerContainer>
				<Styled.HeadingDisplayContainer>
					<Heading as="h2" size="small" color="secondary">
						Repos. Públicos
					</Heading>
				</Styled.HeadingDisplayContainer>
				<Heading as="h3" size="small" color="secondary">
					{public_repos && public_repos}
				</Heading>
			</Styled.DisplayerContainer>
			<Styled.DisplayerContainer>
				<Styled.HeadingDisplayContainer>
					<Heading as="h2" size="small" color="secondary">
						Commits
					</Heading>
				</Styled.HeadingDisplayContainer>
				<Heading as="h3" size="small" color="secondary">
					{!!totalCommitContributions && totalCommitContributions}
				</Heading>
			</Styled.DisplayerContainer>
		</Styled.Wrapper>
	);
};

export default GithubHoverCard;
