// styles
import * as Styled from "./styles";

// types
type Work = {
	ocupation: string;
	employer: string;
	description: string;
	date: string;
};
export type WorkExperienceContainerProps = {
	workExperiences?: Work[];
};

const WorkExperienceContainer = ({ workExperiences = [] }: WorkExperienceContainerProps) => {
	return (
		<Styled.Wrapper>
			{ workExperiences.length > 0 && (
				<ul>
					{workExperiences.map((work) => <Styled.WorkContainer>
						<span>{work.ocupation} em {work.employer}</span>
						<span>
							{work.description}
						</span>
						<span>{work.date}</span>
					</Styled.WorkContainer>)}
				</ul>
			)}
		</Styled.Wrapper>
	);
};

export default WorkExperienceContainer;
