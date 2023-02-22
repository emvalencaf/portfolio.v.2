import { SuccessState } from "./async-success-error";
import { BackendUser } from "./user-backend";

export type FetchResponseSettings = Settings;

export type SettingsControllerCreate = {
	data: FetchResponseSettings;
	successMessage: SuccessState;
};

export type Settings = {
	_id: string;
	owner: BackendUser;
	websiteName: string;
	favIcon: string;
	createdAt: Date | number | string;
	updatedAt?: Date | number | string | null;
	logo: {
		srcImg?: string;
		altText: string;
		link: string;
		newTab?: boolean;
	};
	menu: {
		children: string;
		icon: string;
		link: string;
		newTab?: boolean;
	}[];
	socialMedia: {
		instaURL?: string;
		linkedinURL?: string;
		facebookURL?: string;
		homepageURL?: string;
		twitterURL?: string;
		githubURL?: string;
		tiktokURL?: string;
		youtubeURL?: string;
	};
};
