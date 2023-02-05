import styled, { css } from 'styled-components';

// imported styled-components
import { Link as LogoLinkContainer } from "../LogoLink/styles";

// types
type ContainerProps = {
	visible: boolean;
}

// function
const visibileMenu = () => css`
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
		position: fixed;
		left: 0;
		top: 0;
		right: 0;
		display: flex;
		align-self: center;
		justify-content: space-between;
		padding-left: ${theme.spacings.medium};
		padding-right: ${theme.spacings.medium};
		background-color: ${theme.colors.gray5};
		border: 1px solid ${theme.colors.gray5};
		border-bottom-left-radius: ${theme.fonts.sizes.small};
		border-bottom-right-radius: ${theme.fonts.sizes.small};
		opacity: 1;
		& ul {
			padding: 0;
		}

		${!visible && visibileMenu()}
	`}
`;
