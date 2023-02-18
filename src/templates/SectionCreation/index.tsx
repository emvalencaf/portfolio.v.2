// hooks
import { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useFetch } from '../../hooks/useFetch';

// components
import Select from '../../components/Select';
import TextInput from '../../components/TextInput';
import Form from '../../components/Form';
import ImageInput from '../../components/ImageInput';

// icons
import { Code, Person3, Photo, TextFields, Wallpaper, Work } from '@styled-icons/material-outlined';

// styles
import * as Styled from './styles';

// types
import { Settings } from '../../shared-types/settings';
import { Session } from '../../shared-types/session-nextauth';
import Button from '../../components/Button';
import { CreateSectionData } from '../../shared-types/portfolio';
import { FetchResponseProject } from '../../shared-types/project';

export type SectionCreationTemplateProps = {
	allSettings?: Settings[];
};

export type EducationObject = {
	courseType: string;
	title: string;
	institution: string;
	workTime: string;
	resume: string;
	startIn: string;
	endIn?: string;
	urlDownload: string;
}

export type WorkObject = {
	employer: string;
	ocupation: string;
	startIn: string;
	endIn: string;
	jobDescription: string;
}

type HandleChangeElementInArray = <T>(
	currentElement: T,
	elementProp: string,
	newValue: string,
	setState: Dispatch<SetStateAction<T[]>>,
) => void;

