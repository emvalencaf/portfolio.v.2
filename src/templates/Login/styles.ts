import styled, { css } from "styled-components";
import { Title as HeadingContainer } from "../../components/Heading/styles";

export const Wrapper = styled.div`
	${({ theme }) => css`
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background-color: ${theme.colors.tertiary};

		height: 100vh;
		margin: auto;
	`}
`;

export const LoginHeader = styled.div`
	${({ theme }) => css`
		padding: ${theme.spacings.small};
		max-width: ${theme.frameSizes.largeMedium};
		& ${HeadingContainer}::after {
			content: "";
			display: inline-block;
			height: 1px;
			width: 250px;
			background-color: ${theme.colors.quaternary};
			border: 1px solid;
			margin: auto 20px;
			transform: translateY(-6px);
			z-index: ${theme.layers.layer1};
		}

		> p {
			color: ${theme.colors.secondary};
			text-align: justify;
		}
	`}
`;
