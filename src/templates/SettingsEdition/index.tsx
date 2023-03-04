// types
import { Settings } from "../../shared-types/settings";
import SettingsForm from "../../components/SettingsForm";
export type SettingsEditionTemplateProps = {
	settings: Settings;
};

const SettingsEditionTemplate = ({
	settings,
}: SettingsEditionTemplateProps) => {
	console.log(settings);
	return (
		<SettingsForm
			id={settings._id}
			websiteNameProps={settings.websiteName}
			socialMedia={settings.socialMedia}
			logo={settings.logo}
			favIconProps={settings.favIcon}
			typeForm="update"
		/>
	);
};

export default SettingsEditionTemplate;
