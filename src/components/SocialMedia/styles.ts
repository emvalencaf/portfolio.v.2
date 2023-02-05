import styled, { css, DefaultTheme } from 'styled-components';
import { SocialMediaProps } from '.';

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

export const Wrapper = styled.div<SocialMediaProps>`
	${({ theme, sizes }) => css`
		& svg, & a {
			color: ${theme.colors.primary};
			${logoSizes[sizes](theme)}
			transition: all ${theme.transitions.fast} ease-in-out;
		}

		&  svg:hover {
			transform: scale(1.2);
			opacity: 0.8;
		}
	`}
`;

export const SocialMediaLink = styled.a`
	${( {theme} ) => css`
		color: ${theme.colors.primary};
	`}
`;
