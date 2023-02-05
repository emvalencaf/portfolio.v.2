import styled, { css } from 'styled-components';

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
