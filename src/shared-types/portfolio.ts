import { Project } from "./project";
import { BiosData, EducationData, Tech, WorkData } from "./section";
import { Settings } from "./settings";

export type Portfolio = {
	settings: Settings;
	content: PortfolioContent;
};

export type PortfolioContent = {
	sections: {
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

export type FetchResponsePortfolio = {
	portfolio: Portfolio;
};
