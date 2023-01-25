// components
import Heading from '../Heading';
import Section from '../Section';

// styles
import * as Styled from './styles';

// types
export type SectionHomeProps = {
	ownerName: string;
	ocupation: string;
	mainStack: string[];
};

const SectionHome = ({ ownerName, ocupation, mainStack = [] }: SectionHomeProps) => {
	return (
		<Styled.Wrapper id="#">
			<Section>
				<p>
					Olá, seja bem-vindo ao meu portfólio.
				</p>
				<Heading as="h1" size="big">
					{ownerName}.
				</Heading>
				<Heading as="h2" size="big">
					{ocupation}.
				</Heading>
				{mainStack.length > 0 && (
					<Heading as="h2" size="medium">
						{mainStack.join(" | ")}
					</Heading>
				)}
			</Section>
		</Styled.Wrapper>
	);
};

export default SectionHome;
