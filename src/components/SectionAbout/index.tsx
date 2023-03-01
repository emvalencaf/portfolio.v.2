// hooks
import { useState } from "react";

// components
import Bios, { BiosProps } from "../Bios";
import Button from "../Button";
import Heading from "../Heading";
import Section, { SectionProps } from "../Section";
import Education, { EducationProps } from "../Education";
import WorkExperience, { WorkExperienceProps } from "../WorkExperience";

// icons
import {
	Person3,
	WorkHistory,
	LibraryBooks,
} from "@styled-icons/material-outlined";

// styles
import * as Styled from "./styles";

// types
export type SectionAboutProps = {
	biosData: BiosProps;
	workData: WorkExperienceProps;
	urlDownload: string;
	educationData: EducationProps;
} & SectionProps;

const SectionAbout = ({
	id,
	biosData,
	urlDownload,
	workData,
	educationData,
	background,
	color,
}: SectionAboutProps) => {
	// states
	const [inBios, setInBios] = useState(true);
	const [inWorkExperiences, setInWorkExperiences] = useState(false);
	const [inAcademics, setInAcademics] = useState(false);
	// handleClick

	const handleClickInBios = () => {
		setInBios(true);
		setInWorkExperiences(false);
		setInAcademics(false);
	};
	const handleClickInWorkExperiences = () => {
		setInBios(false);
		setInWorkExperiences(true);
		setInAcademics(false);
	};
	const handleClickInAcademics = () => {
		setInBios(false);
		setInWorkExperiences(false);
		setInAcademics(true);
	};
	const handleClickDownloadButton = () => {
		window.open(urlDownload);
	};
	return (
		<Section id={id} background={background} color={color}>
			<Heading as="h2" size="big">
				Sobre
			</Heading>
			<Styled.Wrapper>
				<Styled.SectionInnerMenu>
					<Button
						icon={<Person3 />}
						disabled={inBios}
						onClick={handleClickInBios}
					>
						Bios
					</Button>
					<Button
						icon={<WorkHistory />}
						disabled={inWorkExperiences}
						onClick={handleClickInWorkExperiences}
					>
						Work experiences
					</Button>
					<Button
						icon={<LibraryBooks />}
						disabled={inAcademics}
						onClick={handleClickInAcademics}
					>
						Academics
					</Button>
				</Styled.SectionInnerMenu>
				{inBios && <Bios {...biosData} />}
				{inWorkExperiences && <WorkExperience {...workData} />}
				{inAcademics && <Education {...educationData} />}
				<Button type="submit" onClick={handleClickDownloadButton}>
					Download Curriculum
				</Button>
			</Styled.Wrapper>
		</Section>
	);
};

export default SectionAbout;
