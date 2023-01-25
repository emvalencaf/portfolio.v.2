import styled, { css } from 'styled-components';

export const Link = styled.a`
	${({ theme }) => css`
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		color: ${theme.colors.primary};
		text-decoration: none;
		transition: all 350ms ease-in;

		&:hover {
			color: ${theme.colors.secondary};
			transform: scale(1.1);
		}
	`}
`;
