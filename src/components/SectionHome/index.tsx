// components
import Heading from '../Heading';
import Section from '../Section';

// styles
import * as Styled from './styles';

// types
export type SectionHomeProps = {
	children: React.ReactNode;
	ownerName: string;
};

const SectionHome = ({ children, ownerName }: SectionHomeProps) => {
	return (
		<Styled.Wrapper id="#">
			<Section>
				<Heading size="small" as="h1">Olá, meu nome é <span>{ownerName}</span></Heading>
				<Heading size="big">Desenvolvedor WEB Júnior</Heading>
			</Section>
		</Styled.Wrapper>
	);
};

export default SectionHome;
