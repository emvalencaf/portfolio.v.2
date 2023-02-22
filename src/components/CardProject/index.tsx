// hooks
import { useState } from "react";

// components
import Heading from "../Heading";
import Link from "next/link";

// icons
import {
	Github,
	Javascript,
	Typescript,
	Html5,
	Css3,
	Python,
	Java,
	CPlusPlus,
	Php,
} from "@styled-icons/boxicons-logos";
import { Csharp } from "@styled-icons/simple-icons";
import { Movie, SwapHorizontalCircle } from "@styled-icons/material-outlined";
import { Link as LinkIcon } from "@styled-icons/material-outlined";

// styles
import * as Styled from "./styles";

// types
import { Project } from "../../shared-types/project";
export type CardProjectProps = Project;

// data
const langIcons = {
	javascript: <Javascript />,
	typescript: <Typescript />,
	css: <Css3 />,
	html: <Html5 />,
	python: <Python />,
	java: <Java />,
	cplus: <CPlusPlus />,
	csharp: <Csharp />,
	php: <Php />,
};

const CardProject = ({
	_id,
	title,
	mainLang = "javascript",
	srcImg = "",
	resume = "",
	urlDemo,
	urlRepository,
}: CardProjectProps) => {
	// states
	const [showResume, setShowResume] = useState(false);
	// handle click events
	const handleClick = () => {
		setShowResume((s) => !s);
	};

	return (
		<Styled.Wrapper>
			<Styled.HeaderCardContainer>
				{langIcons[`${mainLang}`]}
				<Heading as="h3" size="small" uppercase={true}>
					{title}
				</Heading>
				<span>
					<SwapHorizontalCircle onClick={handleClick} />
				</span>
			</Styled.HeaderCardContainer>
			{showResume ? (
				<Styled.ContentContainer>
					<p>{resume}</p>
					<Link href={`/project/${_id}`} passHref legacyBehavior>
						<a target="_self" rel="internal">
							<LinkIcon />
							Veja os detalhes
						</a>
					</Link>
				</Styled.ContentContainer>
			) : (
				<Styled.PictureContainer>
					{!!srcImg && (
						<img alt={`project picture ${title}`} src={srcImg} />
					)}
				</Styled.PictureContainer>
			)}
			<Styled.ButtonsContainer>
				<Link href={urlDemo} legacyBehavior passHref>
					<a rel="external" target="_blank">
						<Movie />
						Demo
					</a>
				</Link>
				<Link href={urlRepository} legacyBehavior passHref>
					<a rel="external" target="_blank">
						<Github />
						GitHub
					</a>
				</Link>
			</Styled.ButtonsContainer>
		</Styled.Wrapper>
	);
};

export default CardProject;
