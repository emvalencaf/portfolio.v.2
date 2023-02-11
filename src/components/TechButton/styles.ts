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
			color: ${theme.colors.quaternary};
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
		& ${ButtonContainer}:hover {
				flex-direction: column;
				transform: scale(1.2);
				color: ${theme.colors.tertiary};
				filter: brightness(220%);

				& ${ButtonLabel} {
					display: inline-block;
					opacity: 1;
					appearance: inherit;
				}

			}
		}

		& ${ButtonContainer}:disabled {
			color: ${theme.colors.tertiary} !important;
			filter: brightness(220%) !important;
			&:hover {
				filter: brightness(220%) !important;
			}
		}

		& ${ButtonContainer}:disabled {
			cursor: not-allowed;
			color: ${theme.colors.gray1};

			> svg {
				filter: drop-shadow(0 0 0.75rem ${theme.colors.tertiary});
			}
		}
	`}
`;
