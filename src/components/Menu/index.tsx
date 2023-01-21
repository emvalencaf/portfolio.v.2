// styles
import Link from 'next/link';
import MenuLink, { MenuLinkProps } from '../MenuLink';
import * as Styled from './styles';

// types
export type MenuProps = {
	menuLinks?: MenuLinkProps[];
};

const Menu = ({ menuLinks = [] }: MenuProps) => {
	return (
		<Styled.Nav>
			<ul>
				{menuLinks.length >= 1 ? menuLinks.map((link) => (
					<li key={link.link}>
						<MenuLink link={link.link} newTab={link.newTab}>{link.children}</MenuLink>
					</li>
				)) : (
					<li>
						<MenuLink link="/">
							Home
						</MenuLink>
					</li>
				)}
			</ul>
		</Styled.Nav>
	);
};

export default Menu;
