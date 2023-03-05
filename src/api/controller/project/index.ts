// service
import ProjectService from "../../services/project";

// type
import { ProjectControllerCreate } from "../../../shared-types/project";
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
	static async create(
		dataProject: ProjectData,
		formData: FormData,
		token: string
	): Promise<ProjectControllerCreate> {
		const {
			title,
			description,
			resume,
			mainLang,
			urlDemo,
			urlRepository,
			picture,
		} = dataProject;
		console.log("no controller");

		try {
			// empety fields
			if (!title)
				throw new Error("you must give a title for your project");

			if (!urlRepository)
				throw new Error(
					"you must give a repository url of your project"
				);

			if (!urlDemo)
				throw new Error("you must give a demo url of your project");

			if (!mainLang)
				throw new Error(
					"you must choose a main programming language for your project"
				);

			if (!resume)
				throw new Error("you must give a resume for your project");

			if (!picture)
				throw new Error(
					"you must upload an picture to be the cover of your project"
				);

			if (!description)
				throw new Error("you must give a description for your project");

			// valid values
			if (resume.length > 250)
				throw new Error(
					"you cannot give a resume more than 250 characteres for your project"
				);

			if (title.length > 50)
				throw new Error(
					"you cannot give a title more thant 50 characteres for your project"
				);

			if (
				mainLang !== "java" &&
				mainLang !== "javascript" &&
				mainLang !== "typescript" &&
				mainLang !== "python" &&
				mainLang !== "csharp" &&
				mainLang !== "cplus" &&
				mainLang !== "html" &&
				mainLang !== "css" &&
				mainLang !== "php"
			)
				throw new Error("you cannot choose a different language");

			formData.set("description", description);

			const response = await ProjectService.create(formData, token);

			const { project } = response;

			return {
				data: project,
				successMessage: {
					message: `${project?.title} was successfully created`,
					link: `/projects/${project?._id}`,
				},
			};
		} catch (err) {
			throw new Error(err);
		}
	}

	static async update(
		id: string | string[],
		dataProject: ProjectData,
		formData: FormData,
		token: string
	) {
		const { title, description, resume, mainLang, urlDemo, urlRepository } =
			dataProject;

		console.log("no controller");

		try {
			// empety fields
			if (!title)
				throw new Error("you must give a title for your project");

			if (!urlRepository)
				throw new Error(
					"you must give a repository url of your project"
				);

			if (!urlDemo)
				throw new Error("you must give a demo url of your project");

			if (!mainLang)
				throw new Error(
					"you must choose a main programming language for your project"
				);

			if (!resume)
				throw new Error("you must give a resume for your project");

			if (!description)
				throw new Error("you must give a description for your project");

			// valid values
			if (resume.length > 250)
				throw new Error(
					"you cannot give a resume more than 250 characteres for your project"
				);

			if (title.length > 50)
				throw new Error(
					"you cannot give a title more thant 50 characteres for your project"
				);

			if (
				mainLang !== "java" &&
				mainLang !== "javascript" &&
				mainLang !== "typescript" &&
				mainLang !== "python" &&
				mainLang !== "csharp" &&
				mainLang !== "cplus" &&
				mainLang !== "html" &&
				mainLang !== "css" &&
				mainLang !== "php"
			)
				throw new Error("you cannot choose a different language");

			formData.set("description", description);

			const response = await ProjectService.update(id, formData, token);

			const { project } = response;

			return {
				data: project,
				successMessage: {
					message: `${project?.title} was successfully created`,
					link: `/projects/${project?._id}`,
				},
			};
		} catch (err) {
			throw new Error(err);
		}
	}

	static async getAll() {
		try {
			return await ProjectService.getAll();
		} catch (err) {
			console.log(err);
		}
	}

	static async getById(id: string | string[]) {
		try {
			if (!id) throw new Error("must inform an id");

			return await ProjectService.getById(id);
		} catch (err) {
			console.log(err);
		}
	}

	static async delete(id: string | string[], token: string) {
		try {
			if (!id) throw new Error("must inform an id");

			return await ProjectService.delete(id, token);
		} catch (err) {
			console.log(err);
		}
	}
}
