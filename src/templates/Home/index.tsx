// hooks
import { useState } from "react";

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
export type HomeProps = {
	header: {
		logo: LogoLinkProps;
		menuLinks: MenuLinkProps[];
	},
	main: {
		sections: {
			home: SectionHomeProps;
			about: SectionAboutProps;
			skills: SectionSkillsProps;
			projects: SectionProjectProps;
		};
		sideBar: SideBarProps;
	}
}

// styles
import * as Styled from "./styles";

// mock
import mock from "./mock";

const Home = () => {
	// states
	const [ lastScrollYCoords, setLastScrollYCoords ] = useState<number>(window.scrollY);
	const [ visibleHeader, setVisibleHeader] = useState<boolean>(true);

	// handle synthetic events
	const handleHiddenHeader = () => {

		lastScrollYCoords < window.scrollY?
			setVisibleHeader(false): setVisibleHeader(true);

		setLastScrollYCoords(window.scrollY);
	};

	window.addEventListener("scroll", handleHiddenHeader);

	return (
		<Styled.Wrapper>
			<GoTop />
			<Header {...mock.header} visible={visibleHeader} />
			<SideBar {...mock.main.sideBar} sizes="big" />
			<SectionHome {...mock.main.sections.home} />
			<SectionAbout {...mock.main.sections.about} />
			<SectionSkills {...mock.main.sections.skills} />
			<SectionProject {...mock.main.sections.projects} />
		</Styled.Wrapper>
	);
};

export default Home;
