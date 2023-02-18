// utils
import CreateFetch from "../../../utils/createFetch";

export default class SectionService{
	static async create(formData: FormData, token: string) {

		const options = {
			method: "POST",
			headers: {
				Authorization: `Bearer ${token}`,
			},
			body: formData,
		};

		return await CreateFetch.dispatch(``, options);
	}
}