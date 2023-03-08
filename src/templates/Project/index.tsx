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
export type ProjectTemplateProps = {
	title?: string;
	resume?: string;
	srcImg?: string;
	description?: string;
	mainLang?: string;
	owner?: string;
	createdAt?: string | number;
	updatedAt?: string | number;
};

const ProjectTemplate = ({
	title = "",
	resume = "",
	srcImg = "",
	description = "",
	mainLang = "",
	owner = "",
	createdAt = "",
	updatedAt = "",
}: ProjectTemplateProps) => {
	// states
	const [lastScrollYCoords, setLastScrollYCoords] = useState<number>(0);
	const [visibleHeader, setVisibleHeader] = useState<boolean>(true);

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
			<Header
				menuLinks={[]}
				logo={{
					altText: "dashboard",
					link: "/admin/",
				}}
				visible={visibleHeader}
			/>
			<section>
				<article>
					<Styled.ArticleHeader>
						<Heading as="h1" size="big" uppercase>
							{title}
						</Heading>
						<Styled.ArticleMeta>
							<span>{owner}</span>
							<span>
								{DateStringFormating.getFullDateString(
									createdAt
								)}
							</span>
						</Styled.ArticleMeta>
						{mainLang && pickUpLangIcon[mainLang]}
						<p>{resume}</p>
					</Styled.ArticleHeader>
					<Styled.ArticleContent>
						{srcImg && (
							<Styled.PictureContainer>
								{srcImg ? (
									<img
										src={`${srcImg}`}
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
						<HtmlComponent html={description} />
					</Styled.ArticleContent>
					{updatedAt && (
						<Styled.ArticleFooter>
							<p>
								Last update at
								{DateStringFormating.getFullDateString(
									updatedAt
								)}
							</p>
						</Styled.ArticleFooter>
					)}
				</article>
			</section>
		</Styled.Wrapper>
	);
};

export default ProjectTemplate;
