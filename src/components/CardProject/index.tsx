// hooks
import { useContext, useState } from 'react';

// components
import Heading from '../Heading';

// icons
import { Github, Javascript, Typescript, Html5, Css3, Python, Java, CPlusPlus, Php } from '@styled-icons/boxicons-logos';
import { Csharp }  from "@styled-icons/simple-icons";
import { Movie, SwapHorizontalCircle } from '@styled-icons/material-outlined';
// styles
import * as Styled from './styles';
import Link from 'next/link';

// types
export type CardProjectProps = {
	title: string;
	mainLang: "javascript" | "typescript" | "html" | "css" | "python" | "java" | "cplus" | "csharp" | "php";
	description: string;
	srcImg?: string;
	urlDemo: string;
	urlRepository: string;
};

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
	title,
	mainLang = "javascript",
	srcImg = "",
	description = "",
	urlDemo,
	urlRepository,
}: CardProjectProps) => {
	// states
	const [ showDescription, setShowDescription ] = useState(false);
	// handle click events
	const handleClick = () => {
		setShowDescription((s) => !s);
	};

	return (
		<Styled.Wrapper>
			<Styled.HeaderCardContainer>
				{
					langIcons[`${mainLang}`]
				}
				<Heading as="h3" size="small" uppercase={true}>
					{title}
				</Heading>
				<span>
					<SwapHorizontalCircle onClick={handleClick} />
				</span>
			</Styled.HeaderCardContainer>
			{ showDescription ? (
				<Styled.ContentContainer>
					{description}
				</Styled.ContentContainer>
			): (
				<Styled.PictureContainer>
					{!!srcImg &&
						<img alt={`project picture ${title}`} src={srcImg} />
					}
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
