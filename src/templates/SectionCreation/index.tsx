// hooks
import { useState } from 'react';

// components
import Select from '../../components/Select';

// styles
import * as Styled from './styles';

// types
import { Settings } from '../../shared-types/settings';
import FormCreateHome from '../../components/FormCreateHome';
export type SectionCreationTemplateProps = {
	allSettings?: Settings[];
};

const SectionCreationTemplate = ({ allSettings = [] }) => {

	// states
	const [selectedSettings, setSelectedSettings] = useState(null);
	const [typeSection, setTypeSection] = useState("");

	return (
		<Styled.Wrapper>
			<Select
				name="selectedSettings"
				placeholder='choose a portfolio'
				value={selectedSettings}
				onChange={(v) => setSelectedSettings(v)}
			>
				{allSettings.length >= 1 &&
					allSettings.map((settings) => (
						<option
							value={settings.websiteName}
							key={`${settings._id}`}
						>
							{settings.websiteName}
						</option>
					))
				}
			</Select>
			{
				selectedSettings && (
					<Select
						name="typeSection"
						placeholder='choose a type of section'
						value={typeSection}
						onChange={(v) => setTypeSection(v)}
					>
						<option value="home">home</option>
						<option value="about">about</option>
						<option value="sklls">skills</option>
						<option value="projects">projects</option>
					</Select>
				)
			}
			{
				typeSection === "home" && (
					<FormCreateHome />
				)
			}
		</Styled.Wrapper>
	);
};

export default SectionCreationTemplate;
