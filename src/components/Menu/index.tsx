// hooks
import { useState } from "react";

// icons
import { Menu as MenuIcon } from "@styled-icons/material-outlined";
import { Close as CloseIcon } from "@styled-icons/material-outlined";

// components
import MenuLink, { MenuLinkProps } from '../MenuLink';

// styles
import * as Styled from './styles';

// types
export type MenuProps = {
	menuLinks?: MenuLinkProps[];
};

const Menu = ({ menuLinks = [] }: MenuProps) => {
	const [visible, setVisible] = useState(false);

	return (
		<>
			<Styled.Button
				onClick={() => setVisible(true)}
				visible={visible}
				aria-label="Open/Close menu"
			>
				{visible ? (
					<CloseIcon aria-label="Close menu" />
					) : (
					<MenuIcon aria-label="Open menu" />
				)}
			</Styled.Button>
			<Styled.Nav onClick={() => setVisible(false)} visible={visible}>
				<ul>
					{menuLinks.length >= 1 ? menuLinks.map((link) => (
						<li key={link.link}>
							<MenuLink link={link.link} newTab={link.newTab} icon={link.icon}>{link.children}</MenuLink>
						</li>
					)) : (
						<li>
							<MenuLink link="#">
								Home
							</MenuLink>
						</li>
					)}
				</ul>
			</Styled.Nav>
		</>
	);
};

export default Menu;
