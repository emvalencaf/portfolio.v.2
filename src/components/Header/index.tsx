// components
import LogoLink, { LogoLinkProps } from "../LogoLink";
import Menu, { MenuProps } from "../Menu";

// styles
import * as Styled from "./styles";

// types
export type HeaderProps = MenuProps & {
	logo: LogoLinkProps;
	visible?: boolean;
};

const Header = ({ menuLinks = [], logo, visible = true }: HeaderProps) => {
	return (
		<Styled.Wrapper visible={visible}>
			<LogoLink {...logo} />
			<Menu menuLinks={menuLinks} />
		</Styled.Wrapper>
	);
};

export default Header;
