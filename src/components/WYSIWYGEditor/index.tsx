// hooks
import { useMemo, useRef } from 'react';

// component
import JoditEditor from 'jodit-react';

// styles
import * as Styled from './styles';
import { placeholder } from 'jodit/types/plugins/placeholder/placeholder';

// types
export type WYSIWYGEditorProps = {
	content: string;
	placeholder?: string;
	onChange: (content: string) => void;
};

const WYSIWYGEditor = ({ content, placeholder, onChange }: WYSIWYGEditorProps) => {

	// states
	const editor = useRef(null);

	const config = useMemo( () => ({
		readonly: false,
		height: 500,
		placeholder: placeholder || "Start typing..."
	}), [placeholder]);

	// handle synthetic event
	const handleUpdate = () => {
		const editorContent = editor.current.value

		if (onChange) onChange(editorContent);

	}

	return (
		<Styled.Wrapper>
			<JoditEditor
				ref={editor}
				value={content}
				config={config}
				onBlur={() => handleUpdate()}
			/>
		</Styled.Wrapper>
	);
};

export default WYSIWYGEditor;
