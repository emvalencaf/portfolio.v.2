// hooks
import {
	Dispatch,
	MutableRefObject,
	SetStateAction,
	useCallback,
	useEffect,
	useRef,
	useState,
} from "react";
import { useSession } from "next-auth/react";

// components
import Select from "../../components/Select";
import TextInput from "../../components/TextInput";
import Form from "../../components/Form";
import ImageInput from "../../components/ImageInput";

// icons
import {
	Close,
	Code,
	Person3,
	Photo,
	TextFields,
	Wallpaper,
	Work,
} from "@styled-icons/material-outlined";

// styles
import * as Styled from "./styles";

// controllers
import ProjectController from "../../api/controller/project";
import SectionController from "../../api/controller/section";

// types
import { Settings } from "../../shared-types/settings";
import { Session } from "../../shared-types/session-nextauth";
import Button from "../../components/Button";
import { CreateSectionData } from "../../shared-types/section";
import { Project } from "../../shared-types/project";
import CharacterCounter from "../../components/CharacterCounter";
import WYSIWYGEditor from "../../components/WYSIWYGEditor";

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
};

export type WorkObject = {
	employer: string;
	ocupation: string;
	startIn: string;
	endIn: string;
	jobDescription: string;
};

type TechObject = {
	techName: string;
	techDescription: string;
	icon?: string;
};

type HandleChangeElementInArray = <T>(
	currentElement: T,
	elementProp: string,
	newValue: string,
	setState: Dispatch<SetStateAction<T[]>>
) => void;

type ProjectAttached = {
	_id: string;
	title: string;
};

