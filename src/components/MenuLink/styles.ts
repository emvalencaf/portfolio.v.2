import styled, { css } from 'styled-components';

export const Link = styled.a`
	${({ theme }) => css`
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		color: ${theme.colors.primaryColor};
		text-decoration: none;
		transition: all 350ms ease-in;

		&:hover {
			color: ${theme.colors.secondaryColor};
			transform: scale(1.1);
		}
	`}
`;
