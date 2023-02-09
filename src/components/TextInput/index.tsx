// hooks
import { InputHTMLAttributes, useRef } from 'react';

// styles
import * as Styled from './styles';

// types
export type TextInputProps = {
	label: string;
	name: string;
	type?: string;
	onInputChange?: (value: string) => void;
	disabled?: boolean;
	errorMessage?: string;
	value?: string;
	icon?: React.ReactNode;
	as?: "input" | "textarea";
	reference?: HTMLInputElement;
} & InputHTMLAttributes<HTMLInputElement>;

const TextInput = ({
		label,
		name,
		type = "text",
		onInputChange,
		disabled = false,
		errorMessage = "",
		value = "",
		icon,
		as = "input",
		reference = null,
	}: TextInputProps) => {
		// states
		const inputRef = useRef(reference);

		// synthetic event handler
		const handleChange = () => {
			const value = inputRef.current.value;

			if (onInputChange) onInputChange(value);
		};


	return (
		<Styled.Wrapper>
			<Styled.InputWrapper errorMessage={errorMessage}>
				<Styled.Input
					type={type}
					name={name}
					id={name}
					disabled={disabled}
					ref={inputRef}
					onChange={handleChange}
					placeholder={label}
					errorMessage={errorMessage}
					as={as}
					defaultValue={value}
				/>

				<Styled.Label htmlFor={name} element={as}>
					{label}
				</Styled.Label>
				{!!icon && as !== "textarea" && icon}
			</Styled.InputWrapper>

			{!!errorMessage && (
				<Styled.ErrorMessage>{errorMessage}</Styled.ErrorMessage>
			)}
		</Styled.Wrapper>
	);
};

export default TextInput;
