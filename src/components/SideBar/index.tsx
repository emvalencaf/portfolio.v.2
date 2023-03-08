// icons
import { Github, Linkedin } from "@styled-icons/boxicons-logos";

// styles
import * as Styled from "./styles";

// types
export type SideBarProps = {
	githubURL?: string;
	linkedinURL?: string;
	sizes?: "small" | "medium" | "big";
	color?:
		| "primary"
		| "secondary"
		| "tertiary"
		| "quaternary"
		| "quinary"
		| "senary";
};

const urlPattern = {
	github: "github.com/",
	linkedin: "linkedin.com/in/",
};

const SideBar = ({
	githubURL = "",
	linkedinURL = "",
	sizes = "medium",
	color = "secondary",
}: SideBarProps) => {
	return (
		<Styled.Wrapper color={color}>
			{githubURL && githubURL.includes(urlPattern.github) ? (
				<Styled.SocialMediaLink
					rel="external"
					target="_blank"
					href={githubURL}
					aria-label="github profile"
					sizes={sizes}
					color={color}
				>
					<Github />
				</Styled.SocialMediaLink>
			) : (
				""
			)}
			{linkedinURL && linkedinURL.includes(urlPattern.linkedin) ? (
				<Styled.SocialMediaLink
					rel="external"
					target="_blank"
					href={linkedinURL}
					aria-label="linkedin profile"
					sizes={sizes}
					color={color}
				>
					<Linkedin />
				</Styled.SocialMediaLink>
			) : (
				""
			)}
			{((githubURL && githubURL.includes(urlPattern.github)) ||
				(linkedinURL && linkedinURL.includes(urlPattern.linkedin))) && (
				<Styled.VerticalLine aria-label="vertical division line" />
			)}
		</Styled.Wrapper>
	);
};

export default SideBar;
