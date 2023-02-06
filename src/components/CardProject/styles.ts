import styled, { css } from 'styled-components';
import { Title as HeadingContainer } from '../Heading/styles';
import { Button as ButtonContainer } from '../Button/styles';

export const Wrapper = styled.div`
	${({ theme }) => css`
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		height: ${theme.frameSizes.medium};
		width: ${theme.frameSizes.medium};
		border-radius: 2.9rem;
		padding: ${theme.spacings.small};
		background-color: ${theme.colors.gray1};
		transition: ${theme.transitions.normal};
		opacity: 0.4;
		&:focus,
		&:hover {
			opacity: 1;
			box-shadow: 0 0 ${theme.spacings.medium} ${theme.spacings.tiny} ${theme.colors.gray6};
			filter: brightness(110%);
		}

		& ${ButtonContainer} {
			margin: ${theme.spacings.small};
			width: 100%;
		}
	`}
`;

export const PictureContainer = styled.picture`
	${({ theme }) => css`
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;

		> img {
			width: 100%;
			height: 100%;
			margin: auto;
		}
	`}
`;

export const HeaderCardContainer = styled.div`
	${({ theme }) => css`
		text-align: center;
		width: 100%;
		background-color: ${theme.colors.gray4};
		border-radius: 2rem;
		margin: ${theme.spacings.small};
		opacity: 0.7;
		z-index: ${theme.layers.layer3};
		& ${HeadingContainer} {
			color: ${theme.colors.gray6};
			margin: 0px;
			padding: ${theme.spacings.xxsmall};
		}
	`}
`;

export const ButtonsContainer = styled.div`
	${({ theme }) => css`
		display: flex;
		flex-direction: row;

		& ${ButtonContainer} {
			background-color: ${theme.colors.gray6};
		}
	`}
`;