import { SuccessState } from "./async-success-error";
import { BackendUser } from "./user-backend";

export type FetchResponseSettings = {

}

export type SettingsControllerCreate = {
	data: {

	},
	successMessage: SuccessState;
}

export type Settings = {
	_id: string;
	owner: BackendUser;
    websiteName: string;
    favIcon: string;
    createdAt: Date;
    updatedAt?: Date;
    logo: {
        srcImg?: string;
        altText: string;
        link: string;
        newTab?: boolean;
    },
    menu: {
        children: string;
        icon: string;
        link: string;
        newTab?: boolean;
    }[],
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
}