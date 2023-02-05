// components
import Bios, { BiosProps } from '../Bios';
import Heading from '../Heading';
import Section from '../Section';

// styles
import * as Styled from './styles';

// types
export type SectionAboutProps = {
	id: string;
	bios: BiosProps;
};

const SectionAbout = ({ bios, id }: SectionAboutProps) => {
	return (
		<Styled.Wrapper id={id}>
			<Section>
				<Heading as='h2' size='big'>
					Sobre
				</Heading>
				<Bios  {...bios}/>
			</Section>
		</Styled.Wrapper>
	);
};

export default SectionAbout;
