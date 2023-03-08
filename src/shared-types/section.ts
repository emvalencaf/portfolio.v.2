import { SuccessState } from "./async-success-error";
import { Project } from "./project";

export type FetchResponseSection = {
	section: Section & {
		owner?: string;
		techs?: Tech[];
		ocupation?: string;
		mainStack?: string[];
		biosData?: BiosData;
		workData?: WorkData;
		educationData?: EducationData;
		projects?: Project[];
		urlDownload?: string;
	};
};

export type FetchResponseSections = {
	sections: Section &
		{
			owner?: string;
			techs?: Tech[];
			ocupation?: string;
			mainStack?: string[];
			biosData?: BiosData;
			workData?: WorkData;
			educationData?: EducationData;
			projects?: Project[];
			urlDownload?: string;
		}[];
};

export type Section = {
	_id?: string;
	title: string;
	children?: string;
	background?: boolean;
	icon?: "home" | "about" | "skills" | "projects" | "other";
	color?:
		| "primary"
		| "secondary"
		| "tertiary"
		| "quaternary"
		| "quinary"
		| "senary";
	backgroundImg?: string;
	settings?: string;
};

export type SectionControllerCreate = {
	data: FetchResponseSection;
	successMessage: SuccessState;
};

export type CreateSectionData = Section & {
	owner?: string;
	techs?: Tech[];
	ocupation?: string;
	mainStack?: string[];
	biosData?: BiosData;
	workData?: WorkData;
	educationData?: EducationData;
	projects?: string[];
	urlDownload?: string;
};

export interface BiosData {
	bios: string;
	profilePhoto?: ProfilePhoto;
}

export interface Work {
	employer: string;
	ocupation: string;
	jobDescription: string;
	startIn: string | number;
	endIn: string | number;
	showData?: boolean;
}

export interface WorkData {
	workExperience: Work[];
}

export interface Education {
	title: string;
	workTime: string | number;
	institution: string;
	resume?: string;
	startIn: string | number;
	endIn?: string | number | null;
	urlDownload?: string;
}

export interface EducationData {
	higherEducation: Education[];
	courses: Education[];
}

export interface Tech {
	techName: string;
	techDescription: string;
	icon?: string;
	showTechDescription?: boolean;
}

export interface ProfilePhoto {
	srcImg: string;
	altText: string;
}
