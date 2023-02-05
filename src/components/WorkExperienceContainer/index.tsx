// hooks
import { useRef } from "react";
// components
import WorkExperience, { WorkExperienceProps } from "../WorkExperience";

// styles
import * as Styled from "./styles";

// types
export type WorkExperienceContainerProps = {
	workExperiences?: WorkExperienceProps[];
};

const WorkExperienceContainer = ({ workExperiences = [] }: WorkExperienceContainerProps) => {

	// order by date DESC
	workExperiences.sort((a, b) => Number(a.startIn) - Number(b.startIn));

	return (
		<Styled.Wrapper>
			{workExperiences.length > 0 && (
				<ul>
					{workExperiences.map((work, i) => (
						<li key={`${i}-JOB-${work.startIn}/${work.endIn}`}>
							<WorkExperience {...work} showData={false} />
						</li>
					))}
				</ul>
			)}
		</Styled.Wrapper>
	);
};

export default WorkExperienceContainer;
