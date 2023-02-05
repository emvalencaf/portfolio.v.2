import styled, { css } from "styled-components";
import { Title as HeadingContainer } from "../Heading/styles";


export const Wrapper = styled.div`
	${({ theme }) => css`

		border: 1px solid ${theme.colors.primary};
		border-radius: 20px;
		padding: 0px ${theme.spacings.small};
		cursor: pointer;
		& ${HeadingContainer} {
			align-self: center;
			margin: 0px;
		}
	`}
`;

export const WorkExperienceHeader = styled.div`
	${({ theme }) => css`
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	`}
`;

export const DateStringContainer = styled.div`
	${({ theme }) => css`
		display: flex;
		flex-direction: row;
		width: ${theme.frameSizes.small};
		border: 1px solid ${theme.colors.primary};
		padding: ${theme.spacings.xxsmall};
		border-radius: 20px;
		justify-content: space-evenly;
		margin: ${theme.spacings.mediumSmall};
	`}
`;

export const DateStringSeparator = styled.span`
	${({ theme }) => css`
			content: "";
			width: 1px;
			height: ${theme.fonts.sizes.normal};
			border: 1px solid ${theme.colors.primary};
			transform: rotate(30deg);
			display: inline-block;
	`}

`;

export const JobDescription = styled.p`
	${({ theme }) => css`
		margin: 0px;
	`}
`;

export const WorkExperienceBody = styled.div`
	${({ theme }) => css`
		padding: ${theme.spacings.mediumSmall} ${theme.spacings.huge};
	`}
`;