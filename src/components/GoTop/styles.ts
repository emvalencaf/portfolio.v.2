import styled, { css, DefaultTheme } from "styled-components";
import { GoTopProps } from ".";

const goTopSizes = {
	small: (theme: DefaultTheme) => css`
		height: ${theme.fonts.sizes.large};
		width: ${theme.fonts.sizes.large};
	`,
	medium: (theme: DefaultTheme) => css`
		height: ${theme.fonts.sizes.xlarge};
		width: ${theme.fonts.sizes.xlarge};
	`,
	big: (theme: DefaultTheme) => css`
		height: ${theme.fonts.sizes.huge};
		width: ${theme.fonts.sizes.huge};
	`,
};

export const Container = styled.a<GoTopProps>`
	${({ theme, sizes }) => css`
		position: fixed;
		background: ${theme.colors.quaternary};
		color: ${theme.colors.secondary};
		display: flex;
		align-items: center;
		justify-content: center;
		width: ${goTopSizes[sizes](theme)};
		height: ${goTopSizes[sizes](theme)};
		bottom: 2rem;
		right: 2rem;
		border-radius: 100%;
		z-index: ${theme.layers.layer6};

		svg {
			transition: all ${theme.transitions.normal} ease-in-out;
		}

		&:hover {
			& svg {
				color:${theme.colors.deepWhite};
				filter: brightness(220%)
				transform: scale(1.2);
				opacity: 0.8;
			}
		}
	`}
`;
