// component
import Link from "next/link";

// styles
import * as Styled from "./styles";

// types
export type MenuLinkProps = {
	children: React.ReactNode;
	icon?: React.ReactNode;
	link: string;
	newTab?: boolean;
};

const MenuLink = ({ children, link, icon, newTab = false }: MenuLinkProps) => {
	const target = newTab ? "_blank" : "_self";
	const hostname = process.env.NEXTAUTH_URL;
	const rel =
		// eslint-disable-next-line no-useless-escape
		link.includes(hostname) || link.match(/^[\/#]/)
			? "internal"
			: "external";
	const nextLink = link.match(/^\//) ? true : false;

	if (nextLink)
		return (
			<Link href={link} legacyBehavior passHref>
				<Styled.Link target={target} rel={rel}>
					{!!icon && icon}
					<span>{children}</span>
				</Styled.Link>
			</Link>
		);

	return (
		<Styled.Link href={link} target={target} rel={rel}>
			{!!icon && icon}
			<span>{children}</span>
		</Styled.Link>
	);
};

export default MenuLink;
