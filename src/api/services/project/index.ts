import { FormHTMLAttributes } from "react";

export default class ProjectService{
	static async create(formData, token: string){
		return await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/projects/`, {
			method: "POST",
			headers: {
				Authorization: `Bearer ${token}`
			},
			body: formData,
		}).then(response => response.json());
	}
}