import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
	${({ theme }) => css`
		@media ${theme.media.lteMedium} {
			> ul {
				margin: 24px 0px;
				padding: 0px;
			}
		}

		width: 100%;

		& li {
			list-style: none;
		}
	`}
`;
