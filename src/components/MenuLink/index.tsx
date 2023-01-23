// styles
import Link from 'next/link';
import * as Styled from './styles';

// types
export type MenuLinkProps = {
	children: React.ReactNode;
	link: string;
	newTab?: boolean;
};

const MenuLink = ({ children, link, newTab = false }: MenuLinkProps) => {
	const target = newTab ? "_blank" : "_self";
	const hostname = location.hostname;
	const rel = link.includes(hostname) || link.match(/^[\/#]/) ? "internal" : "external";
	const nextLink = link.match(/^\//) ? true : false;

	if (nextLink) return (
		<Link href={link} legacyBehavior passHref>
			<Styled.Link target={target} rel={rel}>
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
