import styled, { css } from 'styled-components';

export const Wrapper = styled.section`
	${({ theme }) => css`
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
		margin: 0 auto;
	`}
`;
