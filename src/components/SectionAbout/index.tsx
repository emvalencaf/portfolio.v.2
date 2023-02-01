// components
import HtmlComponent from '../HtmlComponent';
import ProfilePhoto from '../ProfilePhoto';
import Section from '../Section';
import WorkExperienceContainer, { WorkExperienceContainerProps } from '../WorkExperienceContainer';

// styles
import * as Styled from './styles';

// types
export type SectionAboutProps = WorkExperienceContainerProps & {
	id: string;
	bios: string;
	profilePhoto?: {
		srcImg: string;
		altText: string;
	};
};

const SectionAbout = ({ bios, profilePhoto, workExperiences, id }: SectionAboutProps) => {
	return (
		<Styled.Wrapper id={id}>
			<Section>

				<HtmlComponent html={bios} />
				{profilePhoto && (
					<Styled.ProfilePhotoContainer>
						<ProfilePhoto {...profilePhoto} />
					</Styled.ProfilePhotoContainer>
				)}
				<WorkExperienceContainer workExperiences={workExperiences} />
			</Section>
		</Styled.Wrapper>
	);
};

export default SectionAbout;
