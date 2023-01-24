import * as Styled from "./styles";

// components
import Mock from "../../components/Mock";
import Header from "../../components/Header";
import Section from "../../components/Section";
import SideBar, { SideBarProps } from "../../components/SideBar";

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
		},
		sideBar: SideBarProps;
	}
}

// mock
import mock from "./mock";
import { MenuLinkProps } from "../../components/MenuLink";
import SectionHome, { SectionHomeProps } from "../../components/SectionHome";

const Home = ({ header }) => {
  return (
    <Styled.Wrapper>
      <Header {...mock.header} />
	  <SideBar />
    </Styled.Wrapper>
  );
};

export default Home;
