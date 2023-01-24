// components
import LogoLink, { LogoLinkProps } from '../LogoLink';
import Menu, { MenuProps } from '../Menu';

// styles
import * as Styled from './styles';

// types
export type HeaderProps = MenuProps & {
	logo: LogoLinkProps;
	visibility: boolean;
};

const Header = ({ menuLinks = [], logo, visibility }: HeaderProps) => {
	return (
		<Styled.Wrapper visibility={visibility}>
			<LogoLink {...logo} />
			<Menu menuLinks={menuLinks} />
		</Styled.Wrapper>
	);
};

export default Header;
