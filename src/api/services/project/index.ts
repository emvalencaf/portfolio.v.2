import { FormHTMLAttributes } from "react";

export default class ProjectService{
	static async create(formData: FormData, token: string){
		formData.forEach((values, key) => {
			console.log(key," : ", values);
		})
		console.log(token);
		return await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/projects/`, {
			method: "POST",
			headers: {
				Authorization: `Bearer ${token}`
			},
			body: formData,
		}).then(response => response.json());
	}

	static async getById(id: string) {
		return  await fetch(`${process.env.NEXTAUTH_API_URL}/api/projects/${id}`).then((response) => response.json());
	}
}