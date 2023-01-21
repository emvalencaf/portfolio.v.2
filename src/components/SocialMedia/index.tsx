// icons
import { FacebookCircle, Github, InstagramAlt, Linkedin, Tiktok, Twitter, Youtube } from "@styled-icons/boxicons-logos";
import { Person3, Person4, PersonPin } from "@styled-icons/material-outlined"
// styles
import * as Styled from './styles';

// types
export type SocialMediaProps = {
	instaURL?: string;
	linkedinURL?: string;
	facebookURL?: string;
	homepageURL?: string;
	twitterURL?: string;
	githubURL?: string;
	youtubeURL?: string;
	tiktokURL?: string;
	sizes?: "small" | "medium" | "big"
};

const urlPattern = {
	github: "github.com/",
	linkedin: "linkedin.com/in/",
	instagram: "instagram.com/",
	twitter: "twitter.com/",
	facebook: "facebook.com/",
	youtube: "youtube.com/",
	tiktok: "tiktok.com/",
};

const SocialMedia = ({ instaURL = "", linkedinURL = "", facebookURL = "", homepageURL = "", twitterURL = "", githubURL = "", youtubeURL = "", tiktokURL = "", sizes = "medium" }: SocialMediaProps) => {
	return (
		<Styled.Wrapper sizes={sizes}>
			{facebookURL && facebookURL.includes(urlPattern.facebook) ? (
				<Styled.SocialMediaLink rel="external" target="_blank" href={facebookURL} aria-label="facebook profile">
					<FacebookCircle />
				</Styled.SocialMediaLink>
			) : ""}
			{instaURL && instaURL.includes(urlPattern.instagram) ? (
				<Styled.SocialMediaLink
					rel="external"
					target="_blank"
					href={instaURL}
					aria-label="instagram profile"
				>
					<InstagramAlt />
				</Styled.SocialMediaLink>
			) : ""}
			{linkedinURL && linkedinURL.includes(urlPattern.linkedin) ? (
				<Styled.SocialMediaLink
					rel="external"
					target="_blank"
					href={linkedinURL}
					aria-label="linkedin profile"
				>
					<Linkedin />
				</Styled.SocialMediaLink>
			) : ""}
			{githubURL && githubURL.includes(urlPattern.github) ? (
				<Styled.SocialMediaLink
					rel="external"
					target="_blank"
					href={githubURL}
					aria-label="github profile"
				>
					<Github />
				</Styled.SocialMediaLink>
			) : ""}
			{twitterURL && twitterURL.includes(urlPattern.twitter) ? (
				<Styled.SocialMediaLink
					rel="external"
					target="_blank"
					href={twitterURL}
					aria-label="twitter profile"
				>
					<Twitter />
				</Styled.SocialMediaLink>
			) : ""}
			{youtubeURL && youtubeURL.includes(urlPattern.youtube) ? (
				<Styled.SocialMediaLink
					rel="external"
					target="_blank"
					href={youtubeURL}
					aria-label="youtube profile"
				>
					<Youtube />
				</Styled.SocialMediaLink>
			) : ""}
			{tiktokURL && tiktokURL.includes(urlPattern.tiktok) ? (
				<Styled.SocialMediaLink
					rel="external"
					target="_blank"
					href={instaURL}
					aria-label="tiktok profile"
				>
					<Tiktok />
				</Styled.SocialMediaLink>
			) : ""}
			{homepageURL? (
				<Styled.SocialMediaLink
					rel="external"
					target="_blank"
					href={homepageURL}
					aria-label="personal blog"
				>
					<PersonPin />
				</Styled.SocialMediaLink>
			): ""}
		</Styled.Wrapper>
	);
};

export default SocialMedia;
