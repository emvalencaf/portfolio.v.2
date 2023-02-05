// hooks
import { useState } from 'react';

// components
import Bios, { BiosProps } from '../Bios';
import Button from '../Button';
import Heading from '../Heading';
import Section from '../Section';
import WorkExperienceContainer, { WorkExperienceContainerProps } from '../WorkExperienceContainer';

// icons
import { Person3, WorkHistory, LibraryBooks } from '@styled-icons/material-outlined';

// styles
import * as Styled from './styles';

// types
export type SectionAboutProps = {
	id: string;
	bios: BiosProps;
	workExperiences: WorkExperienceContainerProps;
	urlCurriculumDownload: string;
};

const SectionAbout = ({ bios, id, urlCurriculumDownload, workExperiences }: SectionAboutProps) => {
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
		window.open(urlCurriculumDownload);
	}
	return (
		<Styled.Wrapper id={id}>
			<Section>
				<Heading as='h2' size='big'>
					Sobre
				</Heading>
				<Styled.SectionInnerMenu>
					<Button
						icon={<Person3 />}
						disabled={inBios}
						onClick={handleClickInBios}
					>
						Bios
					</Button>
					<Button
						icon={<WorkHistory/>}
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
				{inBios &&
					<Bios  {...bios}/>
				}
				{inWorkExperiences &&
					<WorkExperienceContainer {...workExperiences}  />
				}
				<Button type="submit" onClick={handleClickDownloadButton}>Download Curriculum</Button>
			</Section>
		</Styled.Wrapper>
	);
};

export default SectionAbout;
