import styled, { css } from "styled-components";
export const Wrapper = styled.div`
	${({ theme }) => css`
		@media ${theme.media.lteOrEqMedium} {
			flex-direction: column;
		}

		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: center;
		gap: ${theme.spacings.xhero};
		text-align: justify;
		& p {
			text-align: justify;
			padding: ${theme.spacings.small};
			max-width: 550px;
		}
	`}
`;

export const ContentContainer = styled.div`
	${() => css`
		max-height: 350px;
		overflow-y: auto;
	`}
`;
