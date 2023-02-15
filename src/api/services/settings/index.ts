
// types
import { FetchResponseSettings } from "../../../shared-types/settings";

// utils
import CreateFetch from "../../../utils/createFetch";

// config
const url = `${process.env.NEXT_PUBLIC_API_URL}/api/settings`;

export default class SettingsService{
	static async create(formData: FormData, token: string): Promise<FetchResponseSettings>{

		const options = {
			method: "POST",
			headers: {
				Authorization: `Bearer ${token}`,
			},
			body: formData,
		};

		return CreateFetch.dispatch(url, options);
	}
}