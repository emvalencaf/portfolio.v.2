import styled, { css, DefaultTheme } from 'styled-components';
import { SocialMediaProps } from '.';

const logoSizes = {
	small: (theme: DefaultTheme) => css`
		height: ${theme.font.sizes.medium};
		width: ${theme.font.sizes.medium};
	`,
	medium: (theme: DefaultTheme) => css`
		height: ${theme.font.sizes.large};
		width: ${theme.font.sizes.large};
	`,
	big: (theme: DefaultTheme) => css`
		height: ${theme.font.sizes.xlarge};
		width: ${theme.font.sizes.xlarge};
	`,
};

export const Wrapper = styled.div<SocialMediaProps>`
	${({ theme, sizes }) => css`
		& svg, & a {
			color: ${theme.colors.primaryColor};
			${logoSizes[sizes](theme)}
			transition: all 350ms ease-in-out;
		}

		&  svg:hover {
			transform: scale(1.2);
			opacity: 0.8;
		}
	`}
`;

export const SocialMediaLink = styled.a`
	${( {theme} ) => css`
		color: ${theme.colors.primaryColor};
	`}
`;
