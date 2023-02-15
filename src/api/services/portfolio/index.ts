import CreateFetch from "../../../utils/createFetch";

// config
const url = `${process.env.NEXT_PUBLIC_API_URL}/api/projects`;

export default class PortfolioService{
	static async create(formData: FormData, token: string) {

		const options = {

		};

		return await CreateFetch.dispatch(url);
	}
}