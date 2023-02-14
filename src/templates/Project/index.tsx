// components
import GoTop from '../../components/GoTop';
import Header from '../../components/Header';
import Heading from '../../components/Heading';
import HtmlComponent from '../../components/HtmlComponent';

// icons
import { Javascript, Css3, Html5, Java, Php, Python } from '@styled-icons/boxicons-logos';
import { Cplusplus, Csharp } from '@styled-icons/simple-icons';

// styles
import * as Styled from './styles';

// types
import { Project } from '../../shared-types/project';
import { useEffect, useState } from 'react';
import DateStringFormating from '../../utils/dateString';
export type ProjectTemplateProps = Project;

const ProjectTemplate = ({
	_id,
	title,
	resume,
	description,
	mainLang,
	srcImg,
	urlDemo,
	urlRepository,
	owner,
	createdAt,
	updatedAt,
}: ProjectTemplateProps) => {
	// states
	const [lastScrollYCoords, setLastScrollYCoords] = useState<number>(0);
	const [visibleHeader, setVisibleHeader] = useState<boolean>(true);

	// useEffect
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

	// pick-up lang icon
	const pickUpLangIcon = {
		javascript: <Javascript />,
		java: <Java />,
		php: <Php />,
		csharp: <Csharp />,
		css: <Css3 />,
		html: <Html5 />,
		cplus: <Cplusplus />,
		python: <Python />

	}

	return (
		<Styled.Wrapper>
			<GoTop />
			<Header menuLinks={[]} logo={{
				altText: "dashboard",
				link: "/admin/"
			}} visible={visibleHeader} />
			<section>
				<article>
					<Styled.ArticleHeader>
						<Heading as="h1" size='big' uppercase>
							{title}
						</Heading>
						<Styled.ArticleMeta>
							<span>
								{owner.name}
							</span>
							<span>{DateStringFormating.getFullDateString(createdAt)}
							</span>

						</Styled.ArticleMeta>
						{mainLang && pickUpLangIcon[mainLang]}
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum vel quod in iste dolore, beatae, mollitia modi consectetur eos accusantium incidunt, dignissimos quae nulla sit aspernatur! Quisquam debitis vitae magnam.
							Lorem ipsum, dolor
						</p>
					</Styled.ArticleHeader>
					<Styled.ArticleContent>
						<HtmlComponent
							html={description}
						/>
					</Styled.ArticleContent>
					{updatedAt &&
						<Styled.ArticleFooter>
							<p>
								Last update at {DateStringFormating.getFullDateString(updatedAt)}
							</p>
						</Styled.ArticleFooter>
					}
				</article>
			</section>
		</Styled.Wrapper>
	);
};

export default ProjectTemplate;
