import styled, { css } from 'styled-components';

// imported styled-components
import { Link as LogoLinkContainer } from "../LogoLink/styles";

// types
type ContainerProps = {
	visibility: boolean;
}

// function
const visibileMenu = () => css`
	opacity: 0;
	visibility: hidden;
	display: none;
	appearance: none;
`;

export const Wrapper = styled.div<ContainerProps>`
	${({ theme, visibility }) => css`
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
		background-color: ${theme.colors.mediumGray};
		border: 1px solid ${theme.colors.mediumGray};
		border-bottom-left-radius: ${theme.font.sizes.small};
		border-bottom-right-radius: ${theme.font.sizes.small};
		opacity: 1;
		{}
		& ul {
			padding: 0;
		}

		${!visibility && visibileMenu()}
	`}
`;
