import dynamic from 'next/dynamic';

// hooks
import { MutableRefObject, useEffect, useRef, useState } from 'react';
import { useSession } from 'next-auth/react';

// components
import Form, { FormProps } from '../../components/Form';
import Header from '../../components/Header';
import Heading from '../../components/Heading';
import ImageInput from '../../components/ImageInput';
import TextInput from '../../components/TextInput';
const WYSIWYGEditor = dynamic(() => import('../../components/WYSIWYGEditor'), { ssr: false });
import Link from 'next/link';

// icons
import { Cases, Close, Code, Link as LinkIcon, Movie, PhotoAlbum } from "@styled-icons/material-outlined";

// styles
import * as Styled from './styles';
import { Session } from '../../shared-types/session-nextauth';

// types
import { SuccessState } from '../../shared-types/async-success-error';
import ProjectController from '../../api/controller/project';
import React from 'react';
import Button from '../../components/Button';
type SetSuccessMessagesParams = {
	message: string;
	link: string;
}

const CreateProjectTemplate = React.forwardRef(() => {

	// states
	// session data
	const { data } = useSession();
	const session: Session = data;

	// formData
	const [projectTitle, setProjectTitle] = useState("");
	const [urlRepository, setUrlRepository] = useState("");
	const [mainLang, setMainLang] = useState("");
	const [urlDemo, setUrlDemo] = useState("");
	const [resume, setResume] = useState("");
	const [picture, setPicture] = useState(null);
	const [description, setDescription] = useState("");

	// for headear effect
	const [lastScrollYCoords, setLastScrollYCoords] = useState<number>(0);
	const [visibleHeader, setVisibleHeader] = useState<boolean>(true);

	// form
	const [errorMessage, setErrorMessage] = useState("");
	const [successMessage, setSuccessMessage] = useState<SuccessState>();

	// refs
	const formRef = useRef<HTMLFormElement | null>(null);
	const WYSIWYGEditorRef = useRef(null);

	// useEffect for showing header
	useEffect(() => {

		const handleHiddenHeader = () => {
			lastScrollYCoords < window.scrollY ?
				setVisibleHeader(false) :
				setVisibleHeader(true);

			setLastScrollYCoords(window.scrollY);
		};

		window.addEventListener("scroll", handleHiddenHeader);

		return () => {
			window.removeEventListener("scroll", handleHiddenHeader);
		};

	}, [lastScrollYCoords]);

	// handle onSubmit
	const handleCreateProject = async (ref: MutableRefObject<HTMLFormElement>) => {


		// check if there empety propeties
		if (!projectTitle) return setErrorMessage("You must fill the title field");

		if (!resume) return setErrorMessage("You must fill the resume field");

		if (!description) return setErrorMessage("You must fill the description field");

		if (!mainLang) return setErrorMessage("You must fill the main programming language field");

		if (!urlDemo) return setErrorMessage("You must fill the url of the demonstration field");

		if (!urlRepository) return setErrorMessage("You must fill the url of the repository field");

		if (!picture) return setErrorMessage("You must upload an image for the cover of your project");

		// validation of values
		if (
			mainLang !== "java" &&
			mainLang !== "javascript" &&
			mainLang !== "html" &&
			mainLang !== "css" &&
			mainLang !== "python" &&
			mainLang !== "cplus" &&
			mainLang !== "csharp" &&
			mainLang !== "php"
		) return setErrorMessage("Your project must be of one of the set pogramming languages");

		const response = await ProjectController.create(
			ref.current,
			session?.accessToken,
		);
		setSuccessMessage(() => ({
			message: `${response.project.title} was created successfully`,
			link: `/projects/${response.project._id}`,
		}))
		console.log(response.project);
		/*
		try {
			const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/projects/`, {
				method: "POST",
				headers: {
					Authorization: `Bearer ${session.accessToken}`
				},
				body: formData,
			})
				.then((r) => r.json())
				.then((response) => {
					setSuccessMessage({
						message: `${response.project.title} was successfully created you can check the project `,
						link: `/projects/${response.project._id}`,
					});
				})
				.catch(err => {
					console.log(err);
					setErrorMessage(err.message);
				});
			console.log(response);
		} catch(err) {
			console.log(err);
		}*/
	};

	return (
		<Styled.Wrapper>
			<Header menuLinks={[]} logo={{
				altText: "dashboard",
				link: "/admin/"
			}} visible={visibleHeader} />
			<Heading
				as="h1"
				size="big"
				color="quaternary"
				uppercase
			>
				Projeto
			</Heading>
			<p>
				Bem-vindo à seção para adicionar os seus projetos ao seu portfólio.
			</p>
			<Form
				onSubmit={handleCreateProject}
				reference={formRef.current}
				successMessage={successMessage}
				errorMessage={errorMessage}
			>
				<TextInput
					type="text"
					name="title"
					label="Project Title"
					onInputChange={(v) => setProjectTitle(v)}
					value={projectTitle}
					icon={<Cases />}
					required={false}
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
				<TextInput
					type="text"
					name="mainLang"
					label="Main programmer language"
					onInputChange={(v) => setMainLang(v)}
					value={mainLang}
					icon={<Code />}
					required={false}
				/>
				<TextInput
					name="resume"
					label="Resume"
					as="textarea"
					value={resume}
					onInputChange={(v) => setResume(v)}
					required={false}
				/>
				<ImageInput
					name="picture"
					label="Project picture"
					onInputFile={(v) => setPicture(v)}
					value={picture}
					icon={<PhotoAlbum />}
					required={false}
				/>
				<TextInput
					name="description"
					label="Description"
					value={description}
					onInputChange={(v) => setDescription(v)}
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
});

export default CreateProjectTemplate;
