import styled, { css, DefaultTheme } from "styled-components";
import { HeadingProps } from ".";

const titleSize = {
	small: (theme: DefaultTheme, size: string) => css`
		font-size: ${theme.font.sizes.medium};
		${mediaFont(theme, size)};
	`,
	medium: (theme: DefaultTheme, size: string) => css`
		font-size: ${theme.font.sizes.large};
		${mediaFont(theme, size)};
	`,
	big: (theme: DefaultTheme, size: string) => css`
		font-size: ${theme.font.sizes.xlarge};
		${mediaFont(theme, size)};
	`,
	huge: (theme: DefaultTheme, size: string) => css`
		font-size: ${theme.font.sizes.xhuge};
		${mediaFont(theme, size)};
	`,
};

const mediaFont = (theme: DefaultTheme, size: string) => {
	const fontSize = {
		lteSmall: {
			huge: theme.font.sizes.large,
			big: theme.font.sizes.medium,
			medium: theme.font.sizes.small,
			small: theme.font.sizes.xsmall,
		},
		lteMedium: {
			huge: theme.font.sizes.xlarge,
			big: theme.font.sizes.large,
			medium: theme.font.sizes.medium,
			small: theme.font.sizes.small,
		},
	}
	return css`
	@media ${theme.media.lteSmall} {
		font-size: ${fontSize.lteSmall[size]};
	}
	@media ${theme.media.lteMedium} {
		font-size: ${fontSize.lteMedium[size]};
	}
`
};

const titleCase = (uppercase: boolean) => css`
	text-transform: ${uppercase ? "uppercase" : "none"};
`;

export const Title = styled.h1<HeadingProps>`
	${({ theme, colorDark, size, uppercase }) => css`
		color: ${colorDark ? theme.colors.primary : theme.colors.white};
		line-height: 1.2;
		${titleSize[size](theme, size)};
		${titleCase(uppercase)};
	`}
`;
