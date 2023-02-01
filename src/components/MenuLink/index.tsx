// component
import Link from 'next/link';

// config
import config from '../../config';

// styles
import * as Styled from './styles';

// types
export type MenuLinkProps = {
	children: React.ReactNode;
	icon?: React.ReactNode;
	link: string;
	newTab?: boolean;
};

const MenuLink = ({ children, link, icon, newTab = false }: MenuLinkProps) => {
	const target = newTab ? "_blank" : "_self";
	const { hostname } = config;
	const rel = link.includes(hostname) || link.match(/^[\/#]/) ? "internal" : "external";
	const nextLink = link.match(/^\//) ? true : false;

	if (nextLink) return (
		<Link href={link} legacyBehavior passHref>
			<Styled.Link target={target} rel={rel}>
				{icon}
				{children}
			</Styled.Link>
		</Link>
	);

	return (
		<Styled.Link href={link} target={target} rel={rel}>
			{children}
		</Styled.Link>
	)
};

export default MenuLink;
