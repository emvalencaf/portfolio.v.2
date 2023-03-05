import React from "react";
import dynamic from "next/dynamic";

// hooks
import { MutableRefObject, useEffect, useRef, useState } from "react";
import { useSession } from "next-auth/react";

// components
import Form from "../../components/Form";
import Header from "../../components/Header";
import Heading from "../../components/Heading";
import ImageInput from "../../components/ImageInput";
import TextInput from "../../components/TextInput";
import Select from "../../components/Select";
const WYSIWYGEditor = dynamic(() => import("../../components/WYSIWYGEditor"), {
	ssr: false,
});

// icons
import {
	Cases,
	Link as LinkIcon,
	Movie,
	PhotoAlbum,
} from "@styled-icons/material-outlined";

// styles
import * as Styled from "./styles";
import { Session } from "../../shared-types/session-nextauth";

// types
import ProjectController from "../../api/controller/project";
type ProjectFormProps = {
	id: string;
	titleProps: string;
	resumeProps: string;
	descriptionProps: string;
	mainLangProps:
		| "javascript"
		| "typescript"
		| "html"
		| "css"
		| "python"
		| "java"
		| "cplus"
		| "csharp"
		| "php";
	srcImgProps?: string;
	urlDemoProps: string;
	urlRepositoryProps: string;
	typeForm: "update" | "create";
};

// eslint-disable-next-line react/display-name
const ProjectForm = React.forwardRef(
	({
		id,
		titleProps,
		resumeProps,
		descriptionProps,
		mainLangProps,
		srcImgProps,
		urlDemoProps,
		urlRepositoryProps,
		typeForm,
	}: ProjectFormProps) => {
		// states
		// session data
		const { data } = useSession();
		const session: Session = data;

		// formData
		const [projectTitle, setProjectTitle] = useState(titleProps);
		const [urlRepository, setUrlRepository] = useState(urlRepositoryProps);
		const [mainLang, setMainLang] = useState(mainLangProps);
		const [urlDemo, setUrlDemo] = useState(urlDemoProps);
		const [resume, setResume] = useState(resumeProps);
		const [picture, setPicture] = useState(null);
		const [description, setDescription] = useState(descriptionProps);

		// for headear effect
		const [lastScrollYCoords, setLastScrollYCoords] = useState<number>(0);
		const [visibleHeader, setVisibleHeader] = useState<boolean>(true);

		// refs
		const formRef = useRef<HTMLFormElement | null>(null);
		const WYSIWYGEditorRef = useRef(null);

		// useEffect for showing header
		useEffect(() => {
			const handleHiddenHeader = () => {
				lastScrollYCoords < window.scrollY
					? setVisibleHeader(false)
					: setVisibleHeader(true);

				setLastScrollYCoords(window.scrollY);
			};

			window.addEventListener("scroll", handleHiddenHeader);

			return () => {
				window.removeEventListener("scroll", handleHiddenHeader);
			};
		}, [lastScrollYCoords]);

		// handle onSubmit
		const handleCreateProject = async (
			ref: MutableRefObject<HTMLFormElement>
		) => {
			// if (WYSIWYGEditorRef.current === null ) return;

			const dataProject = {
				title: projectTitle,
				resume,
				mainLang,
				urlRepository,
				urlDemo,
				picture,
				description,
			};

			const formData: FormData = new FormData(ref.current);

			return typeForm === "create"
				? await ProjectController.create(
						dataProject,
						formData,
						session?.accessToken
				  )
				: await ProjectController.update(
						id,
						dataProject,
						formData,
						session?.accessToken
				  );
		};

		return (
			<Styled.Wrapper>
				<Header
					menuLinks={[]}
					logo={{
						altText: "dashboard",
						link: "/admin/",
					}}
					visible={visibleHeader}
				/>
				<Heading as="h1" size="big" color="quaternary" uppercase>
					Projeto
				</Heading>
				<p>
					Bem-vindo à seção para adicionar os seus projetos ao seu
					portfólio.
				</p>
				<Form
					onSubmit={handleCreateProject}
					reference={formRef.current}
				>
					<TextInput
						type="text"
						name="title"
						label="Project Title"
						onInputChange={(v) => setProjectTitle(v)}
						value={projectTitle}
						icon={<Cases />}
						required={false}
						maxLength={50}
					/>
					<TextInput
						type="text"
						name="urlRepository"
						label="URL of the repository"
						onInputChange={(v) => setUrlRepository(v)}
						value={urlRepository}
						icon={<LinkIcon />}
						required={false}
					/>
					<TextInput
						type="text"
						name="urlDemo"
						label="URL of the demonstration"
						onInputChange={(v) => setUrlDemo(v)}
						value={urlDemo}
						icon={<Movie />}
						required={false}
					/>
					<Select
						name="mainLang"
						onChange={(v) => setMainLang(v)}
						placeholder="Main programming or development language"
						value={mainLang}
					>
						<option value="javascript">javascript</option>
						<option value="java">java</option>
						<option value="typescript">typescript</option>
						<option value="html">html</option>
						<option value="css">css</option>
						<option value="python">python</option>
						<option value="java">java</option>
						<option value="cplus">cplus</option>
						<option value="charp">csharp</option>
						<option value="php">php</option>
					</Select>
					<TextInput
						name="resume"
						label="Resume"
						as="textarea"
						value={resume}
						onInputChange={(v) => setResume(v)}
						required={false}
						maxLength={250}
					/>
					<ImageInput
						name="picture"
						label="Project picture"
						onInputFile={(v) => setPicture(v)}
						value={picture}
						icon={<PhotoAlbum />}
						previewImg={srcImgProps}
						required={false}
					/>
					<WYSIWYGEditor
						content={description}
						onChange={(v) => setDescription(v)}
						reference={WYSIWYGEditorRef}
					/>
				</Form>
			</Styled.Wrapper>
		);
	}
);

export default ProjectForm;
