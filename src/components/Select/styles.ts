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
	`}
`;