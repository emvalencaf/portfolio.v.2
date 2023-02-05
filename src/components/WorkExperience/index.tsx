// hooks
import { useState } from 'react';

// styles
import Heading from '../Heading';
import * as Styled from './styles';

// types
export type WorkExperienceProps = {
	employer: string;
	ocupation: string;
	jobDescription: string;
	startIn: string | number;
	endIn: string | number;
	showData?: boolean;
};

// utils
import DateStringFormating from '../../utils/dateString';

const WorkExperience = ({ employer, ocupation, jobDescription, startIn, endIn, showData = true }: WorkExperienceProps) => {
	const [stateShowData, setStateShowData] = useState(showData);

	const handleClick = () => {
		setStateShowData((s) => !s);
	}

	return (
		<Styled.Wrapper onClick={handleClick}>
			<Styled.WorkExperienceHeader>
				<Heading as="h3" size="medium">
					{employer}
				</Heading>
				<Styled.DateStringContainer>
					<span>
						{DateStringFormating.getMonthAndFullYear(startIn)}
					</span>
					<Styled.DateStringSeparator />
					<span>
						{DateStringFormating.getMonthAndFullYear(endIn)}
					</span>
				</Styled.DateStringContainer>
			</Styled.WorkExperienceHeader>
			{stateShowData &&
				<Styled.WorkExperienceBody>
					<Heading as="h4" size="small">
						{ocupation}
					</Heading>
					<Styled.JobDescription>
						<p>
							{jobDescription}
						</p>
					</Styled.JobDescription>
				</Styled.WorkExperienceBody>
			}
		</Styled.Wrapper>
	);
};

export default WorkExperience;