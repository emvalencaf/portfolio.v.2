// components
import LogoLink, { LogoLinkProps } from "../LogoLink";
import Menu, { MenuProps } from "../Menu";

// styles
import * as Styled from "./styles";

// types
export type HeaderProps = MenuProps & {
	logo: LogoLinkProps;
	visible?: boolean;
	colorIcon?:
		| "primary"
		| "secondary"
		| "tertiary"
		| "quaternary"
		| "quinary"
		| "senary";
};

const Header = ({
	menuLinks = [],
	logo,
	visible = true,
	colorIcon = "secondary",
}: HeaderProps) => {
	return (
		<Styled.Wrapper visible={visible}>
			<LogoLink {...logo} />
			<Menu menuLinks={menuLinks} colorIcon={colorIcon} />
		</Styled.Wrapper>
	);
};

export default Header;
