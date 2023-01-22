import * as Styled from "./styles";
import { KeyboardArrowUp } from "@styled-icons/material-outlined";

export type GoTopProps = {
	sizes?: "small" | "medium" | "big";
}

const GoTop = ({ sizes = "medium" }:GoTopProps) => {
	return (
		<Styled.Container sizes={sizes} href="#" aria-label="Go to top" title="Go to top">
			<KeyboardArrowUp />
		</Styled.Container>
	);
};

export default GoTop;
