import styled, { css } from 'styled-components';
import { Title as HeadingContainer } from '../Heading/styles';

export const Wrapper = styled.div`
	${({ theme }) => css`
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		height: ${theme.frameSizes.medium};
		width: ${theme.frameSizes.smallMedium};
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
	`}
`;

export const PictureContainer = styled.picture`
	${({ theme }) => css`
		@keyframes photo {
			0% {
				transform: scale(0);
			}
			50% {
				transform: scale(1.1);
			}
			100% {
				transform: scale(1);
			}
		}

		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		transform: scale(0);
		transition: all ${theme.transitions.normal} ease-in-out;
		animation: photo ${theme.transitions.slowest};
		animation-fill-mode: forwards;

		> img {
			width: 100%;
			height: 100%;
			margin: auto;
			border-radius: 2rem;
		}
	`}
`;

export const ContentContainer = styled.p`
	${({ theme }) => css`
		@keyframes content {
			0% {
				transform: scale(0);
			}
			50% {
				transform: scale(1.1);
			}
			100% {
				transform: scale(1);
			}
		}
		transform: scale(0);
		transition: all ${theme.transitions.normal} ease-in-out;
		animation: content ${theme.transitions.slowest};
		animation-fill-mode: forwards;
	`}
`;

export const HeaderCardContainer = styled.div`
	${({ theme }) => css`
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		background-color: ${theme.colors.gray4};
		border-radius: 2rem;
		opacity: 0.7;
		z-index: ${theme.layers.layer3};

		& ${HeadingContainer} {
			text-align: center;
			font-size: ${theme.fonts.sizes.normal};
			color: ${theme.colors.gray6};
			margin: 0px;
			padding: ${theme.spacings.xxsmall};
		}

		& svg {
			height: ${theme.fonts.sizes.medium};
			width: ${theme.fonts.sizes.medium};
			transition: all ${theme.transitions.normal} ease-in-out;
			margin: ${theme.spacings.small};
			&:hover {
				color: ${theme.colors.primary};
			}
		}

		> span > svg {
			@keyframes rotate {
				0% {
					transform: rotate(90deg);
				}
				100% {
					transform: rotate(180deg);
				}
				100% {
					transform: rotate(360deg);
				}
			}
			cursor: pointer;
			&:hover {
				animation: rotate ${theme.transitions.slowest} infinite;
			}
		}
	`}
`;

export const ButtonsContainer = styled.div`
	${({ theme }) => css`
		display: flex;
		flex-direction: row;
		gap: ${theme.spacings.small};
		> a {
			background-color: ${theme.colors.gray6};
			color: ${theme.colors.white};
			font-size: ${theme.fonts.sizes.normal};
			padding: ${theme.spacings.xsmall} ${theme.spacings.medium};
			cursor: pointer;
			border-radius: ${theme.spacings.tiny};
			transition: all ${theme.transitions.fast} ease-in-out;
			display: flex;
			align-items: center;
			justify-content: center;
			text-decoration: none;

			> svg {
				width: 2rem;
				height: 2rem;
				margin-left: 1rem;
				margin-right:1rem;
			}

			&:focus {
				outline: none;
				box-shadow: 0 0 ${theme.spacings.tiny} ${theme.colors.primary};
				filter: brightness(110%);
			}

			&:hover {
				filter: brightness(90%);
			}
		}
	`}
`;