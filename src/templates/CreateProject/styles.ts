import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
	${({ theme }) => css`
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background-color: ${theme.colors.tertiary};
		padding: ${theme.spacings.small};

		& textarea {
			resize: none;
		}

		
	`}
`;
