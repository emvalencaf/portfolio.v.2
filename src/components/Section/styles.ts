import styled, { css, DefaultTheme } from 'styled-components';
import { Title as HeadingContainer } from '../Heading/styles';

type WrapperProps = {
	theme: DefaultTheme;
	background: boolean;
	color: string;
	backgroundImg: string;
}

const setBackgroundColor = (color:string) => css`
	background-color: ${color};
`;

export const Wrapper = styled.section<WrapperProps>`
	${({ theme, background, color, backgroundImg }) => css`
		@media ${theme.media.lteMedium} {
			padding: 0px ${theme.spacings.small};

			& > ${HeadingContainer}::after {
				max-width: 100px;
			}
		}
		width: 100%;
		color: ${theme.colors[color]};
		padding: calc(${theme.spacings.xhuge} + ${theme.spacings.huge}) 15rem;
		${background && setBackgroundColor(color)}
		& > ${HeadingContainer}::after {
			content: "";
    		display: inline-block;
			height: 1px;
			width: 250px;
			background-color: ${theme.colors[color]};
			border: 1px solid ${theme.colors
			[color]};
			margin: auto 20px;
    		transform: translateY(-6px);
			z-index: ${theme.layers.layer1};
		}

		&[id="#"] {
			background-image: linear-gradient(to right top, ${theme.colors.primary} 40%, transparent), repeating-linear-gradient(1deg, ${theme.colors.primary}, transparent ), url(${`${backgroundImg}`});
			background-position: center;
			background-repeat: no-repeat;
			background-size: cover;

		}
	`}
`;
