import styled, { css } from "styled-components";
import { Button } from '../Button/styles';
import { Title as HeadingContainer } from "../Heading/styles";

export const Wrapper = styled.div`
	${({ theme }) => css`
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		align-items: center;
		width: 100%;
		justify-content: space-evenly;
		gap: ${theme.spacings.mediumLarge};
	`}
`;

export const OrderList = styled.ol`
	${({ theme }) => css`
		@media ${theme.media.lteMedium} {
			display: flex;
			flex-wrap: wrap;
			height: auto;
			width: 100%;
			max-width: 100%;
			background-color: transparent;
			gap: ${theme.spacings.small};
			& ${HeadingContainer} {
				color: ${theme.colors.deepWhite};
				margin: 0 ${theme.spacings.small};

			}
			> li {
				display: flex;
				align-items: center;
				justify-content: space-evenly;
				background-color: ${theme.colors.primary};
				width: 100%;
				border-radius: 2rem;

				> ol {
					display: inline-flex;
					flex-wrap: nowrap;
					background-color: white;
					overflow-x: auto;
					height: ${theme.spacings.hero};

					gap: unset;
					> li {
						border-radius: 0%;
					}
					> li, button {
						background-color: transparent;
					}
					& ${Button} {
						padding: 0px ${theme.spacings.xxtiny};
						width: 180px;
					}
				}
			}
		}
		margin: 0;
		padding: 0;
		list-style: none;
		height: 350px;
		max-height: 400px;
		&::-webkit-scrollbar {
			width: ${theme.spacings.xxtiny};
			height: ${theme.spacings.tiny};

			background-color: ${theme.colors.gray0};
		}

		&::-webkit-scrollbar-thumb {
			background-color: ${theme.colors.gray10};
			border-radius: 5px;
		}

		> li {
			padding: 0px ${theme.spacings.mediumSmall};
			max-height: 200px;
		}

		> li > ol {
			overflow-y: auto;
			max-height: 150px;
		}


		> li:has(> button:disabled) {
			background-color: ${theme.colors.gray4};
			border: none;
			outline: none;

		}
		& ${Button} {
			align-items: flex-start;
			justify-content: flex-start;
			color: ${theme.colors.primary};
			background-color: transparent;
			font-size: ${theme.fonts.sizes.small};
			text-align: justify;
			border: none;
			outline: none;
			width: 100%;
		}

		& ${Button}:active,
		& ${Button}:focus,
		& ${Button}:hover {
			box-shadow: none;
		}

		& ${HeadingContainer} {
			margin: ${theme.spacings.tiny};
			width: 200px;
		}

	`}
`;

export const Content = styled.div`
	${({ theme }) => css`

		display: flex;
		flex-direction: column;
		align-items: center;
		text-align: justify;
		width: 300px;
		max-width: 300px;
		max-height: 400px;
		${Button} {
			width: 100%;
		}

		> p {
			width: 100%;
			margin: ${theme.spacings.tiny};
			text-align: justify;
		}
	`}
`;