const SectionCreationTemplate = ({ allSettings = [] }) => {
	const { data } = useSession();
	const session: Session = data;

	// states
	const [selectedSettings, setSelectedSettings] = useState("");
	const [typeSection, setTypeSection] = useState<"home" | "about" | "skills" | "projects" | "other" | undefined>(undefined);
	const [ocupation, setOcupation] = useState("");
	const [mainStack, setMainStack] = useState("");
	const [backgroundImg, setBackgroundImg] = useState(null);
	const [urlDownload, setUrlDownload] = useState("");
	const [bios, setBios] = useState("");
	const [picture, setPicture] = useState(null);
	const [educationData, setEducationData] = useState<EducationObject[]>([]);
	const [workData, setWorkData] = useState<WorkObject[]>([]);
	const [projects, setProjects] = useFetch<FetchResponseProject[]>(`${process.env.NEXTAUTH_API_URL}/api/projects/`,{
		method: "GET",
		headers: {
			Authorization: `Bearer ${session.accessToken}`
		},
	});

	// handleClick button
	const handleClick = (typeData: string) => {

		if (typeData === "educationData") setEducationData((prevState) => [...prevState, {
			title: "",
			institution: "",
			workTime: "",
			courseType: "",
			startIn: "",
			endIn: "",
			urlDownload: "",
			resume: "",
		}]);

		if (typeData === "workData") setWorkData((prevState) =>
			[...prevState, {
				startIn: "",
				endIn: "",
				jobDescription: "",
				employer: "",
				ocupation: "",
			}]
		)
	};

	// handleSubmit
	const handleSubmit = () => {
		const data: CreateSectionData = {
			title: typeSection,
			icon: typeSection,
		}


		data.ocupation = ocupation;
		data.mainStack = mainStack.split(" ");
	}

	// handleChange
	const handleChangeElementInArray: HandleChangeElementInArray = (currentElement, elementProp, newValue, setState) => {

		if (!currentElement) return;

		if (!elementProp) return;

		if (!newValue) return;

		if (setState) setState((prevState) => prevState.map((element) => {
			if (currentElement === element) {
				console.log("was called")
				element[elementProp] = newValue;
				return {
					...element,
				};
			}

			return element;
		}));
	};

	return (
		<Styled.Wrapper>
			<div>
				<Select
					name="selectedSettings"
					placeholder='choose a portfolio'
					value={selectedSettings}
					onChange={(v) => setSelectedSettings(v)}
				>
					{allSettings.length >= 1 &&
						allSettings.map((settings) => (
							<option
								value={settings.websiteName}
								key={`${settings._id}`}
							>
								{settings.websiteName}
							</option>
						))
					}
				</Select>
				{
					selectedSettings && (
						<Select
							name="typeSection"
							placeholder='choose a type of section'
							value={typeSection}
							onChange={(v) => setTypeSection(v)}
						>
							<option value="home">home</option>
							<option value="about">about</option>
							<option value="sklls">skills</option>
							<option value="projects">projects</option>
						</Select>
					)
				}

			</div>
			<Form
				onSubmit={handleSubmit}
			>

				{
					typeSection === "home" && (
						<>
							<TextInput
								name="ocupation"
								label="fill your ocupation"
								value={ocupation}
								onInputChange={(v) => setOcupation(v)}
								icon={<Work />}
								required={true}
							/>
							<TextInput
								name="mainStack"
								label="fill your main stack if more than one serpate using space, ex: Javascript Python"
								value={mainStack}
								onInputChange={(v) => setMainStack(v)}
								icon={<Code />}
								required={true}
							/>
							<ImageInput
								name="backgroundImg"
								label="background picture"
								onInputFile={(v) => setBackgroundImg(v)}
								value={backgroundImg}
								icon={<Wallpaper />}
							/>
						</>
					)
				}
				{
					typeSection === "about" && (
						<>
							<TextInput
								name="urlDownload"
								label="fill your url download"
								value={urlDownload}
								onInputChange={(v) => setUrlDownload(v)}
								icon={<Person3 />}
								required={true}
							/>
							<TextInput
								name="bios"
								label="give a little resume about yourself"
								value={bios}
								onInputChange={(v) => setBios(v)}
								maxLength={1000}
								required={true}
								as="textarea"
							/>
							<ImageInput
								name="picture"
								label="upload a good picture of yourself"
								value={picture}
								onChange={(v) => setPicture(v)}
								icon={<Photo />}
								required={true}
							/>
							{(educationData && educationData.length >= 1) && educationData.map((education, index) => (
								<div key={`education${index}-key`}>
									<Select
										name={`education${index}`}
										value={education.courseType}
										placeholder={'choose a type of course'}
										onChange={(v) => handleChangeElementInArray<EducationObject>(education, "courseType", v, setEducationData)}
									>
										<option value="higherEducation">
											higher education
										</option>
										<option value="courses">
											courses
										</option>
									</Select>

								</div>

							))
							}
							<Button
								type={"button"}
								onClick={() => handleClick("educationData")}
							>
								Adicionar formação acadêmica
							</Button>
							{
								(workData && workData.length >= 1) && workData.map((work, index) => (
									<div key={`work${index}-key`}>
										<TextInput
											name={`workEmployer${index}`}
											value={work.employer}
											label={`your employer name`}
											onInputChange={(v) => handleChangeElementInArray<WorkObject>(work, "employer", v, setWorkData)}
											required={true}
										/>
										<TextInput
											name={`workOcupation_${index}`}
											value={work.ocupation}
											label={`your ocupation at ${work.employer}'s job`}
											onInputChange={(v) => handleChangeElementInArray<WorkObject>(work, "employer", v, setWorkData)}
											required={true}
										/>
										<TextInput
											name={`workJobDescription_${index}`}
											value={work.jobDescription}
											label={`describe your job at ${work.employer}`}
											onInputChange={(v) => handleChangeElementInArray<WorkObject>(work, "jobDescription", v, setWorkData)}
											required={true}
										/>
										<TextInput
											name={`workStartIn_${index}`}
											value={work.startIn}
											type="date"
											label={`inform the date when you've started working at ${work.employer}`}
											onInputChange={(v) => handleChangeElementInArray<WorkObject>(work, "startIn", v, setWorkData)}
											required={true}
										/>
										<TextInput
											name={`workEndIn_${index}`}
											value={work.endIn}
											type="date"
											label={`inform the date when you've started working at ${work.employer}`}
											onInputChange={(v) => handleChangeElementInArray<WorkObject>(work, "startIn", v, setWorkData)}
											required={true}
										/>
									</div>
								))
							}
							<Button
								type={"button"}
								onClick={() => handleClick("workData")}
							>
								Adicionar experiências de trabalho
							</Button>
						</>
					)
				}
				{
					typeSection === "skills" && (

					)
				}
				{
					typeSection === "projects" && (

					)
				}
			</Form>
		</Styled.Wrapper>
	);
};

export default SectionCreationTemplate;
