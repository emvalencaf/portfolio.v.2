import styled, { css } from 'styled-components';

export const Form = styled.form`
	${({ theme }) => css`
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: ${theme.spacings.medium};
		width: 100%;
		max-width: 100rem;
		padding: ${theme.spacings.small};
		border-radius: 0rem 2rem 2rem;
		background-color: ${theme.colors.deepWhite};
		}
	`}
`;

export const ContainerButton = styled.div`
	${({ theme }) => css`
		align-self: flex-end;
	`}
`;