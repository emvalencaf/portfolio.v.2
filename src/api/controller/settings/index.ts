// service
import SocialMedia from "../../../components/SocialMedia";
import { SuccessState } from "../../../shared-types/async-success-error";
import { FetchResponseSettings } from "../../../shared-types/settings";
import SettingsService from "../../services/settings";

// type
export type SettingsControllerCreate = {
	data: {

	},
	successMessage: SuccessState;
}
type SettingsData = {
	websiteName: string;
	logo: {
		srcImg: string;
		altText: string;
		link: string;
		newTab?: boolean;
	},
	socialMedia?: {
		instaURL?: string;
		linkedinURL?: string;
		facebookURL?: string;
		homepageURL?: string;
		twitterURL?: string;
		githubURL?: string;
		youtubeURL?: string;
		tiktokURL?: string;
	},
}


export default class SettingsController {
	static async create(data: SettingsData, formData: FormData, token: string): Promise<SettingsControllerCreate>{
		try{

			if (!data.logo || !data.logo?.altText || !data.logo?.link ) throw new Error(`you fill the logo fields incorrectly`);

			formData.delete("logoAlt");
			formData.delete("instaURL");
			formData.delete("facebookURL");
			formData.delete("youtubeURL");
			formData.delete("twitterURL");
			formData.delete("homepageURL");
			formData.delete("githubURL");
			formData.delete("tiktokURL");
			formData.delete("linkedInURL");

			formData.append("logo", JSON.stringify(data.logo));

			if(data.socialMedia) formData.append("socialMedia", JSON.stringify(data.socialMedia));

			const response =  await SettingsService.create(formData, token);

			console.log(response);

			return {
				data: response,
				successMessage: {
					message: `settings was successfully created`,
				}
			};

		} catch (err) {
			throw new Error(err.message);
		}
	}
}