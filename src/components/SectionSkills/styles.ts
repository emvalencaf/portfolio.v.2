import styled, { css } from 'styled-components';

import { Button as ButtonContainer } from '../Button/styles';
export const Wrapper = styled.div`
	${({ theme }) => css`
		display: flex;
		flex-direction: column;
		gap: ${theme.spacings.xlarge};
		align-items: center;
		justify-content: center;
	`}
`;

export const TechButtonContainer = styled.div`
	${({ theme }) => css`
		display: flex;
		flex-wrap: wrap;
		gap: ${theme.spacings.xlarge};
		align-items: center;
		justify-content: center;
	`}
`;

export const TechDescriptionContainer = styled.div`
	${({ theme }) => css`
		text-align: justify;
		margin: ${theme.spacings.xxlarge} auto;
		padding-left: ${theme.spacings.mediumSmall};
		padding-right: ${theme.spacings.mediumSmall};
	`}
`;