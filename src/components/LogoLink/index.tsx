// components
import Link from "next/link";

// styles
import * as Styled from "./styles";
import { DoubleArrow } from "@styled-icons/material-outlined";

// types
export type LogoLinkProps = {
	link: string;
	altText: string;
	srcImg?: string;
	newTab?: boolean;
};

const LogoLink = ({
	link,
	srcImg = "",
	altText,
	newTab = false,
}: LogoLinkProps) => {
	const target = newTab ? "_blank" : "_self";
	const hostname = process.env.NEXTAUTH_URL;
	const rel =
		// eslint-disable-next-line no-useless-escape
		link.includes(hostname) || link.match(/^[\/\#]/)
			? "internal"
			: "external";
	const nextLink = link.match(/^\//) ? true : false;

	if (nextLink)
		return (
			<Link href={link} legacyBehavior passHref>
				<Styled.Link target={target} rel={rel} aria-label="logo link">
					{srcImg ? (
						<img src={srcImg} alt={altText} />
					) : (
						<Styled.Logo>
							<DoubleArrow />
							{altText}
							<DoubleArrow />
						</Styled.Logo>
					)}
				</Styled.Link>
			</Link>
		);

	return (
		<Styled.Link target={target} rel={rel} aria-label="logo link">
			{srcImg ? (
				<img src={srcImg} alt={altText} />
			) : (
				<Styled.Logo>
					<DoubleArrow />
					{altText}
					<DoubleArrow />
				</Styled.Logo>
			)}
		</Styled.Link>
	);
};

export default LogoLink;
