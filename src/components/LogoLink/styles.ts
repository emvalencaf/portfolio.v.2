import styled, { css } from 'styled-components';

export const Link = styled.a`
	${({ theme }) => css`
		display: flex;
		align-items: center;
		text-decoration: none;
		color: inherit;
		> img {
			width: ${theme.font.sizes.xhuge};
			height: ${theme.font.sizes.xhuge};
			cursor: pointer;
		}
	`}
`;
