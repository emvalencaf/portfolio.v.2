import { useEffect, useState } from "react";

// controller
import GithubDataController from "../../api/controller/githubData";

// components
import Heading from "../Heading";

// styles
import * as Styled from "./styles";

const GithubHoverCard = () => {
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
					{repoPublic && repoPublic}
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
		</Styled.Wrapper>
	);
};

export default GithubHoverCard;
