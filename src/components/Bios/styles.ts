import styled, { css } from 'styled-components';
export const Wrapper = styled.div`
	${({theme}) => css`
		@media ${theme.media.lteMedium} {
			flex-direction: column;
		}

		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: center;
		gap: ${theme.spacings.xhero};
		& p {
			text-align: justify;
			max-width: 550px;
		}
	`}
`;
