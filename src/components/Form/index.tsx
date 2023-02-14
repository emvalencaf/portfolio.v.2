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
export type FormProps = {
	children: React.ReactNode;
	onSubmit?: (form: MutableRefObject<HTMLFormElement>) => Promise<void>;
	errorMessage?: string;
	successMessage?: SuccessState;
	reference?: HTMLFormElement;
};

const Form = ({ children, onSubmit,
	reference = null, successMessage = null, errorMessage }: FormProps) => {

	// ref
	const formRef = useRef<HTMLFormElement | null>(reference);

	// states
	const [ saving, setSaving ] = useState(false);
	const [ visible, setVisible ] = useState(!!successMessage);

	// useEffect
	useEffect(() => {

		setVisible((v) => !v);

	}, [ successMessage, errorMessage]);

	// handle submit event
	const handleSubmit = async (event: SyntheticEvent) => {
		event.preventDefault();

		if (onSubmit) {
			setSaving(true);
			await onSubmit(formRef);
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
					<Button icon={<Close />} onClick={() => setVisible(false)}>

					</Button>
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
