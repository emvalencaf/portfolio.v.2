import styled, { css } from "styled-components";
import { Title as HeadingContainer } from "../../components/Heading/styles";
export const Wrapper = styled.div`
	${({ theme }) => css`
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		color: ${theme.colors.secondary};
		height: 100vh;
	`}
`;

export const ArticleHeader = styled.div`
	${({ theme }) => css`
		display: flex;
		flex-direction: column;
		background-color: ${theme.colors.primary};
		padding-top: ${theme.spacings.xxhuge};
		padding-bottom: 0rem;
		padding-left: ${theme.spacings.small};
		padding-right: ${theme.spacings.small};

		& ${HeadingContainer} {
			align-self: center;
		}

		& p {
			margin: ${theme.spacings.mediumSmall};
			text-align: justify;
		}

		> svg {
			height: 5rem;
			width: 5rem;
			align-self: center;
			filter: drop-shadow(0 0 0.75rem ${theme.colors.tertiary})
				brightness(220%);
		}
	`}
`;

export const ArticleMeta = styled.div`
	${() => css`
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		justify-content: flex-start;

		align-self: flex-end;
		justify-self: flex-end;
	`}
`;

export const ArticleFooter = styled.div`
	${({ theme }) => css`
		color: ${theme.colors.deepBlack};
		align-i: flex-end;
		justify-self: flex-end;
	`}
`;

export const ArticleContent = styled.div`
	${({ theme }) => css`
		background-color: ${theme.colors.deepWhite};
		color: ${theme.colors.deepBlack};
		align-self: center;
		justify-self: center;

		padding: ${theme.spacings.xxhuge};
		border-radius: 0rem 0rem 2rem;
	`}
`;
