// service
import { SuccessState } from "../../../shared-types/async-success-error";
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
	static async create(data: SettingsData, formData: FormData, token: string){
		try{
			
			if (!data.logo || !data.logo?.altText || !data.logo?.srcImg || !data.logo?.link ) throw new Error(`you fill the logo fields incorrectly`);

			return await SettingsService.create(formData, token);
		} catch (err) {
			throw new Error(err.message);
		}
	}
}