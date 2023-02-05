import styled, { css } from 'styled-components';
import { Button, ButtonLabel } from '../Button/styles';

export const Wrapper = styled.div`
	${({ theme }) => css`
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
		margin: 0 auto;
		padding: 0px;

		& ${Button} {
			width: 100%;
			margin-top: ${theme.spacings.medium};
		}
	`}
`;

export const SectionInnerMenu = styled.div`
	${({ theme }) => css`
		@media ${theme.media.lteMedium} {
			& ${ButtonLabel} {
				appearance: none;
				opacity: 0;
				display: none;
			}
		}
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		width: 100%;
		gap: ${theme.spacings.medium};
	`}
`;