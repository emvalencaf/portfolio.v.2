import styled, { css, DefaultTheme } from 'styled-components';
import { SideBarProps } from '.';

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
		z-index: 6;
	`}
`;
export const SocialMediaLink = styled.a<SideBarProps>`
	${({ theme, sizes }) => css`
		color: ${theme.colors.primary};

		& svg, & {
			color: inherit;
			${logoSizes[sizes](theme)}
			transition: all 350ms ease-in-out;
		}

		&  svg:hover {
			transform: scale(1.2);
			opacity: 0.8;
		}
	`}
`;

export const VerticalLine = styled.div`
	${({ theme }) => css`
		content: "";
		width: 1px;
		height: 100px;
		border: 1px solid ${theme.colors.primary};
		margin: 20px;
		display: inline-block;
	`}
`;
