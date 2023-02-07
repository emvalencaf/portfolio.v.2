import * as Styled from "./styles";

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

// mock
import mock from "./mock";

const Home = () => {
  return (
    <Styled.Wrapper>
		<GoTop />
    	<Header {...mock.header} />
		<SideBar {...mock.main.sideBar} sizes="big" />
		<SectionHome {...mock.main.sections.home} />
		<SectionAbout {...mock.main.sections.about} />
		<SectionSkills {...mock.main.sections.skills} />
		<SectionProject {...mock.main.sections.projects} />
    </Styled.Wrapper>
  );
};

export default Home;
