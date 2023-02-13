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

// icons
import { Cases, Code, Link, Movie, PhotoAlbum } from "@styled-icons/material-outlined";

// styles
import * as Styled from './styles';
import { Session } from '../../shared-types/session-nextauth';

// types
import { SuccessState } from '../../shared-types/async-success-error';


const CreateProjectTemplate = () => {

	// states
		// session data
	const { data } = useSession();
	const session: Session = data;

		// formData
	const [ projectTitle, setProjectTitle ] = useState("");
	const [ urlRepository, setUrlRepository] = useState("");
	const [ mainLang, setMainLang ] = useState("");
	const [ urlDemo, setUrlDemo ] = useState("");
	const [ resume, setResume ] = useState("");
	const [ picture, setPicture ] = useState(null);
	const [ description, setDescription ] = useState("");

		// for headear effect
	const [ lastScrollYCoords, setLastScrollYCoords ] = useState<number>(0);
	const [ visibleHeader, setVisibleHeader] = useState<boolean>(true);

		// form
	const [ errorMessage, setErrorMessage ] = useState("");
	const [ successMessage, setSuccessMessage ] = useState<SuccessState>(null);

	// refs
	const formRef = useRef<HTMLFormElement | null>(null);
	const WYSIWYGEditorRef = useRef(null);

	// useEffect for showing header
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
	console.log(picture);
	// handle onSubmit
	const handleCreateProject = async (ref:MutableRefObject<HTMLFormElement>) => {

		const projectData = {
			title: projectTitle,
			urlDemo,
			urlRepository,
			resume,
			description,
			mainLang,
			picture,
		};

		const formData = new FormData(ref.current);

		try {

			formData.forEach((entry, key) => {
				console.log(key, " : ", entry);
			});
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

		} catch(err) {
			console.log(err);
		}
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
					icon={<Link />}
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
					required={false}
					label="Conteúdo"
					value={description}
					onInputChange={(v) => (v)}
				/>
				<WYSIWYGEditor
					content={description}
					onChange={(v) => setDescription(v)}
					reference={WYSIWYGEditorRef}
				/>
			</Form>
		</Styled.Wrapper>
	);
};

export default CreateProjectTemplate;
