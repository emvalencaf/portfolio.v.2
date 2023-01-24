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
			height: 100%;
			width: 100%;
			visibility: hidden;
			opacity: 0;
			z-index: 5;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
			background-color: ${theme.colors.white};
			transition: all 350ms ease-in-out;
			${visible && menuVisible()}

			> ul {
				height: 100vh;
				flex-flow: column wrap;
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
			animation-delay: 450ms;
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
	`}
`;

export const Button = styled.button<MenuStyled>`
	${({ theme, visible }) => css`
		@media ${theme.media.lteMedium} {
			display: flex;
			align-items: center;
			justify-content: center;
			border: 1px solid ${theme.colors.primaryColor};
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
		background-color: ${theme.colors.primaryColor};
		color: ${theme.colors.white};
		border: none;
		z-index: 6;
		pointer-events: ${visible ? "none": "all"};

		> svg {
			width: ${theme.font.sizes.medium};
			height: ${theme.font.sizes.medium};
		}
	`}
`;
