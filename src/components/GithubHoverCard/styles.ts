import styled, { css } from 'styled-components';
import { Title as HeadingContainer } from '../Heading/styles';
export const Wrapper = styled.div`
	${({ theme }) => css`
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		width: 100%;
	`}
`;

export const DisplayerContainer = styled.div`
	${({ theme }) => css`
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		text-align: center;
		margin: 0px;
		padding: ${theme.spacings.small};
		> ${HeadingContainer} {
			margin: 0px;
		}
	`}
`;

export const HeadingDisplayContainer = styled.div`
	${({ theme }) => css`
		margin: 0px;
		height: 90px;
		text-align: justify;

		> ${HeadingContainer} {
			margin: 0px;
		}
	`}
`;