// components
import SectionForm from "../../components/SectionForm";

// types
import { Settings } from "../../shared-types/settings";
export type SectionCreationTemplateProps = {
	allSettings?: Settings[];
};

const SectionCreationTemplate = ({
	allSettings = [],
}: SectionCreationTemplateProps) => {
	return <SectionForm allSettings={allSettings} />;
};

export default SectionCreationTemplate;
