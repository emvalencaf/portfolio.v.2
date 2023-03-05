import { Button } from "../../components/Button/styles";
import styled, { css, DefaultTheme } from "styled-components";

type AlertProps = {
	theme: DefaultTheme;
	isSuccess?: boolean;
	visible?: boolean;
};
export const Wrapper = styled.div`
	${({ theme }) => css`
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background-color: ${theme.colors.tertiary};
		padding: ${theme.spacings.small};

		& textarea {
			resize: none;
		}
	`}
`;

export const Alert = styled.div<AlertProps>`
	${({ theme, isSuccess = false, visible = false }) => css`
		position: fixed;
		display: ${visible ? "flex" : "none"};
		top: 0;
		left: 0;
		right: 0;
		align-items: center;
		justify-content: center;
		color: ${theme.colors.quaternary};
		background-color: ${isSuccess
			? theme.colors.success
			: theme.colors.warning};
		padding: ${theme.spacings.small};
		border-radius: 0 0 0.4rem 0.4rem;
		z-index: ${theme.layers.layer7};
		transition: all ${theme.transitions.slow} ease-in-out;
		gap: ${theme.spacings.tiny};

		& a {
			color: ${theme.colors.quaternary};
		}

		& ${Button} {
			position: fixed;
			align-self: flex-end;
			padding: 0px;
			margin: 0px;
			top: 0.2rem;
			right: 0.2rem;
			> svg {
				width: 2rem;
				height: 2rem;
			}
		}
	`}
`;
