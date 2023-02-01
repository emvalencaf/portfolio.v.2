import * as Styled from "./styles";

// components
import Mock from "../../components/Mock";
import Header from "../../components/Header";
import Section from "../../components/Section";
import SideBar, { SideBarProps } from "../../components/SideBar";
import SectionHome, { SectionHomeProps } from "../../components/SectionHome";
import SectionAbout, { SectionAboutProps } from "../../components/SectionAbout";

// type
import { LogoLinkProps } from "../../components/LogoLink";
export type HomeProps = {
	header: {
		logo: LogoLinkProps;
		menuLinks: MenuLinkProps[];
	},
	main: {
		sections: {
			home: SectionHomeProps;
			about: SectionAboutProps;
		}
		sideBar: SideBarProps;
	}
}

// mock
import mock from "./mock";
import { MenuLinkProps } from "../../components/MenuLink";

const Home = () => {
  return (
    <Styled.Wrapper>
      <Header {...mock.header} />
	  <SideBar {...mock.main.sideBar} />
	  <SectionHome {...mock.main.sections.home} />
	  <SectionAbout {...mock.main.sections.about} />
    </Styled.Wrapper>
  );
};

export default Home;
