import styled, { css } from 'styled-components';

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
	`}
`;
