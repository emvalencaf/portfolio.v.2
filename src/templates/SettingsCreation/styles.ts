import styled, { css } from "styled-components";
import { Form } from "../../components/FormLogin/styles";

export const Wrapper = styled.div`
	${({ theme }) => css`
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: ${theme.colors.tertiary};
		transition: all ${theme.transitions.slowest} ease-in-out;

		& ${Form} {
			display: flex;
			flex-direction: column;
			width: 100%;
			max-width: 600px;
			margin: ${theme.spacings.small};
			gap: ${theme.spacings.small};
		}
	`}
`;
