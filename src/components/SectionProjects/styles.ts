import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
	${({ theme }) => css`
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: row;
		flex-wrap: wrap;
		gap: ${theme.spacings.large};
	`}
`;
