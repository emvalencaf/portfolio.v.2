import styled, { css } from "styled-components";
import { Wrapper as SectionContainer } from "../../components/Section/styles";

export const Wrapper = styled.div`
	${({ theme}) => css`

		color: ${theme.colors.secondary};
		background-color: ${theme.colors.primary};
		height: 100%;

	`}
`;
