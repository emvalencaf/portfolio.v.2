// components
import Heading from '../Heading';
import Button from '../Button';

// icons
import { Github } from '@styled-icons/boxicons-logos';
// styles
import * as Styled from './styles';

// types
export type CardProjectProps = {
	title?: string;
	srcImg?: string;
	altImg?: string;
	icon?: React.ReactNode;
};

const CardProject = ({
	title = "",
	srcImg = "",
	icon
}: CardProjectProps) => {
	return (
		<Styled.Wrapper>
			<Styled.HeaderCardContainer>
				<Heading as="h3" size="medium" uppercase={true}>
					{title}
				</Heading>
			</Styled.HeaderCardContainer>
			<Styled.PictureContainer>
				{!!srcImg &&
					<img alt={`project picture ${title}`} src={srcImg} />
				}
			</Styled.PictureContainer>
			<Styled.ButtonsContainer>
				<Button icon={!!icon && icon}>
					Demo
				</Button>
				<Button icon={<Github />}>
					GitHub
				</Button>
			</Styled.ButtonsContainer>
		</Styled.Wrapper>
	);
};

export default CardProject;
