import styled, { css } from "styled-components";
import { Wrapper as SocialMediaContainer } from "../SocialMedia/styles";

export const Wrapper = styled.footer`
	${({ theme }) => css`
		@media ${theme.media.lteSmall} {
			& ${SocialMediaContainer} {
				& svg,
				& a {
					height: ${theme.fonts.sizes.medium};
					width: ${theme.fonts.sizes.medium};
				}
			}
		}
		display: flex;
		flex-flow: column wrap;
		align-items: center;
		justify-content: center;
		gap: ${theme.spacings.xsmall};
		margin-top: ${theme.spacings.medium};
		// background-color: ${theme.colors.quaternary};
		padding: ${theme.spacings.medium};
		background-image: linear-gradient(
			to bottom,
			transparent 5%,
			${theme.colors.quaternary}
		);
		& p {
			margin: 0;
			padding: 0;
		}

		& ${SocialMediaContainer} {
			display: flex;
			flex-flow: row wrap;
			justify-content: center;
			align-items: center;
			gap: ${theme.spacings.xsmall};
		}
	`}
`;
