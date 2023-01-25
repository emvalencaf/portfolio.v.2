import styled, { css } from 'styled-components';
import { Title as HeadingContainer } from '../Heading/styles';
export const Wrapper = styled.section`
	${({ theme }) => css`
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
		margin: 0 auto;

		& p {
			margin: ${theme.spacings.small};
			padding: 0;
			width: 100%;
			font-size: ${theme.font.sizes.medium};
		}
		& ${HeadingContainer} {
			margin: ${theme.spacings.small};
			padding: 0;
			width: 100%;
		}
	`}
`;
