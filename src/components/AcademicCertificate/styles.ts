import styled, { css, DefaultTheme } from 'styled-components';
import { Title as HeadingContainer } from '../Heading/styles';

type WrapperAcademicCertificateProps = {
	theme: DefaultTheme;
	showDetails: boolean;
}

const changeCursor = () => css`
	cursor: pointer;
`;

export const Wrapper = styled.div<WrapperAcademicCertificateProps>`
	${({ theme, showDetails }) => css`
	padding: 2rem;
	${!showDetails && changeCursor()}

	& ${HeadingContainer} {
		margin: 0px;
	}
	`}
`;

export const HeaderAcademicCertificate = styled.div`
	${({ theme }) => css`
		display: flex;
		align-items: center;
		justify-content: center;
		margin: ${theme.spacings.small} auto;
	`}
`;

export const BodyAcademicCertificate = styled.div`
	${({ theme }) => css`
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		gap: ${theme.spacings.small};
		margin: ${theme.spacings.small} auto;
	`}
`;