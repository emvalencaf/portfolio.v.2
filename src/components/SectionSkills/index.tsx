// hooks
import { useEffect, useState } from 'react';

// components
import Heading from '../Heading';
import Section, { SectionProps } from '../Section';
import TechButton, { TechButtonProps } from '../TechButton';

// styles
import * as Styled from './styles';

// types
type Tech = TechButtonProps & {
	techDescription: string;
}
export type SectionSkillsProps = {
	techs?: Tech[];
} & SectionProps;

const SectionSkills = ({
		id,
		background,
		color,
		techs = [],
	}: SectionSkillsProps) => {
	const [stateTechs, setStateTechs] = useState(techs);
	const [stateTechDescription, setStateTechDescription] = useState("");
	useEffect(()=>{
		const tech = stateTechs.find((tech) => tech.showTechDescription);
		if (tech) setStateTechDescription(()=> tech.techDescription);
	}, [stateTechs]);

	return (
		<Section id={id} background={background} color={color}>
			<Heading as='h2' size='big'>
				Habilidades
			</Heading>
			<Styled.Wrapper>
				<Styled.TechButtonContainer>
					{techs.length >= 1 && (
						techs.map((tech, index) => <TechButton
								{...tech}
								key={`skills-${tech.techName}-${index}`}
								onClick={() => {
									setStateTechs((state) => state.map((stateTech) => {
										stateTech.techName === tech.techName ? stateTech.showTechDescription = true : stateTech.showTechDescription = false;
										return stateTech;
									}))
								}}
							/>)
					)}
				</Styled.TechButtonContainer>
				<Styled.TechDescriptionContainer>
					{!!stateTechDescription && stateTechDescription}
				</Styled.TechDescriptionContainer>
			</Styled.Wrapper>
		</Section>
	);
};

export default SectionSkills;
