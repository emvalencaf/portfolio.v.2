import styled, { css } from 'styled-components';
export const Wrapper = styled.div`
	${({theme}) => css`

		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;

		& p {
			text-align: justify;
			max-width: 550px;
		}
	`}
`;
