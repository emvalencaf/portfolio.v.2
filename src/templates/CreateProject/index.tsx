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
import Select from '../../components/Select';
const WYSIWYGEditor = dynamic(() => import('../../components/WYSIWYGEditor'), { ssr: false });


// icons
import { Cases, Code, Link as LinkIcon, Movie, PhotoAlbum } from "@styled-icons/material-outlined";

// styles
import * as Styled from './styles';
import { Session } from '../../shared-types/session-nextauth';

// types
import ProjectController from '../../api/controller/project';
import React from 'react';
import { Project } from '../../shared-types/project';
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
		console.log("no onSubmit");

		// if (WYSIWYGEditorRef.current === null ) return;

		const dataProject = {
			title: projectTitle,
			resume,
			mainLang,
			urlRepository,
			urlDemo,
			picture,
			description
		};

		const formData: FormData = new FormData(formRef.current);

		return await ProjectController.create(
			dataProject,
			formData,
			session?.accessToken,
		);
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
					label="Main programming or development language"
					onInputChange={(v) => setMainLang(v)}
					value={mainLang}
					icon={<Code />}
					required={false}
				/>
				<Select
					name="mainLang"
					onChange={(v) => setMainLang(v)}
					placeholder="Main programming or development language"

				>
					<option value="javascript">
						javascript
					</option>
					<option value="java">
						java
					</option>
					<option value="typescript">
						typescript
					</option>
					<option value="html">
						html
					</option>
					<option value="css">
						css
					</option>
					<option value="python">
						python
					</option>
					<option value="java">
						java
					</option>
					<option value="cplus">
						cplus
					</option>
					<option value="charp">
						csharp
					</option>
					<option value="php">
						php
					</option>
				</Select>
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
