// components
import Heading from '../Heading';
import Section from '../Section';

// styles
import * as Styled from './styles';

// types
export type SectionHomeProps = {
	id: string;
	ownerName?: string;
	ocupation?: string;
	mainStack?: string[];
};

const SectionHome = ({ id, ownerName, ocupation, mainStack = [] }: SectionHomeProps) => {
	return (
		<Section id={id}>
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
