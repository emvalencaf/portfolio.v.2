// hooks
import { useState } from 'react';

// components
import Button from '../Button';
import Heading from '../Heading';

// styles
import * as Styled from './styles';

// types
type Education = {
	title: string;
	workTime: string | number;
	institution: string;
	startIn: number;
	endIn: number;
	urlDownload: string;
}
export type EducationProps = {
	higherEducation: Education[];
	courses: Education[];
};

// utils
import DateStringFormating from '../../utils/dateString';

const Education = ({ higherEducation = [], courses = [] }: EducationProps) => {
	// states
	const [content, setContent] = useState<Education>();

	return (
		<Styled.Wrapper>
			<Styled.OrderList>
				{higherEducation.length >= 1 && (
					<li>
						<Heading as="h4" size='small'>
							Ensino Superior
						</Heading>
						<Styled.OrderList>
							{higherEducation.map((course, index) => (
								<li key={`${index} - ${course.title} - ${course.startIn}`}>
									<Button
										onClick={() => setContent(course)}
									>
										{course.title}
									</Button>
								</li>
							))}
						</Styled.OrderList>
					</li>
				)}
				{courses.length >= 1 && (
					<Styled.OrderList>
						<li>
							<Heading as="h4" size='small'>
								Cursos
							</Heading>
							<Styled.OrderList>
								{courses.map((course, index) => (
									<li key={`${index} - ${course.title} - ${course.startIn}`}>
										<Button
											onClick={() => setContent(course)}
										>
											{course.title}
										</Button>
									</li>
								))}
							</Styled.OrderList>
						</li>
					</Styled.OrderList>
				)}
			</Styled.OrderList>
			<Styled.Content>
				{content && (
					<>
						<Heading as="h4" size='medium' >
							{content.title}
						</Heading>
						<p>
							{content.institution}
						</p>
						<p>
							{DateStringFormating.getMonthAndFullYear(content.startIn)}{!!content.endIn ? ` / ${DateStringFormating.getMonthAndFullYear(content.endIn)}`: " - Atualmente"}
						</p>
						<p>
							{content.workTime}
						</p>
						{!!content.endIn &&
							<a href={content.urlDownload}>
								Ver Certificado
							</a>
						}
					</>
				)}
			</Styled.Content>
		</Styled.Wrapper>
	);
};

export default Education;
