// service
import ProjectService from "../../services/project";

// type
type ProjectData = {
	title: string;
	resume: string;
	description: string;
	mainLang: string;
	urlDemo: string;
	urlRepository: string;
	picture: Blob | MediaSource | File;
};


export default class ProjectController {
	static async create(form: HTMLFormElement, token: string) {

		 const formData = new FormData(form);

		 try {
			return await ProjectService.create(formData, token);

		 } catch (err){
			console.log(err);
		 }
	}

	static async getById(id: string) {
		if (!id) return ;

		return await ProjectService.getById(id);
	}
}