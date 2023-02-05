import styled, { css } from 'styled-components';
import { Title as HeadingContainer } from '../Heading/styles';

export const Wrapper = styled.div`
	${({ theme }) => css`
		@media ${theme.media.lteSmall} {
			padding: 0px ${theme.spacings.small};
		}

		height: 500px;
		max-height: 500px;
		width: 100%;
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
		}
	`}
`;
