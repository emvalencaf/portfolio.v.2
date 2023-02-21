import { CreateSectionData } from "./section";
import { Settings } from "./settings"

export type Portfolio = {
	settings: Settings;
	content: PortfolioContent;
}

export type PortfolioContent = {
	sections: CreateSectionData[];
}

export type FetchResponsePortfolio = {
	portfolio: Portfolio;
};