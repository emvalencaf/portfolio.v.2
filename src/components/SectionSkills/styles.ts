import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
	${({ theme }) => css`
		display: flex;
		flex-direction: column;
		gap: ${theme.spacings.xlarge};
		align-items: center;
		justify-content: center;
	`}
`;

export const TechButtonContainer = styled.div`
	${({ theme }) => css`
		display: flex;
		flex-wrap: wrap;
		gap: ${theme.spacings.xlarge};
		align-items: center;
		justify-content: center;
	`}
`;

export const TechDescriptionContainer = styled.div`
	${({ theme }) => css`
		@media screen {
			width: 100%;
		}
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: justify;
		margin: ${theme.spacings.xxlarge} auto;
		padding-left: ${theme.spacings.mediumSmall};
		padding-right: ${theme.spacings.mediumSmall};
		max-width: 700px;
		height: 300px;
		border: 2px solid ${theme.colors.quaternary};
		border-radius: 0rem 0rem 2rem;
		box-shadow: 0px 0px 8px 8px ${theme.colors.tertiary};
		opacity: 0.4;
		p {
			width: 100%;
		}

		&:hover {
			filter: brightness(110%);
			opacity: 1;
		}
	`}
`;