// styles
import { SelectHTMLAttributes, useRef } from 'react';
import * as Styled from './styles';

// types
export type SelectProps = {
	name: string;
	children: React.ReactNode;
	placeholder: string;
	onChange: (v: string) => void;
	value?: string;
	icon?: React.ReactNode;
	reference?: HTMLSelectElement;
	required?: boolean;
} & SelectHTMLAttributes<HTMLSelectElement>;

const Select = ({
		children,
		name,
		placeholder,
		onChange,
		value = "",
		icon,
		reference = null,
		required = false,
}: SelectProps) => {

	// states
	const selectRef = useRef(reference);

	const handleChange = () => {

		if (selectRef.current === null) return;

		const v = selectRef.current.value;

		if (onChange) onChange(v);
	}

	return (
		<Styled.Wrapper>
			<Styled.Select
				name={name}
				placeholder={placeholder}
				value={value}
				onChange={handleChange}
				required={required}
				ref={selectRef}
			>
				{children}
			</Styled.Select>
		</Styled.Wrapper>
	);
};

export default Select;
