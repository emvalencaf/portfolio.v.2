import styled, { css } from "styled-components";

export const Wrapper = styled.div`
	${({ theme}) => css`
		color: ${theme.colors.secondary};
		background-color: ${theme.colors.primary};
	`}
`;
