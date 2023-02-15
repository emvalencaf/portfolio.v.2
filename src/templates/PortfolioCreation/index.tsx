// hooks
import { Facebook, Github, Instagram, Linkedin, Tiktok, Twitter, Youtube } from '@styled-icons/boxicons-logos';
import { Code, Home, HomeWork, LogoDev, Person3, PersonPin, Subtitles, Wallpaper, Web, Work } from '@styled-icons/material-outlined';
import { useSession } from 'next-auth/react';
import { useEffect, useRef, useState } from 'react';
import PortfolioController from '../../api/controller/portfolio';

// components
import Form from '../../components/Form';
import Header from '../../components/Header';
import Heading from '../../components/Heading';
import ImageInput from '../../components/ImageInput';
import TextInput from '../../components/TextInput';
import { Session } from '../../shared-types/session-nextauth';

// styles
import * as Styled from './styles';



const PortfolioCreationTemplate = () => {

	// session
	const { data } = useSession();
	const session: Session = data;

	// states
	const [websiteName, setWebsiteName ] = useState("");
	const [ logoImg, setLogoImg ] = useState(null);
	const [ logoAlt, setLogoAlt ] = useState(null);
	// Social Media URL
	const [ linkedInURL, setLinkedInURL ] = useState("");
	const [ githubURL, setGithubURL ] = useState("");
	const [ instaURL, setInstaURL ] = useState("");
	const [ facebookURL, setFacebookURL ] = useState("");
	const [ youtubeURL, setYoutubeURL ] = useState("");
	const [ twitterURL, setTwitterURL ] = useState("");
	const [ tiktokURL, setTiktokURL ] = useState("");
	const [ homepageURL, setHomepageURL ] = useState("");
	// Home Section
	const [ ocupation, setOcupation ] = useState("");
	const [ mainStack, setMainStack ] = useState("");
	const [ homeBackgroundImg, setHomeBackgroundImg ] = useState(null);

	// for headear effect
	const [ lastScrollYCoords, setLastScrollYCoords ] = useState<number>(0);
	const [ visibleHeader, setVisibleHeader ] = useState<boolean>(true);

	// refs
	const formRef = useRef<HTMLFormElement | null>(null);

	// useEffect for showing header
	useEffect(() => {

		const handleHiddenHeader = () => {
			lastScrollYCoords < window.scrollY ?
				setVisibleHeader(false) :
				setVisibleHeader(true);

			setLastScrollYCoords(window.scrollY);
		};

		window.addEventListener("scroll", handleHiddenHeader);

		return () => {
			window.removeEventListener("scroll", handleHiddenHeader);
		};

	}, [lastScrollYCoords]);

	// handle Submit
	const handleCreatePortfolio = async () => {


		const portfolioData = {
			websiteName,
			logo: {
				srcImg: logoImg,
				altText: logoAlt,
				link: "#",
			},
			socialMedia: {
				githubURL,
				facebookURL,
				instaURL,
				tiktokURL,
				homepageURL,
				youtubeURL,
			}
		};

		const formData = new FormData(formRef.current);

		return await PortfolioController.create(
			portfolioData,
			formData,
			session?.accessToken,
		);
	}

	return (
		<Styled.Wrapper>
			<Header menuLinks={[]} logo={{
				altText: "dashboard",
				link: "/admin/"
			}} visible={visibleHeader} />
			<Heading
				as="h1"
				size="big"
				color="quaternary"
				uppercase
			>
				Portfolio
			</Heading>
			<p>
				Bem-vindo à seção para criar o seu portfólio.
			</p>
			<Form
				onSubmit={() => handleCreatePortfolio}
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
					onInput={(v) => setLogoImg(v)}
					required={false}
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
				<Heading as="h2" size="medium" color="quaternary">
					Portfolio content
				</Heading>
				<Styled.ContainerHeading>
					<Heading as="h3" size="small" color="tertiary">
						Home section
					</Heading>
					<Home />
				</Styled.ContainerHeading>
				<TextInput
					name="ocupation"
					label="what your ocupation"
					icon={<Work />}
					value={ocupation}
					onInputChange={(v) => setOcupation(v)}
					required={false}
				/>
				<TextInput
					name="mainStack"
					label="name your main code language, please space the names, ex: 'Javascript Typescript NodeJS'"
					icon={<Code />}
					value={mainStack}
					onInputChange={(v) => setMainStack(v)}
					required={false}
				/>
				<ImageInput
					name="homeBackgroundImg"
					label="you may upload a background image for your home section"
					icon={<Wallpaper />}
					value={homeBackgroundImg}
					onInput={(v) => setHomeBackgroundImg(v)}
					required={false}
				/>
				<Styled.ContainerHeading>
					<Heading as="h3" size="small" color="tertiary">
						About Section
					</Heading>
					<Person3 />
				</Styled.ContainerHeading>
			</Form>
		</Styled.Wrapper>
	);
};

export default PortfolioCreationTemplate;
