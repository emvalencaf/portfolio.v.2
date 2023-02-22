// hooks
import { useEffect, useState } from "react";

// components
import Heading from "../Heading";
import Section, { SectionProps } from "../Section";
import TechButton, { TechButtonProps } from "../TechButton";

// styles
import * as Styled from "./styles";

// types
type Tech = TechButtonProps & {
	techDescription: string;
};
export type SectionSkillsProps = {
	techs?: Tech[];
} & SectionProps;

const SectionSkills = ({
	id,
	background,
	color,
	techs = [],
}: SectionSkillsProps) => {
	// states
	const [stateTechs, setStateTechs] = useState<Tech[]>(techs);
	const [stateTechDescription, setStateTechDescription] = useState("");

	// Effects
	// The first element of the array will have it's description showed
	useEffect(() => {
		setStateTechs((prevState) =>
			prevState.map((tech, index) => {
				if (index === 0) tech.showTechDescription = true;

				return tech;
			})
		);
	}, []);
	// it will set the tech description into the description state of the tech related to the button clicked
	useEffect(() => {
		const tech = stateTechs.find((tech) => tech.showTechDescription);
		if (tech) setStateTechDescription(() => tech.techDescription);
	}, [stateTechs]);

	return (
		<Section id={id} background={background} color={color}>
			<Heading as="h2" size="big">
				Habilidades
			</Heading>
			<Styled.Wrapper>
				<Styled.TechButtonContainer>
					{techs.length >= 1 &&
						techs.map((tech, index) => (
							<TechButton
								{...tech}
								key={`skills-${tech.techName}-${index}`}
								onClick={() => {
									setStateTechs((state) =>
										state.map((stateTech) => {
											stateTech.techName === tech.techName
												? (stateTech.showTechDescription =
														true)
												: (stateTech.showTechDescription =
														false);
											return stateTech;
										})
									);
								}}
							/>
						))}
				</Styled.TechButtonContainer>
				<Styled.TechDescriptionContainer>
					{!!stateTechDescription && <p>{stateTechDescription}</p>}
				</Styled.TechDescriptionContainer>
			</Styled.Wrapper>
		</Section>
	);
};

export default SectionSkills;
