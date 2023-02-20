// hooks
import { useState } from "react";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";

// icons
import { Home, Login, Menu as MenuIcon, Logout } from "@styled-icons/material-outlined";
import { Close as CloseIcon } from "@styled-icons/material-outlined";
import { Dashboard as Admin } from "@styled-icons/material-outlined";
import { Edit as EditPage } from "@styled-icons/material-outlined";
// components
import MenuLink, { MenuLinkProps } from '../MenuLink';

// styles
import * as Styled from './styles';

// types
import { Session } from "../../shared-types/session-nextauth";
export type MenuProps = {
	menuLinks?: MenuLinkProps[];
};

const Menu = ({ menuLinks = [] }: MenuProps) => {
	// router
	const router = useRouter();

	// states
	const [visible, setVisible] = useState(false);
	const { data } = useSession();
	const session: Session = data;

	// synthetic event handle
	const handleLogout = (event: React.MouseEvent<HTMLAnchorElement>) => {
		event.preventDefault();
		signOut({ redirect: true });
	};

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
							<MenuLink link={
								router.pathname.match(/admin/) ?
									"/admin/"
									: "#"
							} icon={<Home />}>
								Home
							</MenuLink>
						</li>
					)}
					{!!session && (
						<>
							<li>
								<MenuLink
									icon={<Admin />}
									newTab={true}
									link={`/admin/`}
								>
									dashboad
								</MenuLink>
							</li>
							{router.pathname.match(/admin/) && (
								<>
									<li>
										<MenuLink
											icon={<EditPage />}
											newTab={false}
											link={`/admin/edit-portfolio`}
										>
											editar portfólio
										</MenuLink>
									</li>
									<li>
										<Styled.LogoutButton onClick={handleLogout}>
											<Logout />
											<span>
												logout
											</span>
										</Styled.LogoutButton>
									</li>
								</>
							)}
						</>
					)}
					{(router.pathname.match(/admin/) && !!session === false) && (
						<li>
							<MenuLink
								icon={<Login />}
								newTab={false}
								link={`/admin/login`}
							>Login</MenuLink>
						</li>
					)}
				</ul>
			</Styled.Nav>
		</>
	);
};

export default Menu;
