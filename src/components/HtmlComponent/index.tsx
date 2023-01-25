import Prism from "prismjs";
import * as Styled from "./styles";
import { PrismWrapper } from "./prism-vscode-dark";
import { useEffect } from "react";

export type HtmlComponentProps = {
	html: string;
};

const HtmlComponent = ({ html }: HtmlComponentProps) => {
	useEffect(() => {
		let removeAds = null;
		if (typeof window !== "undefined") {
			Prism.highlightAll();

			removeAds = setTimeout(() => {
				document
					.querySelectorAll("iframe[src*=ads]")
					.forEach((el) => el.remove());
			}, 1000);
		}

		return () => clearTimeout(removeAds);
	}, []);

	return (
		<PrismWrapper>
			<Styled.Container dangerouslySetInnerHTML={{ __html: html }} />
		</PrismWrapper>
	);
};

export default HtmlComponent;
