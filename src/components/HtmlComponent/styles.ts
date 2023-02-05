import styled, { css } from "styled-components";

export const Container = styled.div`
	${({ theme }) => css`
		@media ${theme.media.lteMedium} {
			font-size: 2rem;

			.image-style-side {
				max-width: 100%;
				float: none;
				margin: 0;
			}
		}

		font-size: calc(${theme.fonts.sizes.small} + 0.2rem);
		line-height: 1.5;

		iframe[src*="ads"] {
			display: none;
		}

		p {
			margin: ${theme.spacings.medium} 0;
		}

		a,
		a:visited,
		a:link {
			color: ${theme.colors.secondary};
			text-decoration: none;
			transition: all ${theme.transitions.fast} ease-in-out;
		}

		a:hover {
			filter: brightness(50%);
		}
		/*
	code {
		font-family: monospace;
		color: ${theme.colors.secondary};
		font-size: ${theme.fonts.sizes.small};
		background-color: ${theme.colors.gray5};
		padding: 0.2rem;
		margin: 0.2rem;
	}

    pre {
      font-size: ${theme.fonts.sizes.small};
      background-color: ${theme.colors.primary};
      padding: ${theme.spacings.medium};
      font-family: monospace;
      color: ${theme.colors.white}
      margin: ${theme.spacings.medium} 0;
      width: 100%;
      overflow-x: auto;
	  font-size: ${theme.fonts.sizes.small};
    }

	pre code {
		color: inherit;
		background: inherit;
	}
*/
		img {
			max-width: 100%;
		}

		.image {
			background: ${theme.colors.gray5};
			line-height: 0;
			margin: ${theme.spacings.medium} 0;
		}

		.image figcaption {
			font-size: ${theme.fonts.sizes.small};
			padding: ${theme.spacings.small};
			text-align: center;
			line-height: 1.3;
		}

		.image-style-side {
			max-width: 50%;
			float: right;
			margin: ${theme.spacings.medium} 0;
		}

		hr {
			border: none;
			border-bottom: 0.1rem solid $ ${theme.colors.gray5};
		}

		ul,
		ol {
			margin: ${theme.spacings.medium} ${theme.spacings.xlarge};
		}

		.table {
			width: 100%;
			overflow: hidden;
			overflow-x: auto;
		}

		table {
			width: 100%;
			border-collapse: collapse;
			margin: ${theme.spacings.medium} 0;
		}

		.table td,
		.table th {
			padding: ${theme.spacings.small};
			border: 0.1rem solid ${theme.colors.gray5};
		}

		blockquote {
			border-left: 0.5rem solid ${theme.colors.secondary};
			color: ${theme.colors.gray12};
			filter: brightness(80%);
			padding-left: ${theme.spacings.medium};
			font-style: italic;
			margin: ${theme.spacings.medium};
		}
	`}
`;
