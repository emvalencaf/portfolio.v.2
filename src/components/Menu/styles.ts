import styled, { css, DefaultTheme } from 'styled-components';

type MenuStyled = {
	theme?: DefaultTheme;
	visible: boolean;
};

const menuVisible = () => css`
	visibility: visible;
	opacity: 1;
`;

export const Nav = styled.nav<MenuStyled>`
	${({ theme, visible }) => css`
		@media ${theme.media.lteMedium} {
			position: fixed;
//			height: 100%;
			width: 100%;
			visibility: hidden;
			opacity: 0;
			z-index: ${theme.layers.layer6};
			top: 0;
			left: 0;
			right: 0;
//			bottom: 0;
			background-color: ${theme.colors.quaternary};
			transition: all ${theme.transitions.fast} ease-in-out;
			${visible && menuVisible()}

			> ul {
//				height: 100vh;
//				flex-flow: column wrap;
				flex-flow: row wrap;
				align-items: center;
				justify-content: center;
			}
		}

		@keyframes navbarLinkLoad {
    		0%{
        		transform: scale(0);
    		}

    		80%{
        		transform: scale(1.1);
    		}

    		100%{
        		transform: scale(1);
    		}
		}

		@keyframes navbarLinkLoad_first{
    		0%{
        		transform: translateX(-1000%);
    		}

    		50%{
       			transform: translateX(50%);
    		}
    		100%{
        		transform: translateX(0);
    		}
		}

		@keyframes navbarLinkLoad_last{
	    	0%{
    	    	transform: translateX(1000%);
    		}

    		50%{
        		transform: translateX(-50%);
    		}
    		100%{
        		transform: translateX(0);
    		}
		}

		@keyframes navbarLinkLoadIcon {
			0% {
				transform: scale(0);
			}
			50% {
				transform: scale(1.3);
			}
			100% {
				transform: scale(1);
			}
		}

		& > ul {
			display: flex;
			justify-content: center;
			align-items: center;
			gap: ${theme.spacings.small};
		}

		& ul > li {
			list-style: none;
			animation: navbarLinkLoad;
			animation-duration: 1000ms;
			animation-delay: ${theme.transitions.normal};
			animation-fill-mode: forwards;
			transform: scale(0);
		}

		& ul > li:first-child {
			animation-name: navbarLinkLoad_first;
    		transform: translateX(-1000%);
		}

		& ul > li:last-child {
			animation-name: navbarLinkLoad_last;
    		transform: translateX(1000%);
		}

		& svg {
			animation: navbarLinkLoadIcon ${theme.transitions.slower} ease-in ${theme.transitions.slowest};
			transform: scale(0);
			animation-fill-mode: forwards;
		}
	`}
`;

export const Button = styled.button<MenuStyled>`
	${({ theme, visible }) => css`
		@media ${theme.media.lteMedium} {
			display: flex;
			align-items: center;
			justify-content: center;
			border: 1px solid ${theme.colors.quaternary};
			border-radius: 0.4rem;
			appearance: auto;
			opacity: 1;
		}

		display: none;
		appearance: none;
		opacity: 0;
		position: fixed;
		top: 2rem;
		right: 2rem;
		background-color: ${theme.colors.quaternary};
		color: ${theme.colors.white};
		border: none;
		z-index: ${theme.layers.layer7};
		pointer-events: ${visible ? "none": "all"};

		> svg {
			width: ${theme.fonts.sizes.medium};
			height: ${theme.fonts.sizes.medium};
		}
	`}
`;
