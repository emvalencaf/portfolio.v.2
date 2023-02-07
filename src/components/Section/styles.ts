import styled, { css } from 'styled-components';
import { Title as HeadingContainer } from '../Heading/styles';

export const Wrapper = styled.section`
	${({ theme }) => css`
		@media ${theme.media.lteMedium} {
			padding: 0px ${theme.spacings.small};

			& > ${HeadingContainer}::after {
				max-width: 100px;
			}
		}
		width: 100%;
		height: 500px;
		padding: 0px ${theme.spacings.xxhero};
		margin: calc(${theme.spacings.xhuge} + ${theme.spacings.huge}) auto;
		& > ${HeadingContainer}::after {
			content: "";
    		display: inline-block;
			height: 1px;
			width: 250px;
			background-color: ${theme.colors.primary};
			border: 1px solid ${theme.colors.primary};
			margin: auto 20px;
    		transform: translateY(-6px);
			z-index: ${theme.layers.layer1};
		}
	`}
`;
