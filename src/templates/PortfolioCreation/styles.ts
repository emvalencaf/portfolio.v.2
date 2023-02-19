import styled, { css } from 'styled-components';
import { Title as HeadingContainer } from '../../components/Heading/styles';

export const Wrapper = styled.div`
	${({ theme }) => css`
		display: flex;
		color: ${theme.colors.deepBlack};
		background-color: ${theme.colors.tertiary};
		height: 100vh;
		color: ${theme.colors.secondary};
	`}
`;

export const ContainerContent = styled.div`
	${({ theme }) => css`
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-between;
		margin: auto;
		color: ${theme.colors.tertiary};
		background-color: ${theme.colors.secondary};
		padding: ${theme.spacings.medium};
		border-radius: 20px 0rem 20px;
		width: 100%;
		max-width: 600px;

		box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.1);
		backdrop-filter: blur(5px);
		-webkit-backdrop-filter: blur()(4px);

		& ${HeadingContainer} {
			margin: 0px;
			color: ${theme.colors.tertiary};

		}
	`}
`;

export const ContainerParagraph = styled.div`
	${({ theme }) => css`
		> p {
			margin: 0px;
			padding: ${theme.spacings.tiny} ${theme.spacings.medium};
		}

		> ol {
			margin: 0px;
			padding: 0px;
		}
	`}
`;

export const ContainerButtons = styled.div`
	${({ theme }) => css`
		display: flex;
		align-items: center;
		width: 100%;
		justify-content: space-between;


		> a {
			text-decoration: none;
			background-color: ${theme.colors.quaternary};
			padding: ${theme.spacings.xsmall};
			border-radius: 20px;

			&:hover {
				filter: brightness(90%);
			}

			&:disabled {
				background: ${theme.colors.gray4};
				color: ${theme.colors.gray1};
				cursor: not-allowed;
				&:hover {
					filter: none;
				}
			}
		}
	`}
`;