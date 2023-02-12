// hooks
import { useEffect, useState } from 'react';

// components
import Button from '../Button';
import Heading from '../Heading';

// icons
import { Link } from "@styled-icons/material-outlined";

// styles
import * as Styled from './styles';

// types
type Education = {
	title: string;
	workTime: string | number;
	institution: string;
	resume?: string;
	startIn: number | string | null;
	endIn: number | string | null;
	urlDownload: string;
}
export type EducationProps = {
	higherEducation: Education[];
	courses: Education[];
};

// utils
import DateStringFormating from '../../utils/dateString';

const Education = ({ higherEducation = [], courses = [] }: EducationProps) => {
	// type states
	type StateEducation = {
		inFocus: boolean;
	} & Education;

	// map data
	const mapData = (course: Education): StateEducation => ({
		...course,
		inFocus: false,
	});

	// states
	const [stateHigherEducation, setStateHigherEducation] = useState<StateEducation[]>(higherEducation.map(mapData));
	const [stateCourses, setStateCourses] = useState<StateEducation[]>(courses.map(mapData));
	const [content, setContent] = useState<Education>();

	// callback setState
	const callbackSetState = (prevState: StateEducation[], actualState: StateEducation, education: "higherEducation" | "courses"): StateEducation[] => {

		const setInFocusFalse = (course: StateEducation): StateEducation => ({
			...course,
			inFocus: false
		});

		if (education === "higherEducation") setStateCourses((s) => s.map((course) => setInFocusFalse(course)));

		if (education === "courses") setStateHigherEducation((s) => s.map((course) => setInFocusFalse(course)));

		return prevState.map((state) => {

			if (state === actualState) return {
				...state,
				inFocus: !state.inFocus,
			};

			return setInFocusFalse(state);
		});
	}

	// effect
	useEffect(() => {
		setContent(higherEducation[0]);
		setStateHigherEducation((prevState) => prevState.map((course, index) => {
			if (index === 0) return {
				...course,
				inFocus: true,
			};

			return {
				...course,
				inFocus: false,
			}
		}))
	}, []);

	// handle click
	const handleClick = () => {
		window.open(content.urlDownload, "_blank");
	};

	return (
		<Styled.Wrapper>
			<Styled.OrderList>
				{higherEducation.length >= 1 && (
					<li>
						<Heading as="h4" size='small'>
							Ensino Superior
						</Heading>
						<Styled.OrderList>
							{stateHigherEducation.map((course, index) => (
								<li key={`${index} - ${course.title} - ${course.startIn}`}>
									<Button
										onClick={() => {
											setContent(course);
											setStateHigherEducation((prevState) => callbackSetState(prevState, course, "higherEducation"));
										}}
										disabled={course.inFocus}
									>
										{course.title}
									</Button>
								</li>
							))}
						</Styled.OrderList>
					</li>
				)}
				{courses.length >= 1 && (
					<li>
						<Heading as="h4" size='small'>
							Cursos
						</Heading>
						<Styled.OrderList>
							{stateCourses.map((course, index) => (
								<li key={`${index} - ${course.title} - ${course.startIn}`}>
									<Button
										onClick={() => {
											setContent(course);
											setStateCourses((prevState) => callbackSetState(prevState, course, "courses"));
										}}
										disabled={course.inFocus}
									>
										{course.title}
									</Button>
								</li>
							))}
						</Styled.OrderList>
					</li>
				)}
			</Styled.OrderList>
			<Styled.Content>
				{content && (
					<>
						<Heading as="h4" size='small' >
							{content.title}
						</Heading>
						<p>
							Instituição: {content.institution}
						</p>
						<p>
							Período: {DateStringFormating.getMonthAndFullYear(content.startIn)}{!!content.endIn ? ` / ${DateStringFormating.getMonthAndFullYear(content.endIn)}` : " - Atualmente"}
						</p>
						<p>
							Carga Horária: {content.workTime}
						</p>
						{!!content.resume && (
							<>
								<p>
									Breve resumo do curso
								</p>
								<p>
									{content.resume}
								</p>
							</>
						)}
						<Button
							onClick={() => handleClick()}
							disabled={!!content.urlDownload ? false : true}
							icon={<Link />}
						>
							{!!content.urlDownload ? "Veja Certificado" : "Em andamento"}
						</Button>
					</>
				)}
			</Styled.Content>
		</Styled.Wrapper>
	);
};

export default Education;
