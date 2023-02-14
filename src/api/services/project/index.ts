import { FormHTMLAttributes } from "react";
import { FetchResponseProject } from "../../../shared-types/project";
import CreateFetch from "../../../utils/createFetch";

// config
const url = `${process.env.NEXT_PUBLIC_API_URL}/api/projects`;

export default class ProjectService{
	static async create(formData: FormData, token: string): Promise<FetchResponseProject>{

		const options = {
			method: "POST",
			headers: {
				Authorization: `Bearer ${token}`,
			},
			body: formData,
		};

		return await CreateFetch.dispatch<FetchResponseProject>(`${url}/`, options);
	}

	static async getById(id: string | string[]): Promise<FetchResponseProject> {
		return await CreateFetch.dispatch<FetchResponseProject>(`${url}/${id}`)
	}
}