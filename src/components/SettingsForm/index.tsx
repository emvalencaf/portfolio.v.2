// hooks
import { MutableRefObject, useRef, useState } from "react";

// components
import Heading from "../Heading";
import Form from "../Form";
import ImageInput from "../ImageInput";
import TextInput from "../TextInput";

// styles
import * as Styled from "./styles";

// icon
import {
	Facebook,
	Github,
	Instagram,
	Linkedin,
	Tiktok,
	Twitter,
	Youtube,
} from "@styled-icons/boxicons-logos";
import {
	LogoDev,
	PersonPin,
	Subtitles,
	Web,
} from "@styled-icons/material-outlined";
import { Icon } from "@styled-icons/simple-icons";

// types
import SettingsController from "../../api/controller/settings";
import { Session } from "../../shared-types/session-nextauth";
import { useSession } from "next-auth/react";
export type SettingsFormProps = {
	id?: string;
	websiteNameProps?: string;
	favIconProps?: string;
	logo?: {
		srcImg?: string;
		altText: string;
		link: string;
		newTab?: boolean;
	};
	socialMedia?: {
		instaURL?: string;
		linkedinURL?: string;
		facebookURL?: string;
		homepageURL?: string;
		twitterURL?: string;
		githubURL?: string;
		tiktokURL?: string;
		youtubeURL?: string;
	};
	typeForm: "create" | "update";
};

const SettingsForm = ({
	id = "",
	websiteNameProps = "",
	favIconProps = "",
	logo,
	socialMedia,
	typeForm,
}: SettingsFormProps) => {
	// session
	const { data } = useSession();
	const session: Session = data;

	// states
	const [websiteName, setWebsiteName] = useState(websiteNameProps);
	const [logoImg, setLogoImg] = useState(null);
	const [logoAlt, setLogoAlt] = useState(logo.altText);
	const [favIcon, setFavIcon] = useState(null);
	// Social Media URL
	const [linkedInURL, setLinkedInURL] = useState(socialMedia.linkedinURL);
	const [githubURL, setGithubURL] = useState(socialMedia.githubURL);
	const [instaURL, setInstaURL] = useState(socialMedia.instaURL);
	const [facebookURL, setFacebookURL] = useState(socialMedia.facebookURL);
	const [youtubeURL, setYoutubeURL] = useState(socialMedia.youtubeURL);
	const [twitterURL, setTwitterURL] = useState(socialMedia.twitterURL);
	const [tiktokURL, setTiktokURL] = useState(socialMedia.tiktokURL);
	const [homepageURL, setHomepageURL] = useState(socialMedia.homepageURL);
	// refs
	const formRef = useRef<HTMLFormElement | null>(null);

	const handleSubmitFormSettings = async (
		ref: MutableRefObject<HTMLFormElement>
	) => {
		const data = {
			websiteName,
			logo: {
				srcImg: "",
				altText: logoAlt,
				link: "#",
			},
			socialMedia: {
				instaURL,
				linkedInURL,
				facebookURL,
				githubURL,
				homepageURL,
				twitterURL,
				tiktokURL,
				youtubeURL,
			},
			favIcon,
		};
		console.log(data);
		const formData: FormData = new FormData(ref.current);

		return typeForm === "create"
			? await SettingsController.create(
					data,
					formData,
					session?.accessToken
			  )
			: await SettingsController.update(
					id,
					data,
					formData,
					session?.accessToken
			  );
	};

	return (
		<Styled.Wrapper>
			<Form
				onSubmit={handleSubmitFormSettings}
				reference={formRef.current}
			>
				<Heading as="h2" size="medium" color="quaternary">
					Your portfolio settings
				</Heading>
				<TextInput
					name="websiteName"
					label="name of the portfolio"
					icon={<Web />}
					value={websiteName}
					onInputChange={(v) => setWebsiteName(v)}
					required={true}
				/>
				<ImageInput
					name="logoImg"
					label="you may upload a logo image"
					icon={<LogoDev />}
					value={logoImg}
					onInputFile={(v) => setLogoImg(v)}
					previewImg={logo.srcImg}
					required={false}
				/>
				<ImageInput
					name="favIcon"
					label="you may upload a fav icon"
					icon={<Icon />}
					value={favIcon}
					onInputFile={(v) => setFavIcon(v)}
					previewImg={favIconProps}
					required={typeForm === "create" ? true : false}
				/>
				<TextInput
					name="logoAlt"
					label="altenative text of the logo"
					icon={<Subtitles />}
					value={logoAlt}
					onInputChange={(v) => setLogoAlt(v)}
					required={true}
				/>
				<TextInput
					name="linkedInURL"
					label="inform the link to your LinkedIn profile"
					icon={<Linkedin />}
					value={linkedInURL}
					onInputChange={(v) => setLinkedInURL(v)}
					required={false}
				/>
				<TextInput
					name="githubURL"
					label="inform the link to your Github profile"
					icon={<Github />}
					value={githubURL}
					onInputChange={(v) => setGithubURL(v)}
					required={false}
				/>
				<TextInput
					name="instaURL"
					label="inform the link to your Instagram profile"
					icon={<Instagram />}
					value={instaURL}
					onInputChange={(v) => setInstaURL(v)}
					required={false}
				/>
				<TextInput
					name="twitterURL"
					label="inform the link to your Twitter profile"
					icon={<Twitter />}
					value={twitterURL}
					onInputChange={(v) => setTwitterURL(v)}
					required={false}
				/>
				<TextInput
					name="youtubeURL"
					label="inform the link to your Youtube chanel"
					icon={<Youtube />}
					value={youtubeURL}
					onInputChange={(v) => setYoutubeURL(v)}
					required={false}
				/>
				<TextInput
					name="facebookURL"
					label="inform the link to your Facebook profile"
					icon={<Facebook />}
					value={facebookURL}
					onInputChange={(v) => setFacebookURL(v)}
					required={false}
				/>
				<TextInput
					name="homepageURL"
					label="inform the link to your Homepage"
					icon={<PersonPin />}
					value={homepageURL}
					onInputChange={(v) => setHomepageURL(v)}
					required={false}
				/>
				<TextInput
					name="tiktokURL"
					label="inform the link to your Homepage"
					icon={<Tiktok />}
					value={tiktokURL}
					onInputChange={(v) => setTiktokURL(v)}
					required={false}
				/>
			</Form>
		</Styled.Wrapper>
	);
};

export default SettingsForm;
