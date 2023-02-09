import styled, { css } from 'styled-components';
import { Title as HeadingContainer} from '../../components/Heading/styles';
import { Wrapper as SectionWrapper } from '../../components/Section/styles';

export const Wrapper = styled.div`
	${({ theme }) => css`
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		color: ${theme.colors.deepBlack};
		background-color: ${theme.colors.tertiary};
		height: 100vh;
		color: ${theme.colors.secondary};

		& ${SectionWrapper} {
			padding-bottom: 0px;
		}
	`}
`;

export const ContainerButtonsSections = styled.div`
	${({ theme }) => css`
		display: flex;
		list-style: none;
		border-radius: 2rem;
		border: 2px solid;
		box-shadow: 0px 0px 8px 8px ${theme.colors.secondary};

		&::-webkit-scrollbar {
			border-radius: 2rem;
		}
		`}
		`;

export const ListButtonsSections = styled.ul`
	${({ theme }) => css`
		display: flex;
		list-style: none;
		overflow-x: auto;
		align-items: center;
		justify-content: center;
		gap: ${theme.spacings.medium};
		padding: ${theme.spacings.tiny} auto;
		margin: ${theme.spacings.tiny} auto;
	`}
`;

export const Link = styled.a`
	${({ theme }) => css`
		display: flex;
		flex-direction: column;
		text-decoration: none;
		transition: all ${theme.transitions.normal} ease-in-out;
		align-items: center;
		justify-content: center;
		& span {
			opacity: 0;
		}
		& svg {
			height: ${theme.fonts.sizes.xlarge};
			width: ${theme.fonts.sizes.xlarge};
		}

		&:hover,
		&:active {
			& span {
				opacity: 1;
			}

			& svg {
				color: ${theme.colors.deepWhite};
				transform: scale(1.2);
				filter: brightness(220%);
			}
		}
	`}
`;