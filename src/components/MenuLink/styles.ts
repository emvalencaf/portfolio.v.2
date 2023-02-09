import styled, { css } from 'styled-components';

export const Link = styled.a`
	${({ theme }) => css`
		@media ${theme.media.lteMedium} {
			& span {
				display: none;
			}
		}

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		color: inherit;
		text-decoration: none;
		transition: all ${theme.transitions.fast} ease-in;

		&:hover {
			color: ${theme.colors.deepWhite};
			transform: scale(1.1);
		}

		> svg {
			width: ${theme.fonts.sizes.medium};
			height: ${theme.fonts.sizes.medium};
		}
	`}
`;
