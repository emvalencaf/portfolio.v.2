import styled, { css } from 'styled-components';
import { Button as ButtonContainer } from '../Button/styles';

export const Form = styled.form`
	${({ theme }) => css`
		width: 100%;
		padding: ${theme.spacings.small};
		max-width: ${theme.frameSizes.largeMedium};
	`}
`;

export const ButtonWrapper = styled.div`
	${({ theme }) => css`

		& ${ButtonContainer} {
			width: 100%;
		}
	`}
`;

export const ErrorMessage = styled.p`
	${({ theme }) => css`
		background: ${theme.colors.warning};
		color: ${theme.colors.white};
		padding: ${theme.spacings.xsmall} ${theme.spacings.xsmall};
	`}
`;
