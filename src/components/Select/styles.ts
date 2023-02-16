import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
	${({ theme }) => css``}
`;

export const Select = styled.select`
	${({ theme }) => css`
		-webkit-appearance: none;
		appearance: none;
		-moz-appearance: none;
		border: 1px solid ${theme.colors.gray3};
		width: 100%;
		height: 100%;
		font-size: ${theme.fonts.sizes.normal};
		transition: ${theme.transitions.fast};
		padding: ${theme.spacings.small} ${theme.spacings.xsmall};
		background: ${theme.colors.white};
		padding-right: 3.7rem;
		border-radius: ${theme.spacings.tiny};
		outline: none;

		& svg {
			position: absolute;
			top: 50%;
			transform: translate(0, -50%);
			right: 1rem;
			width: 2.5rem;
			height: 2.5rem;
			color: ${theme.colors.gray6};
			z-index: ${theme.layers.layer1};
		}
	`}
`;