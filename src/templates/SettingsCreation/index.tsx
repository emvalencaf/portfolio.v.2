// hooks
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { MutableRefObject, useEffect, useRef, useState } from 'react';
import PortfolioController from '../../api/controller/portfolio';

// components
import Form from '../../components/Form';
import Header from '../../components/Header';
import Heading from '../../components/Heading';
import ImageInput from '../../components/ImageInput';
import TextInput from '../../components/TextInput';
import { Session } from '../../shared-types/session-nextauth';

// icons
import { Facebook, Github, Instagram, Linkedin, Tiktok, Twitter, Youtube } from '@styled-icons/boxicons-logos';
import { LogoDev, PersonPin, Subtitles, Web } from '@styled-icons/material-outlined';

// styles
import * as Styled from './styles';
import SettingsController from '../../api/controller/settings';
import { Icon } from '@styled-icons/simple-icons';

// types
export type SettingsCreationTemplateProps = {
	title?: string;
};

const SettingsCreationTemplate = () => {
	// session
	const { data } = useSession();
	const session: Session = data;

	// states
	const [websiteName, setWebsiteName] = useState("");
	const [logoImg, setLogoImg] = useState(null);
	const [logoAlt, setLogoAlt] = useState("");
	const [ favIcon, setFavIcon ] = useState(null);
	// Social Media URL
	const [linkedInURL, setLinkedInURL] = useState("");
	const [githubURL, setGithubURL] = useState("");
	const [instaURL, setInstaURL] = useState("");
	const [facebookURL, setFacebookURL] = useState("");
	const [youtubeURL, setYoutubeURL] = useState("");
	const [twitterURL, setTwitterURL] = useState("");
	const [tiktokURL, setTiktokURL] = useState("");
	const [homepageURL, setHomepageURL] = useState("");
	// refs
	const formRef = useRef<HTMLFormElement | null>(null);



	// onSubmit
	const handleSettingsCreation = async (ref: MutableRefObject<HTMLFormElement>) => {

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

		return await SettingsController.create(data, formData, session?.accessToken);
	};

	return (
		<Styled.Wrapper>
			<Form
				onSubmit={handleSettingsCreation}
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
					required={false}
				/>
				<ImageInput
					name="favIcon"
					label="you may upload a fav icon"
					icon={<Icon />}
					value={favIcon}
					onInputFile={(v) => setFavIcon(v)}
					required={true}
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

export default SettingsCreationTemplate;
