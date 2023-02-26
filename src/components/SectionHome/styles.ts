import styled, { css } from "styled-components";
import { Title as HeadingContainer } from "../Heading/styles";

export const Wrapper = styled.div`
	${({ theme }) => css`
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
		height: 600px;
		width: 100%;
		margin: 0px auto;

		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;

		& p {
			margin: ${theme.spacings.small};
			padding: 0;
			width: 100%;
			font-size: ${theme.fonts.sizes.medium};
		}

		& ${HeadingContainer}:first-child {
			text-shadow: 0px 0px 20px ${theme.colors.quaternary};
		}

		& ${HeadingContainer} {
			margin: ${theme.spacings.small};
			padding: 0;
			width: 100%;
			text-shadow: 0px 0px 20px ${theme.colors.senary};
		}
		& ${HeadingContainer}::after {
			content: none;
		}
	`}
`;

export const IntroContainer = styled.div`
	${() => css`
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	`}
`;

export const GithubContainer = styled.div`
	${({ theme }) => css`
		@media ${theme.media.gteOrEqLarge} {
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			max-width: 300px;
			& ${HeadingContainer} {
				margin: 0px;
			}
		}
		display: none;
	`}
`;
