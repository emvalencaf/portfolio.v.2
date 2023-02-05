import styled, { css } from 'styled-components';
import { Button as ButtonContainer } from '../Button/styles';
export const Wrapper = styled.div`
	${({ theme }) => css`
		& ${ButtonContainer} {
			color: ${theme.colors.primary};
			background-color: transparent;
			> svg {
				width: ${theme.fonts.sizes.normal};
				height: ${theme.fonts.sizes.normal};
			}
		}
	`}
`;

export const TechDescriptionContainer = styled.div`
	${({ theme }) => css``}
`;