import React from "react";

// styles
import * as Styled from "./styles";

// types
import SocialMedia, { SocialMediaProps } from "../SocialMedia";
import DateStringFormating from "../../utils/dateString";
export type FooterProps = SocialMediaProps & {
	year?: string;
	ownerName?: string;
};

const Footer = ({
	instaURL = "",
	linkedinURL = "",
	facebookURL = "",
	homepageURL = "",
	twitterURL = "",
	githubURL = "",
	youtubeURL = "",
	tiktokURL = "",
	sizes = "medium",
	year = "",
	ownerName = "",
}: FooterProps) => {
	if (!year) year = new Date().getFullYear().toString();

	return (
		<Styled.Wrapper>
			<p>
				&#169;
				{year && (
					<span aria-label="year">
						{DateStringFormating.getFullYear(year)}
					</span>
				)}{" "}
				all right reserved
				{ownerName && (
					<span aria-label="owner name"> to {ownerName}</span>
				)}
				.
			</p>
			<SocialMedia
				instaURL={instaURL}
				linkedinURL={linkedinURL}
				facebookURL={facebookURL}
				homepageURL={homepageURL}
				twitterURL={twitterURL}
				youtubeURL={youtubeURL}
				githubURL={githubURL}
				tiktokURL={tiktokURL}
				sizes={sizes}
			/>
		</Styled.Wrapper>
	);
};

export default Footer;
