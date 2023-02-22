import { FetchResponsePortfolio } from "../../../shared-types/portfolio";
import CreateFetch from "../../../utils/createFetch";

// config
const url = `${process.env.NEXT_PUBLIC_API_URL}/api/portfolios`;

export default class PortfolioService {
	static async create(formData: FormData, token: string) {
		const options = {
			method: "POST",
			headers: {
				Authorization: `Bearer ${token}`,
			},
			body: formData,
		};
		return await CreateFetch.dispatch(url, options);
	}

	static async get(): Promise<FetchResponsePortfolio> {
		const options = {
			method: "GET",
		};

		return await CreateFetch.dispatch(url + "/", options);
	}
}
