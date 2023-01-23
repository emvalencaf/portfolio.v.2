import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
	${() => css`
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 500px;
		max-height: 500px;
		padding: 0px 2.5rem;
	`}
`;
