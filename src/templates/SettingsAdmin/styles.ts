import styled, { css } from "styled-components";

export const Wrapper = styled.div`
	${({ theme }) => css`
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		color: ${theme.colors.deepBlack};
		background-color: ${theme.colors.tertiary};
		height: 100vh;
		color: ${theme.colors.secondary};
	`}
`;

export const Link = styled.a`
	${({ theme }) => css`
		background: ${theme.colors.quaternary};
		border: none;
		text-decoration: none;
		color: ${theme.colors.deepWhite};
		font-size: ${theme.fonts.sizes.normal};
		padding: ${theme.spacings.xsmall} ${theme.spacings.medium};
		cursor: pointer;
		border-radius: ${theme.spacings.tiny};
		transition: all ${theme.transitions.fast} ease-in-out;
		display: flex;
		align-items: center;
		justify-content: center;
		&:focus {
			outline: none;
			box-shadow: 0 0 ${theme.spacings.tiny} ${theme.colors.quaternary};
			filter: brightness(110%);
		}
		&:hover {
			filter: brightness(90%);
		}
		&:disabled {
			background: ${theme.colors.gray4};
			color: ${theme.colors.gray1};
			cursor: not-allowed;
			&:hover {
				filter: none;
			}
		}
		> svg {
			width: 2rem;
			height: 2rem;
			margin-left: 1rem;
			margin-right: 1rem;
		}
	`}
`;

export const Ul = styled.ul`
	${({ theme }) => css`
		display: flex;
		flex-direction: column;
		list-style: none;

		padding: ${theme.spacings.mediumLarge};
		> li {
			display: flex;
		}
	`}
`;
