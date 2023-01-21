import styled, { css } from 'styled-components';

export const Nav = styled.nav`
	${({ theme }) => css`
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

