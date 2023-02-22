// components
import Heading from "../Heading";
import Section from "../Section";

// styles
import * as Styled from "./styles";

// types
export type SectionContactProps = {
	id: string;
};

const SectionContact = ({ id }: SectionContactProps) => {
	return (
		<Section id={id}>
			<Heading as="h2" size="big">
				Contato
			</Heading>
			<Styled.Wrapper></Styled.Wrapper>
		</Section>
	);
};

export default SectionContact;
