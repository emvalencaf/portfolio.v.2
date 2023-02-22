// hooks
import { useCallback, useEffect, useMemo, useRef } from "react";

// component
import JoditEditor from "jodit-react";

// styles
import * as Styled from "./styles";

// types
export type WYSIWYGEditorProps = {
	content: string;
	placeholder?: string;
	onChange: (content: string) => void;
	reference?: unknown;
};

const WYSIWYGEditor = ({
	content,
	placeholder,
	onChange,
}: WYSIWYGEditorProps) => {
	// states
	const editorRef = useRef(null);

	const config = useMemo(
		() => ({
			readonly: false,
			height: 500,
			placeholder: placeholder || "Start typing...",
		}),
		[placeholder]
	);

	// handle synthetic event
	const handleUpdate = useCallback(() => {
		if (editorRef.current === null) return;

		const editorContent = editorRef.current.value;

		if (onChange) onChange(editorContent);
	}, [onChange]);

	// effect
	useEffect(() => {
		return editorRef.current.removeEventListener("blur", handleUpdate);
	}, [handleUpdate]);

	return (
		<Styled.Wrapper>
			<JoditEditor
				ref={editorRef}
				value={content}
				config={config}
				onBlur={handleUpdate}
			/>
		</Styled.Wrapper>
	);
};

export default WYSIWYGEditor;
