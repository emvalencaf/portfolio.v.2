// hooks
import { useEffect, useState } from 'react';

// components
import Heading from '../Heading';
import Button from '../Button';

// styles
import * as Styled from './styles';

// types
type Work = {
	employer: string;
	ocupation: string;
	jobDescription: string;
	startIn: string | number;
	endIn: string | number;
	showData?: boolean;
};
export type WorkExperienceProps = {
	workExperience: Work[];
};
// utils
import DateStringFormating from '../../utils/dateString';

const WorkExperience = ({ workExperience = [] }: WorkExperienceProps) => {

	// state
	const [stateWorkExperience, setStateWorkExperience] = useState(workExperience);
	const [content, setContent] = useState<Work>();

	// useEffect
	useEffect(() => {
		setContent(() => stateWorkExperience[0]);
		setStateWorkExperience((s) => s.map((work, index) => {
			if (index === 0) return {
				...work,
				showData: true,
			};

			return {
				...work,
				showData: false,
			};
		}));
	}, []);
	console.log(content);
	return (
		<Styled.Wrapper>
			<Styled.OrderList>
				<li>
					<Heading as="h4" size="small">
						Experiência de trabalho
					</Heading>
					<Styled.OrderList>
						{stateWorkExperience.length >= 1 && stateWorkExperience.map((work, index) => (
							<li key={` ${index} - ${work.startIn} - ${work.employer} - ${work.ocupation}`}>
								<Button
									onClick={() => {
										setStateWorkExperience((prevState) => prevState.map((stateWork) => {
											if (stateWork === work) return {
												...stateWork,
												showData: !stateWork.showData,
											};

											return {
												...stateWork,
												showData: false,
											};
										}))
									}}
									disabled={work.showData}
								>
									{work.employer}
								</Button>
							</li>
						))}
					</Styled.OrderList>
				</li>
			</Styled.OrderList>
			{!!content && (
				<Styled.Content>
					<Heading as="h4" size="small">
						{content.employer}
					</Heading>
					<p>
						Cargo: {content.ocupation}
					</p>
					<p>
						Período: {DateStringFormating.getMonthAndFullYear(content.startIn)}{!!content.endIn ? ` / ${DateStringFormating.getMonthAndFullYear(content.endIn)}` : " - Atualmente"}
					</p>
					<p>
						{content.jobDescription}
					</p>
				</Styled.Content>
			)}
		</Styled.Wrapper>
	);
};

export default WorkExperience;