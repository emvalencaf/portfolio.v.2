import styled, { css, DefaultTheme } from "styled-components";
import { GoTopProps } from ".";


const goTopSizes = {
	small: (theme: DefaultTheme) => css`
		height: ${theme.font.sizes.large};
		width: ${theme.font.sizes.large};
	`,
	medium: (theme: DefaultTheme) => css`
		height: ${theme.font.sizes.xlarge};
		width: ${theme.font.sizes.xlarge};
	`,
	big: (theme: DefaultTheme) => css`
		height: ${theme.font.sizes.huge};
		width: ${theme.font.sizes.huge};
	`,
};

export const Container = styled.a<GoTopProps>`
	${({ theme, sizes}) => css`
		position: fixed;
		background: ${theme.colors.primaryColor};
		color: ${theme.colors.white};
		display: flex;
		align-items: center;
		justify-content: center;
		width: ${goTopSizes[sizes](theme)};
		height: ${goTopSizes[sizes](theme)};
		bottom: 2rem;
		right: 2rem;
		border-radius: 100%;
		z-index: 6;

		svg {
			transition: all 350ms ease-in-out;
		}

		&:hover {
			& svg {
				transform: scale(1.2);
				opacity: 0.8;
			}
		}
	`}
`;
