// hooks
import { useEffect, useState } from "react";

// components
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import SideBar from "../../components/SideBar";
import SectionHome, { SectionHomeProps } from "../../components/SectionHome";
import GoTop from "../../components/GoTop";
import SectionAbout, { SectionAboutProps } from "../../components/SectionAbout";
import SectionSkills, {
	SectionSkillsProps,
} from "../../components/SectionSkills";
import SectionProject, {
	SectionProjectProps,
} from "../../components/SectionProjects";

// type

export type Sections = {
	home: SectionHomeProps;
	about: SectionAboutProps;
	skills: SectionSkillsProps;
	projects: SectionProjectProps;
};

export type HomeProps = {
	settings: Settings;
	content: PortfolioContent;
};

// styles
import * as Styled from "./styles";

// types
import { Settings } from "../../shared-types/settings";
import { PortfolioContent } from "../../shared-types/portfolio";

const HomeTemplate = ({ content, settings }: HomeProps) => {
	// states
	const [lastScrollYCoords, setLastScrollYCoords] = useState<number>(0);
	const [visibleHeader, setVisibleHeader] = useState<boolean>(true);

	console.log(content);
	console.log(settings);

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

	return (
		<Styled.Wrapper>
			<GoTop />
			{settings && (
				<>
					<Header
						logo={settings.logo}
						menuLinks={settings.menu.map((menuLink) => ({
							...menuLink,
							link: `#${
								menuLink.link === "home"
									? ""
									: `${menuLink.link}`
							}`,
						}))}
						visible={visibleHeader}
					/>

					<SideBar {...settings.socialMedia} sizes="big" />
				</>
			)}
			{content.sections.length >= 1 &&
				content.sections.map((section) => {
					if (section.title === "home")
						return (
							<SectionHome
								id="#"
								backgroundImg={section.backgroundImg}
								ownerName={section.owner}
								mainStack={section.mainStack}
								ocupation={section.ocupation}
								icon={section.icon}
							/>
						);

					if (section.title === "about")
						return (
							<SectionAbout
								id="about"
								biosData={section.biosData}
								workData={section.workData}
								educationData={section.educationData}
								urlDownload={section.urlDownload}
							/>
						);

					if (section.title === "skills")
						return (
							<SectionSkills id="skills" techs={section.techs} />
						);

					if (section.title === "projects")
						return (
							<SectionProject
								id="projects"
								projects={section.projects}
							/>
						);
				})}
			{settings && (
				<Footer
					{...settings.socialMedia}
					ownerName={settings.owner.name}
					year={settings.createdAt.toString()}
					sizes="big"
				/>
			)}
		</Styled.Wrapper>
	);
};

export default HomeTemplate;
