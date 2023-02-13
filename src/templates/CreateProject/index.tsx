// hooks
import { ChangeEvent, MutableRefObject, useEffect, useState } from 'react';

// components
import Form from '../../components/Form';
import Header from '../../components/Header';
import Heading from '../../components/Heading';
import TextInput from '../../components/TextInput';
const WYSIWYGEditor = dynamic(() => import('../../components/WYSIWYGEditor'), { ssr: false });

// icons
import { Cases, Code, Link, Movie, PhotoAlbum } from "@styled-icons/material-outlined";

// styles
import * as Styled from './styles';
import ImageInput from '../../components/ImageInput';
import dynamic from 'next/dynamic';

const CreateProjectTemplate = () => {

	// states
	const [ projectTitle, setProjectTitle ] = useState("");
	const [ urlRepository, setUrlRepository] = useState("");
	const [ mainLang, setMainLang ] = useState("");
	const [ urlDemo, setUrlDemo ] = useState("");
	const [ resume, setResume ] = useState("");
	const [ picture, setPicture ] = useState(null);
	const [ description, setDescription ] = useState("");
	// states
	const [ lastScrollYCoords, setLastScrollYCoords ] = useState<number>(0);
	const [ visibleHeader, setVisibleHeader] = useState<boolean>(true);

	// useEffect
	useEffect(() => {

		const handleHiddenHeader = () => {
			lastScrollYCoords < window.scrollY ?
				setVisibleHeader(false):
				setVisibleHeader(true);

			setLastScrollYCoords(window.scrollY);
		};

		window.addEventListener("scroll", handleHiddenHeader);

		return () => {
			window.removeEventListener("scroll", handleHiddenHeader);
		};

	}, [lastScrollYCoords]);

	// handle onSubmit
	const handleCreateProject = async (ref:MutableRefObject<HTMLFormElement>) => {
		const projectData = {
			title: projectTitle,
			urlDemo,
			urlRepository,
			resume,
			description,
			picture,
		};

		console.log(projectData);
		const formData = new FormData(ref.current);
		console.log(formData.get("title"));
		console.log(`${process.env.NEXT_PUBLIC_API_URL}/api/projects/`)
		const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/projects/`, {
			method: "POST",
			headers: {
				"Content-Type" : "multipart/form-data",
			},
			body: formData,
		}).then((r) => r.json()).catch(e => console.log(e));

		console.log(response);
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

			>
				<TextInput
					type="text"
					name="title"
					label="Project Title"
					onInputChange={(v) => setProjectTitle(v)}
					value={projectTitle}
					icon={<Cases />}
					required={true}
				/>
				<TextInput
					type="text"
					name="urlRepository"
					label="URL of the repository"
					onInputChange={(v) => setUrlRepository(v)}
					value={urlRepository}
					icon={<Link />}
					required={true}
				/>
				<TextInput
					type="text"
					name="urlRepository"
					label="URL of the demonstration"
					onInputChange={(v) => setUrlDemo(v)}
					value={urlDemo}
					icon={<Movie />}
					required={true}
				/>
				<TextInput
					type="text"
					name="mainLang"
					label="Main programmer language"
					onInputChange={(v) => setMainLang(v)}
					value={mainLang}
					icon={<Code />}
					required={true}
				/>
				<TextInput
					name="resume"
					label="Resume"
					as="textarea"
					value={resume}
					onInputChange={(v) => setResume(v)}
					required={true}
				/>
				<ImageInput
					name="picture"
					label="Project picture"
					onInputFile={(v) => setPicture(v)}
					value={picture}
					icon={<PhotoAlbum />}
					required={true}
				/>
				<WYSIWYGEditor
					content={description}
					onChange={(v) => setDescription(v)}
				/>
			</Form>
		</Styled.Wrapper>
	);
};

export default CreateProjectTemplate;
