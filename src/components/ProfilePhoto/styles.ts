import styled, { css } from 'styled-components';

export const Picture = styled.picture`
	${({ theme }) => css`
		& img  {
			width: ${theme.frameSizes.smallMedium};
			height: ${theme.frameSizes.smallMedium};
			border-radius: 20px;
			box-shadow: 20px 14px 20px 4px;

		}
	`}
`;
