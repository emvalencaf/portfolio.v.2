// hooks
import { FormHTMLAttributes, MutableRefObject, SyntheticEvent, useRef, useState } from 'react';

// components
import Button from '../Button';
import Link from 'next/link';

// icons
import { Save, Timer } from "@styled-icons/material-outlined";

// styles
import * as Styled from './styles';

// types
import { SuccessState } from '../../shared-types/async-success-error';
export type FormProps = {
	children: React.ReactNode;
	onSubmit?: (form:MutableRefObject<HTMLFormElement>) => Promise<void>;
	errorMessage?: string;
	successMessage?: SuccessState;
	reference?: HTMLFormElement;
};

const Form = ({ children, onSubmit,
	reference = null, successMessage, errorMessage }: FormProps) => {

	const formRef = useRef<HTMLFormElement | null>(reference);

	const [saving, setSaving] = useState(false);

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
				{
					!!successMessage && (
						<span>
							{successMessage.message}
							<Link href={successMessage.link} legacyBehavior passHref>
								<a>
									right here
								</a>
							</Link>
						</span>
					)
				}
				{
					!!errorMessage && (
						<span>
							{errorMessage}
						</span>
					)
				}
				<Button
					icon={saving ? <Timer />: <Save />}
					disabled={saving}
				>
					{saving? "salvando...": "Salvar"}
				</Button>
			</Styled.ContainerButton>
		</Styled.Form>
	);
};

export default Form;
