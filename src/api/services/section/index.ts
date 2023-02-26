// utils
import { FetchResponseSection } from "../../../shared-types/section";
import CreateFetch from "../../../utils/createFetch";

// configs
const url = `${process.env.NEXT_PUBLIC_API_URL}/api/sections`;

export default class SectionService {
	static async create(
		formData: FormData,
		token: string,
		typeSection: string
	): Promise<FetchResponseSection> {
		const options = {
			method: "POST",
			headers: {
				Authorization: `Bearer ${token}`,
			},
			body: formData,
		};
		console.log(url + "/" + typeSection);
		return await CreateFetch.dispatch(`${url}/${typeSection}`, options);
	}
	static async getById(
		id: string | string[],
		token: string
	): Promise<FetchResponseSection> {
		const options = {
			method: "GET",
			headers: {
				Authorization: `Bearer ${token}`,
			},
		};
		return await CreateFetch.dispatch(`${url}/${id}`, options);
	}
}
