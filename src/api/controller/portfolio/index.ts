// service
import PortfolioService from "../../services/portfolio";

// types
import {
	FetchResponsePortfolio,
	Portfolio,
} from "../../../shared-types/portfolio";

export default class PortfolioController {
	static async create(
		dataProject: Portfolio,
		formData: FormData,
		token: string
	) {
		const response = await PortfolioService.create(formData, token);
		console.log(response);
	}

	static async get(): Promise<FetchResponsePortfolio> {
		return await PortfolioService.get();
	}
}
