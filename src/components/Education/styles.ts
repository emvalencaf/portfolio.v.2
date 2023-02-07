import styled, { css } from 'styled-components';
import { Button } from '../Button/styles';

export const Wrapper = styled.div`
	${({ theme }) => css`
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		gap: ${theme.spacings.mediumSmall};
	`}
`;

export const OrderList = styled.ol`
	${({ theme }) => css`
		margin: 0;
		padding: 0;
		list-style: none;
		max-width: 400px;

		> li {
			padding: 0px ${theme.spacings.mediumSmall};
		}

		> li:has(> button:focus) {
			list-style: disc;
			color: ${theme.colors.primary};
		}

		& ${Button} {
			align-items: flex-start;
			justify-content: flex-start;
			color: ${theme.colors.primary};
			background-color: transparent;
			font-size: ${theme.fonts.sizes.small};
			text-align: justify;
			border: none;
			outline: none;
			width: 100%;
		}

		& ${Button}:active,
		& ${Button}:focus,
		& ${Button}:hover {
			box-shadow: none;
		}

	`}
`;

export const Content = styled.div`

`;