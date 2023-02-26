// components
import GithubHoverCard, { GithubHoverCardProps } from "../GithubHoverCard";
import Heading from "../Heading";
import Section, { SectionProps } from "../Section";

// styles
import * as Styled from "./styles";

// types
export type SectionHomeProps = {
	ownerName?: string;
	ocupation?: string;
	mainStack?: string[];
	githubData?: GithubHoverCardProps;
} & SectionProps;

const SectionHome = ({
	id,
	background,
	color,
	ownerName,
	ocupation,
	mainStack = [],
	backgroundImg = "",
	githubData,
}: SectionHomeProps) => {
	return (
		<Section
			id={id}
			background={background}
			color={color}
			backgroundImg={backgroundImg}
		>
			<Styled.Wrapper>
				<Styled.IntroContainer>
					<p>Olá, seja bem-vindo ao meu portfólio.</p>
					{ownerName && (
						<Heading as="h1" size="big" color="secondary">
							{ownerName}
						</Heading>
					)}
					{ocupation && (
						<Heading as="h2" size="big" color="senary">
							{ocupation}
						</Heading>
					)}
					{mainStack.length > 0 && (
						<Heading as="h2" size="medium">
							{mainStack.join(" | ")}
						</Heading>
					)}
				</Styled.IntroContainer>
				{(githubData.totalCommitContributions ||
					githubData.totalRepositoryContributions ||
					githubData.public_repos) && (
					<Styled.GithubContainer>
						<GithubHoverCard {...githubData} />
					</Styled.GithubContainer>
				)}
			</Styled.Wrapper>
		</Section>
	);
};

export default SectionHome;
