import styled, { css, DefaultTheme } from "styled-components";
import { SideBarProps } from ".";

const logoSizes = {
	small: (theme: DefaultTheme) => css`
		height: ${theme.fonts.sizes.medium};
		width: ${theme.fonts.sizes.medium};
	`,
	medium: (theme: DefaultTheme) => css`
		height: ${theme.fonts.sizes.large};
		width: ${theme.fonts.sizes.large};
	`,
	big: (theme: DefaultTheme) => css`
		height: ${theme.fonts.sizes.xlarge};
		width: ${theme.fonts.sizes.xlarge};
	`,
};

export const Wrapper = styled.div`
	${({ theme }) => css`
		@media ${theme.media.lteMedium} {
			display: none;
			appearance: none;
			opacity: 0;
		}

		position: fixed;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		bottom: 25rem;
		left: 2rem;
		z-index: ${theme.layers.layer6};
	`}
`;
export const SocialMediaLink = styled.a<SideBarProps>`
	${({ theme, sizes }) => css`
		color: ${theme.colors.secondary};

		& svg,
		& {
			color: ${theme.colors.secondary};
			${logoSizes[sizes](theme)}
			transition: all ${theme.transitions.fast} ease-in-out;
		}

		& svg:hover {
			color: ${theme.colors.deepWhite};
			transform: scale(1.2);

			filter: drop-shadow(0 0 0.75rem ${theme.colors.tertiary});
		}
	`}
`;

export const VerticalLine = styled.div`
	${({ theme }) => css`
		content: "";
		width: 1px;
		height: 100px;
		border: 1px solid ${theme.colors.secondary};
		margin: 20px;
		display: inline-block;
	`}
`;
