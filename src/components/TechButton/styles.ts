import styled, { css } from 'styled-components';
import { Button as ButtonContainer, ButtonLabel } from '../Button/styles';
export const Wrapper = styled.div`
	${({ theme }) => css`
		& ${ButtonLabel} {
			display: none;
			appearance: none;
			opacity: 0;
		}
		& ${ButtonContainer} {
			color: ${theme.colors.primary};
			background-color: transparent;
			padding: 0px;
			margin: 0px;
			width: ${theme.fonts.sizes.xxlarge};
			height: ${theme.fonts.sizes.xxlarge};
			border: none;
			cursor: pointer;
			& svg {
				width: 100%;
				height: 100%;
				margin: 0px;
				padding: 0px;
			}

		}
		& ${ButtonContainer}:focus,
		& ${ButtonContainer}:hover,
		& ${ButtonContainer}:disabled {
			flex-direction: column;
			box-shadow: none;
			transform: scale(1.2);

			& ${ButtonLabel} {
				display: inline-block;
				opacity: 1;
				appearance: inherit;
			}
		}

		& ${ButtonContainer}:disabled {
			cursor: not-allowed;
			color: ${theme.colors.gray1};
		}
	`}
`;

export const TechDescriptionContainer = styled.div`
	${({ theme }) => css``}
`;