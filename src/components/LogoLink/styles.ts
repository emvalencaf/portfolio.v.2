import styled, { css } from "styled-components";

export const Link = styled.a`
	${({ theme }) => css`
		display: flex;
		align-items: center;
		text-decoration: none;
		color: inherit;
		> img {
			width: ${theme.fonts.sizes.xhuge};
			height: ${theme.fonts.sizes.xhuge};
			cursor: pointer;
		}
	`}
`;

export const Logo = styled.div`
	${({ theme }) => css`
		display: flex;
		text-transform: uppercase;
		font-size: ${theme.fonts.sizes.large};
		font-weight: bolder;
		background-image: linear-gradient(
			to top,
			${theme.colors.secondary} 5%,
			${theme.colors.senary}
		);
		text-shadow: 0px 0px 15px ${theme.colors.tertiary};
		align-items: center;
		justify-content: center;
		filter: brightness(220%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;

		> svg {
			height: 4rem;
			width: 4rem;
			align-self: center;
			justify-content: center;
			filter: brightness(120%)
				drop-shadow(0 0 0.9rem ${theme.colors.tertiary});
		}
		> svg:first-child {
			transform: rotate(180deg);
		}
	`}
`;
