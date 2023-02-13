// hooks
import { FormHTMLAttributes, MutableRefObject, SyntheticEvent, useRef, useState } from 'react';

// components
import Button from '../Button';

// icons
import { Save, Timer } from "@styled-icons/material-outlined";

// styles
import * as Styled from './styles';

// types
export type FormProps = {
	children: React.ReactNode;
	onSubmit?: (ref:MutableRefObject<HTMLFormElement>) => Promise<void>;
	reference?: HTMLFormElement;
};

const Form = ({ children, onSubmit,
	reference = null, }: FormProps) => {

	const formRef = useRef(reference);

	const [saving, setSaving] = useState(false);

	// handle submit event
	const handleSubmit = (event: SyntheticEvent) => {
		event.preventDefault();

		if (onSubmit) {
			setSaving(true);
			onSubmit(formRef);
			setSaving(false);
		}
	};

	return (
		<Styled.Form onSubmit={(event: SyntheticEvent) => handleSubmit(event)} ref={formRef}>
			{children}
			<Styled.ContainerButton>
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
