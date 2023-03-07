import {
	FetchResponseProject,
	FetchResponseProjects,
} from "../../../shared-types/project";
import CreateFetch from "../../../utils/createFetch";

// config
const url = `${process.env.NEXT_PUBLIC_API_URL}/api/projects`;

export default class ProjectService {
	static async create(
		formData: FormData,
		token: string
	): Promise<FetchResponseProject> {
		const options = {
			method: "POST",
			headers: {
				Authorization: `Bearer ${token}`,
			},
			body: formData,
		};

		return await CreateFetch.dispatch<FetchResponseProject>(
			`${url}/`,
			options
		);
	}

	static async update(
		id: string | string[],
		formData: FormData,
		token: string
	) {
		const options = {
			method: "PUT",
			headers: {
				Authorization: `Bearer ${token}`,
			},
			body: formData,
		};

		return await CreateFetch.dispatch<FetchResponseProject>(
			`${url}/${id}`,
			options
		);
	}

	static async getAll() {
		const options = {
			method: "GET",
		};

		return await CreateFetch.dispatch<FetchResponseProjects>(
			`${url}/`,
			options
		);
	}

	static async getById(id: string | string[]): Promise<FetchResponseProject> {
		const options = {
			method: "GET",
		};
		return await CreateFetch.dispatch<FetchResponseProject>(
			`${url}/${id}`,
			options
		);
	}

	static async delete(id: string | string[], token: string) {
		const options = {
			method: "DELETE",
			headers: {
				Authorization: `Bearer ${token}`,
			},
		};
		return await CreateFetch.dispatch(`${url}/${id}`, options);
	}
}
