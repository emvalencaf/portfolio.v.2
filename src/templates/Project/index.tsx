// components
import GoTop from "../../components/GoTop";
import Header from "../../components/Header";
import Heading from "../../components/Heading";
import HtmlComponent from "../../components/HtmlComponent";

// icons
import {
	Javascript,
	Css3,
	Html5,
	Java,
	Php,
	Python,
	Typescript,
} from "@styled-icons/boxicons-logos";
import { Cplusplus, Csharp } from "@styled-icons/simple-icons";
import { Photo } from "@styled-icons/material-outlined";

// styles
import * as Styled from "./styles";

// types
import { useEffect, useState } from "react";
import DateStringFormating from "../../utils/dateString";
import { Settings } from "../../shared-types/settings";
import Section from "../../components/Section";
import SideBar from "../../components/SideBar";
import { Project } from "../../shared-types/project";
export type ProjectTemplateProps = {
	settings: Settings;
	content?: Project;
};

const ProjectTemplate = ({ settings, content }: ProjectTemplateProps) => {
	// states
	const [lastScrollYCoords, setLastScrollYCoords] = useState<number>(0);
	const [visibleHeader, setVisibleHeader] = useState<boolean>(true);
	const [hostname] = useState<string>(process.env.NEXT_PUBLIC_FRONTEND_URL);
	// useEffect
	useEffect(() => {
		const handleHiddenHeader = () => {
			lastScrollYCoords < window.scrollY
				? setVisibleHeader(false)
				: setVisibleHeader(true);

			setLastScrollYCoords(window.scrollY);
		};

		window.addEventListener("scroll", handleHiddenHeader);

		return () => {
			window.removeEventListener("scroll", handleHiddenHeader);
		};
	}, [lastScrollYCoords]);

	// pick-up lang icon
	const pickUpLangIcon = {
		javascript: <Javascript />,
		java: <Java />,
		typescript: <Typescript />,
		php: <Php />,
		csharp: <Csharp />,
		css: <Css3 />,
		html: <Html5 />,
		cplus: <Cplusplus />,
		python: <Python />,
	};

	return (
		<Styled.Wrapper>
			<GoTop />
			{settings && (
				<>
					<Header
						logo={settings.logo}
						menuLinks={settings.menu.map((menuLink) => ({
							...menuLink,
							link: `${hostname}/${
								menuLink.link === "home"
									? `#`
									: `#${menuLink.link}`
							}`,
						}))}
						visible={visibleHeader}
						colorIcon="secondary"
					/>

					<SideBar
						{...settings.socialMedia}
						sizes="big"
						color="quaternary"
					/>
				</>
			)}
			{content && (
				<>
					<Styled.ArticleHeader>
						<Heading as="h1" size="big" uppercase>
							{content.title}
						</Heading>
						<Styled.ArticleMeta>
							<span>{content.owner.name}</span>
							<span>
								{DateStringFormating.getFullDateString(
									content.createdAt
								)}
							</span>
						</Styled.ArticleMeta>
						{content.mainLang && pickUpLangIcon[content.mainLang]}
						<p>{content.resume}</p>
					</Styled.ArticleHeader>
					<Section id={content.title}>
						<Styled.ArticleContent>
							{content.srcImg && (
								<Styled.PictureContainer>
									{content.srcImg ? (
										<img
											src={`${content.srcImg}`}
											alt={`project picture`}
										/>
									) : (
										<Photo />
									)}
									<figcaption>
										Uma screenshot do projeto
									</figcaption>
								</Styled.PictureContainer>
							)}
							<HtmlComponent html={content.description} />
						</Styled.ArticleContent>
						{content.updatedAt && (
							<Styled.ArticleFooter>
								<p>
									Last update at
									{DateStringFormating.getFullDateString(
										content.updatedAt
									)}
								</p>
							</Styled.ArticleFooter>
						)}
					</Section>
				</>
			)}
		</Styled.Wrapper>
	);
};

export default ProjectTemplate;
