// hooks
import { InputHTMLAttributes, useRef, useState } from 'react';

// icons
import { PhotoAlbum } from '@styled-icons/material-outlined';

// styles
import * as Styled from './styles';

// types
export type ImageInputProps = {
	label: string;
	name: string;
	type?: string;
	onInputFile?: (value: Blob | MediaSource) => void;
	disabled?: boolean;
	errorMessage?: string;
	value?: Blob | MediaSource | null;
	icon?: React.ReactNode;
	as?: "input" | "textarea";
	reference?: HTMLInputElement;
} & InputHTMLAttributes<HTMLInputElement>;

const ImageInput = ({
	label,
	name,
	type = "file",
	onInputFile,
	disabled = false,
	errorMessage = "",
	value = null,
	icon,
	as = "input",
	reference = null,
}: ImageInputProps) => {
	// states
	const inputRef = useRef(reference);
	const [previewPicture, setPreviewPicture] = useState("");

	// synthetic event handler
	const handleChange = () => {
		const value = inputRef.current.files[0];

		if (onInputFile) {
			onInputFile(value);
			const srcImg = URL.createObjectURL(value);
			setPreviewPicture(srcImg);
		};
	};


	return (
		<Styled.Wrapper>
			<Styled.PictureGallery>
				<div>
					{
						value ?
							<img
								src={previewPicture}
								alt="preview image"
							/>
							: <PhotoAlbum />
					}
				</div>
				<figcaption>
					Preview of the cover image of the project
				</figcaption>
			</Styled.PictureGallery>
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

export default ImageInput;
