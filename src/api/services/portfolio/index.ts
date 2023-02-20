import { Create } from "@styled-icons/material-outlined";
import CreateFetch from "../../../utils/createFetch";

// config
const url = `${process.env.NEXT_PUBLIC_API_URL}/api/portfolios`;

export default class PortfolioService{
	static async create(formData: FormData, token: string) {

		const options = {

		};

		return await CreateFetch.dispatch(url);
	}

	static async get(){

		const options = {
			method: "GET",
		};

		return await CreateFetch.dispatch(url + "/", options);

	}
}