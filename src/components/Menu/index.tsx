// hooks
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

// icons
import { Home, Login, Menu as MenuIcon, OutdoorGrill } from "@styled-icons/material-outlined";
import { Close as CloseIcon } from "@styled-icons/material-outlined";
import { Dashboard as Admin } from "@styled-icons/material-outlined";
import { Edit as EditPage } from "@styled-icons/material-outlined";
// components
import MenuLink, { MenuLinkProps } from '../MenuLink';

// styles
import * as Styled from './styles';

// types
export type MenuProps = {
	menuLinks?: MenuLinkProps[];
};

const Menu = ({ menuLinks = [] }: MenuProps) => {
	// router
	const router = useRouter();

	// states
	const [visible, setVisible] = useState(false);
	const { data: session } = useSession();
	console.log(router.basePath);
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
									"/"
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
										<MenuLink
											icon={<OutdoorGrill />}
											newTab={false}
											link={`/admin/logout`}
										>
											logout
										</MenuLink>
									</li>
								</>
							)}
						</>
					)}
					{router.pathname.match(/admin/) && (
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
