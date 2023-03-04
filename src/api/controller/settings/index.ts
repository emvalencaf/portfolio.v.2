// service
import { SuccessState } from "../../../shared-types/async-success-error";
import { Settings } from "../../../shared-types/settings";
import SettingsService from "../../services/settings";

// type
export type SettingsControllerCreate = {
	data: Settings;
	successMessage: SuccessState;
};
type SettingsData = {
	websiteName: string;
	logo: {
		srcImg: string;
		altText: string;
		link: string;
		newTab?: boolean;
	};
	socialMedia?: {
		instaURL?: string;
		linkedinURL?: string;
		facebookURL?: string;
		homepageURL?: string;
		twitterURL?: string;
		githubURL?: string;
		youtubeURL?: string;
		tiktokURL?: string;
	};
};

export default class SettingsController {
	static async create(
		data: SettingsData,
		formData: FormData,
		token: string
	): Promise<SettingsControllerCreate> {
		try {
			if (!data.logo || !data.logo?.altText || !data.logo?.link)
				throw new Error(`you fill the logo fields incorrectly`);

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

			if (data.socialMedia)
				formData.append(
					"socialMedia",
					JSON.stringify(data.socialMedia)
				);

			const response = await SettingsService.create(formData, token);

			const { settings } = response;

			return {
				data: settings,
				successMessage: {
					message: `settings was successfully created`,
				},
			};
		} catch (err) {
			throw new Error(err.message);
		}
	}

	static async getAll(token: string) {
		return await SettingsService.getAll(token);
	}

	static async getById(id: string | string[], token: string) {
		try {
			if (!id) throw new Error("must inform an id");

			return SettingsService.getById(id, token);
		} catch (err) {
			console.log(err);
		}
	}

	static async update(
		id: string,
		data: SettingsData,
		formData: FormData,
		token: string
	): Promise<SettingsControllerCreate> {
		try {
			if (!data.logo || !data.logo?.altText || !data.logo?.link)
				throw new Error(`you fill the logo fields incorrectly`);

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

			if (data.socialMedia)
				formData.append(
					"socialMedia",
					JSON.stringify(data.socialMedia)
				);

			const response = await SettingsService.update(id, formData, token);
			const { settings } = response;
			return {
				data: settings,
				successMessage: {
					message: `${settings.websiteName}'s settings was updated`,
				},
			};
		} catch (err) {
			throw new Error(err.message);
		}
	}
}
