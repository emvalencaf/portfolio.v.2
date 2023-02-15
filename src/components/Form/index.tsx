// hooks
import { FormHTMLAttributes, MutableRefObject, SyntheticEvent, useEffect, useRef, useState } from 'react';

// components
import Button from '../Button';
import Link from 'next/link';

// icons
import { Close, Save, Timer } from "@styled-icons/material-outlined";

// styles
import * as Styled from './styles';

// types
import { SuccessState } from '../../shared-types/async-success-error';
import { Portfolio } from '../../shared-types/portfolio';
import { ProjectControllerCreate } from '../../shared-types/project';
import { SettingsControllerCreate } from '../../api/controller/settings';

export type FormProps = {
	children: React.ReactNode;
	onSubmit?: (form: MutableRefObject<HTMLFormElement>) => Promise<ProjectControllerCreate | SettingsControllerCreate>;
	errorMessage?: string;
	successMessage?: SuccessState;
	reference?: HTMLFormElement;
};

const Form = ({ children, onSubmit,
	reference = null }: FormProps) => {

	// ref
	const formRef = useRef<HTMLFormElement | null>(reference);

	// states
	const [errorMessage, setErrorMessage] = useState("");
	const [successMessage, setSuccessMessage] = useState<SuccessState>();
	const [ saving, setSaving ] = useState(false);
	const [ visible, setVisible ] = useState(!!successMessage);

	// handle submit event
	const handleSubmit = async (event: SyntheticEvent) => {
		event.preventDefault();

		if (onSubmit) {

			setSaving(true);

			try {
				console.log("aqui")
				const response = await onSubmit(formRef);

				const { data, successMessage } = response;

				if (data) setSuccessMessage(successMessage);
				setVisible(true);

			} catch(err){
				setErrorMessage(err.message);
				setVisible(true);
			}
			setSaving(false);
		}
	};

	return (
		<Styled.Form onSubmit={(event: SyntheticEvent) => handleSubmit(event)} ref={formRef}>
			{children}
			<Styled.ContainerButton>
			<Styled.Alert visible={visible} isSuccess={!!successMessage}>
					{
						<span>
							{!!successMessage ?
								(
									<>
										{successMessage.message}
										<Link href={successMessage.link} passHref legacyBehavior>
											<a rel="internal" target="_self">
												click here
											</a>
										</Link>
									</>
								)
								: (
									!!errorMessage && errorMessage
								)
							}
						</span>
					}
					<Styled.CloseButton onClick={() => setVisible(false)}> {<Close />}</Styled.CloseButton>
				</Styled.Alert>
				<Button
					disabled={saving}
				>
					{saving ? "salvando..." : "Salvar"}
				</Button>
			</Styled.ContainerButton>
		</Styled.Form>
	);
};

export default Form;
