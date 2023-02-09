// hooks
import { useEffect, useRef, useState } from "react";

// components
import Header from "../../components/Header";
import SideBar, { SideBarProps } from "../../components/SideBar";
import SectionHome, { SectionHomeProps } from "../../components/SectionHome";
import GoTop from "../../components/GoTop";
import SectionAbout, { SectionAboutProps } from "../../components/SectionAbout";
import SectionSkills, { SectionSkillsProps } from "../../components/SectionSkills";
import SectionProject, { SectionProjectProps } from "../../components/SectionProjects";

// type
import { LogoLinkProps } from "../../components/LogoLink";
import { MenuLinkProps } from "../../components/MenuLink";

export type Sections = {
	home: SectionHomeProps;
	about: SectionAboutProps;
	skills: SectionSkillsProps;
	projects: SectionProjectProps;
};

export type HomeProps = {
	header: {
		logo: LogoLinkProps;
		menuLinks: MenuLinkProps[];
	},
	main: {
		sections: Sections;
		sideBar: SideBarProps;
	},
	footer: FooterProps;
}

// styles
import * as Styled from "./styles";

// mock
import mock from "./mock";
import Footer, { FooterProps } from "../../components/Footer";

const HomeTemplate = () => {
	// states
	const [ lastScrollYCoords, setLastScrollYCoords ] = useState<number>(0);
	const [ visibleHeader, setVisibleHeader] = useState<boolean>(true);

	// useEffect
	useEffect(() => {

		const handleHiddenHeader = () => {
			lastScrollYCoords < window.scrollY ?
				setVisibleHeader(false):
				setVisibleHeader(true);

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
			<Header {...mock.header} visible={visibleHeader} />
			<SideBar {...mock.main.sideBar} sizes="big" />
			<SectionHome {...mock.main.sections.home} />
			<SectionAbout {...mock.main.sections.about} />
			<SectionSkills {...mock.main.sections.skills} />
			<SectionProject {...mock.main.sections.projects} />
			<Footer {...mock.footer} />
		</Styled.Wrapper>
	);
};

export default HomeTemplate;
