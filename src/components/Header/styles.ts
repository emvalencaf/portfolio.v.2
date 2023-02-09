import styled, { css, DefaultTheme } from 'styled-components';

// imported styled-components
import { Link as LogoLinkContainer } from "../LogoLink/styles";

// types
type ContainerProps = {
	visible: boolean;
}

// function
const visibileMenu = (theme: DefaultTheme) => css`
	@media ${theme.media.lteMedium} {
		opacity: 1;
		visibility: visible;
		appearance: inherit;
		display: inherit;
	}
	opacity: 0;
	visibility: hidden;
	display: none;
	appearance: none;
`;

export const Wrapper = styled.header<ContainerProps>`
	${({ theme, visible }) => css`
		@media ${theme.media.lteMedium} {
			display: block;
			background-color: transparent;
			border: none;
			& ${LogoLinkContainer} {
				display: none;
				appearance: none;
				opacity: 0;
			}
		}
		width: 100%;
		position: fixed;
		left: 0;
		top: 0;
		right: 0;
		display: flex;
		align-self: center;
		justify-content: space-between;
		color: ${theme.colors.secondary};
		padding-left: ${theme.spacings.medium};
		padding-right: ${theme.spacings.medium};
		background-color: ${theme.colors.quaternary};
		border: 1px solid ${theme.colors.primary};
		z-index: ${theme.layers.layer6};
		opacity: 1;
		& ul {
			padding: 0;
		}

		${!visible && visibileMenu(theme)}
	`}
`;
