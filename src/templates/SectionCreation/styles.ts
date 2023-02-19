import styled, { css } from 'styled-components';
import { Button as ButtonContainer } from '../../components/Button/styles';

export const Wrapper = styled.div`
	${({ theme }) => css`
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: ${theme.colors.tertiary};
		transition: all ${theme.transitions.slowest} ease-in-out;
	`}
`;

export const ContainerSectionForm = styled.div`
	${({ theme }) => css`
		display: flex;
		flex-direction: column;
		width: 100%;
		max-width: 600px;
		gap: ${theme.spacings.small};
	`}
`;

export const ContainerSettingsForm = styled.div`
	${({ theme }) => css`
		display: flex;
		flex-direction: column;
		width: 100%;
		max-width: 600px;
		gap: ${theme.spacings.tiny};
	`}
`;

export const ContainerDynamicInputSections = styled.div`
	${({ theme }) => css`
		display: flex;
		flex-direction: column;
		padding: ${theme.spacings.mediumLarge};
		border: 1px solid ${theme.colors.tertiary};
		border-radius: 0rem 0rem 20px;
		gap: ${theme.spacings.tiny};
	`}
`;

export const ContainerButton = styled.div`
	${({ theme }) => css`
		position: relative;
		top: -2rem;
		right: -2rem;
		align-self: flex-end;

		& ${ButtonContainer} {
			padding: 0px;
			width: ${theme.spacings.xlarge};
		}
	`}
`;

export const DisplayProjectSelection = styled.div`
	${({ theme }) => css`
		> ul {
			display: flex;
			flex-direction:column;
			align-items: center;

			padding: ${theme.spacings.mediumLarge};
			background-color: ${theme.colors.quaternary};
			color: ${theme.colors.secondary};
			border-radius: 20px 0rem 0px;
			list-style: none;
			gap: ${theme.spacings.small};
			overflow-y: auto;
			height: ${theme.frameSizes.small};
			max-height: ${theme.frameSizes.small};
			> li {
				display: flex;
				align-items: center;
				justify-content: space-between;
				width: 100%;
				background-color: ${theme.colors.tertiary};
				padding: ${theme.spacings.small};
				border-radius: 0rem 0rem 20px;

				& ${ContainerButton} {
					position: relative;
					top: -1.3rem;
					right: -1.3rem;
				}
			}
		}
	`}
`;