const SectionCreationTemplate = ({
	allSettings = [],
}: SectionCreationTemplateProps) => {
	const { data } = useSession();
	const session: Session = data;

	// states
	// base states to control what type of form it'll be choose by the client
	const [selectedSettings, setSelectedSettings] = useState("");
	const [typeSection, setTypeSection] = useState<
		"home" | "about" | "skills" | "projects" | "other" | undefined
	>(undefined);

	// form states
	//home section
	const [ocupation, setOcupation] = useState("");
	const [mainStack, setMainStack] = useState("");
	const [backgroundImg, setBackgroundImg] = useState(null);
	// about section
	const [bios, setBios] = useState("");
	const [picture, setPicture] = useState(null);
	const [urlDownload, setUrlDownload] = useState("");
	// education data
	const [educationData, setEducationData] = useState<EducationObject[]>([]);
	// work experience data
	const [workData, setWorkData] = useState<WorkObject[]>([]);
	// project section
	const [listSelectProjects, setListSelectProjects] = useState<
		ProjectAttached[]
	>([]);
	const [selectedProject, setSelectedProject] = useState<string>("");
	const [projectsAttached, setProjectsAttched] = useState<ProjectAttached[]>(
		[]
	);
	// skills section
	const [techData, setTechData] = useState<TechObject[]>([]);

	// fetchedProjects states
	const [fetchedProjects, setFetchedProjects] = useState<Project[]>([]);
	const [loadingFetchedProjects, setLoadingFetchedProjects] =
		useState<boolean>(false);
	const [errorMessageFetchedProjects, setErrorMessageFetchedProjects] =
		useState<string>("");

	// ref
	const formRef = useRef<HTMLFormElement | null>(null);
	const WYSIWYGEditorRef = useRef(null);

	// handleGetAllProjects
	const handleGetAllProjects = useCallback(async () => {
		// to avoid multiple request
		if (fetchedProjects.length > 0) return;

		setLoadingFetchedProjects(true);
		try {
			const projects = await ProjectController.getAll(
				session.accessToken
			);
			setFetchedProjects(() => [...projects]);
		} catch (err) {
			setErrorMessageFetchedProjects(err.message);
		}
		setLoadingFetchedProjects(false);
	}, [fetchedProjects.length, session.accessToken]);

	// handleClick button education and work
	const handleClick = (typeData: string) => {
		if (typeData === "educationData")
			setEducationData((prevState) => [
				...prevState,
				{
					title: "",
					institution: "",
					workTime: "",
					courseType: "",
					startIn: "",
					endIn: "",
					urlDownload: "",
					resume: "",
				},
			]);

		if (typeData === "workData")
			setWorkData((prevState) => [
				...prevState,
				{
					startIn: "",
					endIn: "",
					jobDescription: "",
					employer: "",
					ocupation: "",
				},
			]);

		if (typeData === "skills")
			setTechData((prevState) => [
				...prevState,
				{
					techName: "",
					techDescription: "",
				},
			]);

		if (typeData === "projects") {
			if (errorMessageFetchedProjects) return;

			if (!selectedSettings) return;

			setProjectsAttched((prevState) => [
				...prevState,
				JSON.parse(selectedProject),
			]);
			/*
			setProjectsAttched((prevState) => [...prevState, JSON.parse(selectedProject)]);
			// filter the list of projects to exclude the project that already were selected
			setFetchedProjects((prevState) => [...prevState.filter((fetchedProject) => {

				let projectSelected: boolean;

				projectsAttached.forEach((projectAttached) => {
					if (projectAttached._id === fetchedProject._id) projectSelected = true;
				});

				if (projectSelected) console.log(`${fetchedProject.title} - ${fetchedProject._id} was exclude`);

				return projectSelected? false: true;
			})])*/
		}
	};

	// handleSubmit
	const handleSubmit = async (ref: MutableRefObject<HTMLFormElement>) => {
		const data: CreateSectionData = {
			title: typeSection,
			icon: typeSection,
		};

		if (typeSection === "home") {
			data.ocupation = ocupation;
			data.mainStack = mainStack.split(" ");
		}

		if (typeSection === "about") {
			data.biosData = {
				bios: bios,
				profilePhoto: {
					srcImg: "",
					altText: "profile picture",
				},
			};
			data.educationData = {
				higherEducation: educationData.filter((education) => {
					if (education.courseType !== "higherEducation")
						return false;
					const {
						title,
						workTime,
						startIn,
						endIn,
						institution,
						resume,
						urlDownload,
					} = education;
					return {
						title,
						workTime,
						startIn: startIn,
						endIn: endIn,
						institution,
						resume,
						urlDownload,
					};
				}),
				courses: educationData.filter((education) => {
					if (education.courseType !== "courses") return false;
					const {
						title,
						workTime,
						startIn,
						endIn,
						institution,
						resume,
						urlDownload,
					} = education;
					return {
						title,
						workTime,
						startIn: startIn,
						endIn: endIn,
						institution,
						resume,
						urlDownload,
					};
				}),
			};
			data.workData = {
				workExperience: workData,
			};
		}

		if (typeSection === "skills") {
			data.techs = techData;
		}

		if (typeSection === "projects") {
			data.projects = [];
			projectsAttached.forEach((project) => {
				data.projects.push(project._id);
			});
		}

		const formData = new FormData(ref.current);

		return await SectionController.create(
			data,
			formData,
			session.accessToken,
			typeSection,
			selectedSettings
		);
	};

	// handleChange
	const handleChangeElementInArray: HandleChangeElementInArray = (
		currentElement,
		elementProp,
		newValue,
		setState
	) => {
		if (!currentElement) return;

		if (!elementProp) return;

		if (!newValue) return;

		if (setState)
			setState((prevState) =>
				prevState.map((element) => {
					if (currentElement === element) {
						element[elementProp] = newValue;
						return {
							...element,
						};
					}

					return element;
				})
			);
	};

	// effects
	useEffect(() => {
		if (typeSection === "projects") handleGetAllProjects();
	}, [handleGetAllProjects, typeSection]);
	// it'll render the list of project into the select based on the fetched projects
	useEffect(() => {
		setListSelectProjects(() => [...fetchedProjects]);
	}, [fetchedProjects]);

	// it'll filter the list of the project into the select based on the selected projects
	useEffect(() => {
		setListSelectProjects((prevState) =>
			prevState.filter((listProject) => {
				let projectSelected = true;

				projectsAttached.forEach((projectAttached) => {
					if (projectAttached._id === listProject._id)
						projectSelected = false;
				});

				return projectSelected;
			})
		);
	}, [projectsAttached]);

	return (
		<Styled.Wrapper>
			<Styled.ContainerSectionForm>
				<Styled.ContainerSettingsForm>
					<Select
						name="selectedSettings"
						placeholder="choose a portfolio"
						value={selectedSettings}
						onChange={(v) => setSelectedSettings(v)}
					>
						{allSettings.length >= 1 &&
							allSettings.map((settings) => (
								<option
									value={settings._id}
									key={`${settings._id}`}
								>
									{settings.websiteName}
								</option>
							))}
					</Select>
					{selectedSettings && (
						<Select
							name="typeSection"
							placeholder="choose a type of section"
							value={typeSection}
							onChange={(v) => {
								setTypeSection(v);
							}}
						>
							<option value="home">home</option>
							<option value="about">about</option>
							<option value="skills">skills</option>
							<option value="projects">projects</option>
						</Select>
					)}
				</Styled.ContainerSettingsForm>

				<Form onSubmit={handleSubmit} reference={formRef.current}>
					{typeSection === "home" && (
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
					)}
					{typeSection === "about" && (
						<>
							<TextInput
								name="urlDownload"
								label="fill your curriculum url download"
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
								icon={<TextFields />}
								maxLength={1000}
								required={true}
								as="textarea"
							/>
							<WYSIWYGEditor
								content={bios}
								onChange={(v) => setBios(v)}
								reference={WYSIWYGEditorRef}
								maxLength={1000}
							/>
							<ImageInput
								name="picture"
								label="upload a good picture of yourself"
								value={picture}
								onChange={(v) => setPicture(v)}
								icon={<Photo />}
								required={true}
							/>
							{educationData &&
								educationData.length >= 1 &&
								educationData.map((education, index) => (
									<Styled.ContainerDynamicInputSections
										key={`education${index}-key`}
									>
										<Styled.ContainerButton>
											<Button
												type="button"
												onClick={() => {
													setEducationData(
														(prevState) =>
															prevState.filter(
																(
																	educationToDelete
																) => {
																	let toDelete =
																		true;

																	if (
																		educationToDelete ===
																		education
																	)
																		toDelete =
																			false;

																	return toDelete;
																}
															)
													);
												}}
												icon={<Close />}
											/>
										</Styled.ContainerButton>
										<Select
											name={`education${index}`}
											value={education.courseType}
											placeholder={
												"choose a type of course"
											}
											onChange={(v) =>
												handleChangeElementInArray<EducationObject>(
													education,
													"courseType",
													v,
													setEducationData
												)
											}
										>
											<option value="higherEducation">
												higher education
											</option>
											<option value="courses">
												courses
											</option>
										</Select>
										<TextInput
											name={`title${index}`}
											value={education.title}
											label="inform the title of the course"
											onInputChange={(v) =>
												handleChangeElementInArray<EducationObject>(
													education,
													"title",
													v,
													setEducationData
												)
											}
											maxLength={50}
											required={true}
										/>
										<CharacterCounter
											maxLeng={50}
											currentLeng={education.title.length}
										/>
										<TextInput
											name={`institution${index}`}
											value={education.institution}
											label="inform the institution"
											onInputChange={(v) =>
												handleChangeElementInArray<EducationObject>(
													education,
													"institution",
													v,
													setEducationData
												)
											}
											maxLength={50}
											required={true}
										/>
										<CharacterCounter
											maxLeng={50}
											currentLeng={
												education.institution.length
											}
										/>
										<CharacterCounter
											maxLeng={250}
											currentLeng={
												education.resume.length
											}
										/>
										<TextInput
											name={`startIn${index}`}
											value={education.startIn}
											label="inform when the course start"
											onInputChange={(v) =>
												handleChangeElementInArray<EducationObject>(
													education,
													"startIn",
													v,
													setEducationData
												)
											}
											type="date"
											required={true}
										/>
										<TextInput
											name={`endIn${index}`}
											value={education.endIn}
											label="inform if the course ends"
											onInputChange={(v) =>
												handleChangeElementInArray<EducationObject>(
													education,
													"endIn",
													v,
													setEducationData
												)
											}
											type="date"
											required={false}
										/>
										<TextInput
											name={`educationUrlDownload${index}`}
											label="inform the url of the certificate course"
											onInputChange={(v) =>
												handleChangeElementInArray<EducationObject>(
													education,
													"urlDownload",
													v,
													setEducationData
												)
											}
											required={false}
										/>
										<TextInput
											name={`resume${index}`}
											value={education.resume}
											label="inform a resume about the course"
											onInputChange={(v) =>
												handleChangeElementInArray<EducationObject>(
													education,
													"title",
													v,
													setEducationData
												)
											}
											as="textarea"
											icon={<TextFields />}
											maxLength={250}
											required={true}
										/>
									</Styled.ContainerDynamicInputSections>
								))}
							<Button
								type={"button"}
								onClick={() => handleClick("educationData")}
							>
								Adicionar formação acadêmica
							</Button>
							{workData &&
								workData.length >= 1 &&
								workData.map((work, index) => (
									<Styled.ContainerDynamicInputSections
										key={`work${index}-key`}
									>
										<Styled.ContainerButton>
											<Button
												type="button"
												onClick={() => {
													setWorkData((prevState) =>
														prevState.filter(
															(workToDelete) => {
																let toDelete =
																	true;

																if (
																	workToDelete ===
																	work
																)
																	toDelete =
																		false;

																return toDelete;
															}
														)
													);
												}}
												icon={<Close />}
											/>
										</Styled.ContainerButton>
										<TextInput
											name={`workEmployer${index}`}
											value={work.employer}
											label={`your employer name`}
											onInputChange={(v) =>
												handleChangeElementInArray<WorkObject>(
													work,
													"employer",
													v,
													setWorkData
												)
											}
											required={true}
											maxLength={50}
										/>
										<CharacterCounter
											maxLeng={50}
											currentLeng={work.employer.length}
										/>
										<TextInput
											name={`workOcupation_${index}`}
											value={work.ocupation}
											label={`your ocupation at ${work.employer}'s job`}
											onInputChange={(v) =>
												handleChangeElementInArray<WorkObject>(
													work,
													"ocupation",
													v,
													setWorkData
												)
											}
											required={true}
											maxLength={50}
										/>
										<CharacterCounter
											maxLeng={50}
											currentLeng={work.ocupation.length}
										/>
										<TextInput
											name={`workJobDescription_${index}`}
											value={work.jobDescription}
											label={`describe your job at ${work.employer}`}
											onInputChange={(v) =>
												handleChangeElementInArray<WorkObject>(
													work,
													"jobDescription",
													v,
													setWorkData
												)
											}
											required={true}
											as="textarea"
											icon={<TextFields />}
											maxLength={250}
										/>
										<CharacterCounter
											maxLeng={250}
											currentLeng={
												work.jobDescription.length
											}
										/>
										<TextInput
											name={`workStartIn_${index}`}
											value={work.startIn}
											type="date"
											label={`inform the date when you've started working at ${work.employer}`}
											onInputChange={(v) =>
												handleChangeElementInArray<WorkObject>(
													work,
													"startIn",
													v,
													setWorkData
												)
											}
											required={true}
										/>
										<TextInput
											name={`workEndIn_${index}`}
											value={work.endIn}
											type="date"
											label={`inform the date when you've started working at ${work.employer}`}
											onInputChange={(v) =>
												handleChangeElementInArray<WorkObject>(
													work,
													"startIn",
													v,
													setWorkData
												)
											}
											required={false}
										/>
									</Styled.ContainerDynamicInputSections>
								))}
							<Button
								type={"button"}
								onClick={() => handleClick("workData")}
							>
								Adicionar experiências de trabalho
							</Button>
						</>
					)}
					{typeSection === "skills" && (
						<>
							<div>
								{techData.length >= 1 &&
									techData.map((tech, index) => (
										<Styled.ContainerDynamicInputSections
											key={`div-tech-${index}`}
										>
											<Styled.ContainerButton>
												<Button
													type="button"
													onClick={() => {
														setTechData(
															(prevState) =>
																prevState.filter(
																	(
																		techToDelete
																	) => {
																		let toDelete =
																			true;

																		if (
																			techToDelete ===
																			tech
																		)
																			toDelete =
																				false;

																		return toDelete;
																	}
																)
														);
													}}
													icon={<Close />}
												/>
											</Styled.ContainerButton>
											<TextInput
												name={`techName${index}`}
												value={tech.techName}
												label={`name the tech`}
												onInputChange={(v) =>
													handleChangeElementInArray<TechObject>(
														tech,
														"techName",
														v,
														setTechData
													)
												}
												required={true}
											/>
											<TextInput
												name={`techDescription${index}`}
												label={`describe the way you this tech`}
												onInputChange={(v) =>
													handleChangeElementInArray<TechObject>(
														tech,
														"techDescription",
														v,
														setTechData
													)
												}
												required={true}
												as="textarea"
												icon={<TextFields />}
											/>
										</Styled.ContainerDynamicInputSections>
									))}
							</div>
							<Button
								type={"button"}
								onClick={() => handleClick("skills")}
							>
								Adicionar tecnologia
							</Button>
						</>
					)}
					{typeSection === "projects" && (
						<div>
							<Styled.DisplayProjectSelection>
								<ul>
									{projectsAttached.length >= 1 &&
										projectsAttached.map((project) => (
											<li key={`attached-${project._id}`}>
												{project.title}
												<Styled.ContainerButton>
													<Button
														type="button"
														onClick={() => {
															setProjectsAttched(
																(prevState) =>
																	prevState.filter(
																		(
																			projectAttachedToDelete
																		) => {
																			let toDelete =
																				true;

																			if (
																				projectAttachedToDelete ===
																				project
																			)
																				toDelete =
																					false;

																			return toDelete;
																		}
																	)
															);

															setListSelectProjects(
																(prevState) => [
																	...prevState,
																	project,
																]
															);
														}}
														icon={<Close />}
													/>
												</Styled.ContainerButton>
											</li>
										))}
								</ul>
							</Styled.DisplayProjectSelection>
							{fetchedProjects.length >= 1 && (
								<Select
									name="selectedProject"
									placeholder="choose your project"
									value={selectedProject}
									onChange={(v) => setSelectedProject(v)}
								>
									{listSelectProjects.map(
										(fetchedProject) => (
											<option
												key={`${fetchedProject._id}`}
												value={JSON.stringify({
													_id: fetchedProject._id,
													title: fetchedProject.title,
												})}
											>
												{fetchedProject.title}
											</option>
										)
									)}
								</Select>
							)}
							<Button
								type="button"
								onClick={() => handleClick(typeSection)}
								disabled={loadingFetchedProjects}
							>
								Selecionar projeto
							</Button>
						</div>
					)}
				</Form>
			</Styled.ContainerSectionForm>
		</Styled.Wrapper>
	);
};

export default SectionCreationTemplate;
