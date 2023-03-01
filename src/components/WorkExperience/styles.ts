import styled, { css } from "styled-components";
import { Button } from "../Button/styles";
import { Title as HeadingContainer } from "../Heading/styles";

export const Wrapper = styled.div`
	${({ theme }) => css`
		@media ${theme.media.lteOrEqMedium} {
			display: flex;
			flex-direction: column;
			gap: ${theme.spacings.tiny};
		}

		display: grid;
		grid-template-columns: 1fr 3fr;
		align-items: center;
		width: 100%;
		border: 5px solid ${theme.colors.quaternary};
		border-radius: 0rem 2rem;
	`}
`;

export const OrderList = styled.ol`
	${({ theme }) => css`
		@media ${theme.media.lteOrEqMedium} {
			display: flex;
			flex-wrap: wrap;
			height: auto;
			width: 100%;
			max-width: 100%;
			background-color: transparent;
			gap: ${theme.spacings.small};
			border-radius: 0%;
			& ${HeadingContainer} {
				color: ${theme.colors.deepWhite};
				margin: 0 ${theme.spacings.small};
			}
			> li {
				display: flex;
				align-items: center;
				justify-content: space-evenly;
				background-color: ${theme.colors.quaternary};
				width: 100%;
				border-radius: 0rem 0rem 2rem;

				> ol {
					display: inline-flex;
					flex-wrap: nowrap;
					background-color: ${theme.colors.primary};
					overflow-x: auto;
					height: ${theme.spacings.hero};
					gap: unset;
					> li {
						border-radius: 0%;
					}
					> li,
					button {
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
		height: 400px;
		max-height: 400px;
		background-color: ${theme.colors.quaternary};
		border-radius: 0rem 0rem 2rem;
		> li {
			padding: 0px ${theme.spacings.mediumSmall};
			max-height: 200px;
		}

		> li > ol {
			overflow-y: auto;
			max-height: 250px;
			background-color: ${theme.colors.primary};
		}

		> li:has(> button:disabled) {
			color: ${theme.colors.deepWhite};
			background-color: ${theme.colors.tertiary};
			border: none;
			outline: none;
		}
		& ${Button} {
			align-items: flex-start;
			justify-content: flex-start;
			color: ${theme.colors.secondary};
			background-color: transparent;
			font-size: ${theme.fonts.sizes.small};
			text-align: justify;
			border: none;
			outline: none;
			width: 100%;
		}

		& ${Button}:active, & ${Button}:focus, & ${Button}:hover {
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
		justify-self: center;
		width: 300px;
		max-width: 300px;
		height: 400px;
		max-height: 400px;
		padding: ${theme.spacings.medium};
		gap: ${theme.spacings.mediumLarge};

		${HeadingContainer} {
			margin: 0px;
		}

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
