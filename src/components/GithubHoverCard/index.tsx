// import { useEffect, useState } from "react";

// controller
// import GithubDataController from "../../api/controller/githubData";

// components
import Heading from "../Heading";

// styles
import * as Styled from "./styles";

// types
export type GithubHoverCardProps = {
	public_repos?: number | string;
	totalCommitContributions?: number | string;
	totalRepositoryContributions?: number | string;
};

const GithubHoverCard = ({
	totalRepositoryContributions,
	totalCommitContributions,
	public_repos,
}: GithubHoverCardProps) => {
	return (
		<Styled.Wrapper>
			{!!totalRepositoryContributions && (
				<Styled.DisplayerContainer>
					<Styled.HeadingDisplayContainer>
						<Heading as="h2" size="small" color="secondary">
							Repos. total
						</Heading>
					</Styled.HeadingDisplayContainer>
					<Heading as="h3" size="small" color="secondary">
						{totalRepositoryContributions}
					</Heading>
				</Styled.DisplayerContainer>
			)}
			{!!public_repos && (
				<Styled.DisplayerContainer>
					<Styled.HeadingDisplayContainer>
						<Heading as="h2" size="small" color="secondary">
							Repos. Públicos
						</Heading>
					</Styled.HeadingDisplayContainer>
					<Heading as="h3" size="small" color="secondary">
						{public_repos}
					</Heading>
				</Styled.DisplayerContainer>
			)}
			{!!totalCommitContributions && (
				<Styled.DisplayerContainer>
					<Styled.HeadingDisplayContainer>
						<Heading as="h2" size="small" color="secondary">
							Commits
						</Heading>
					</Styled.HeadingDisplayContainer>
					<Heading as="h3" size="small" color="secondary">
						{totalCommitContributions}
					</Heading>
				</Styled.DisplayerContainer>
			)}
		</Styled.Wrapper>
	);
};

export default GithubHoverCard;
