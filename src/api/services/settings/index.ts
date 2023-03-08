// types
import {
	FetchResponseAllSettings,
	FetchResponseSettings,
} from "../../../shared-types/settings";

// utils
import CreateFetch from "../../../utils/createFetch";

// config
const url = `${process.env.NEXT_PUBLIC_API_URL}/api/settings`;

export default class SettingsService {
	static async create(
		formData: FormData,
		token: string
	): Promise<FetchResponseSettings> {
		const options = {
			method: "POST",
			headers: {
				Authorization: `Bearer ${token}`,
			},
			body: formData,
		};

		return await CreateFetch.dispatch<FetchResponseSettings>(url, options);
	}

	static async getAll(token: string) {
		const options = {
			method: "GET",
			headers: {
				Authorization: `Bearer ${token}`,
			},
		};

		return await CreateFetch.dispatch<FetchResponseAllSettings>(
			url,
			options
		);
	}

	static async getById(id: string | string[], token: string) {
		const options = {
			method: "GET",
			headers: {
				Authorization: `Bearer ${token}`,
			},
		};

		return await CreateFetch.dispatch<FetchResponseSettings>(
			`${url}/${id}`,
			options
		);
	}

	static async update(
		id: string | string[],
		formData: FormData,
		token: string
	): Promise<FetchResponseSettings> {
		const options = {
			method: "PUT",
			headers: {
				Authorization: `Bearer ${token}`,
			},
			body: formData,
		};

		return await CreateFetch.dispatch<FetchResponseSettings>(
			`${url}/${id}`,
			options
		);
	}
}
