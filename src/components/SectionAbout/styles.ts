import styled, { css } from 'styled-components';
import { Button } from '../Button/styles';

export const Wrapper = styled.section`
	${({ theme }) => css`
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
		margin: 0 auto;

		& ${Button} {
			width: 100%;
		}
	`}
`;

export const SectionInnerMenu = styled.div`
	${({ theme }) => css`
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		gap: ${theme.spacings.medium};
	`}
`;