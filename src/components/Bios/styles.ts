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

export const ProfilePhotoContainer = styled.figure`
	${({theme}) => css`
		& img  {
			width: ${theme.frameSizes.smallMedium};
			height: ${theme.frameSizes.smallMedium};
			border-radius: 20px;
			box-shadow: 20px 14px 20px 4px;
		}
	`}
`;
