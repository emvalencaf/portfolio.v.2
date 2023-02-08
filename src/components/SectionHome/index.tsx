// components
import Heading from '../Heading';
import Section, { SectionProps } from '../Section';

// styles
import * as Styled from './styles';

// types
export type SectionHomeProps = {
	ownerName?: string;
	ocupation?: string;
	mainStack?: string[];
} & SectionProps;

const SectionHome = ({
		id,
		background,
		color,
		ownerName,
		ocupation,
		mainStack = []
	}: SectionHomeProps) => {
	return (
		<Section id={id} background={background} color={color}>
			<Styled.Wrapper>
				<p>
					Olá, seja bem-vindo ao meu portfólio.
				</p>
				{ownerName && (
					<Heading as="h1" size="big">
						{ownerName}.
					</Heading>
				)}
				{ocupation && (
					<Heading as="h2" size="big">
						{ocupation}.
					</Heading>
				)}
				{mainStack.length > 0 && (
					<Heading as="h2" size="medium">
						{mainStack.join(" | ")}
					</Heading>
				)}
			</Styled.Wrapper>
		</Section>
	);
};

export default SectionHome;
