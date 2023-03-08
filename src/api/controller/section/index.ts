// services
import SectionService from "../../services/section";

// types
import {
	CreateSectionData,
	SectionControllerCreate,
} from "../../../shared-types/section";
import SectionValidateHome from "./validation/home";
import SectionValidationAbout from "./validation/about";
import SectionValidationSkills from "./validation/skills";

export default class SectionController {
	static async create(
		data: CreateSectionData,
		formData: FormData,
		token: string,
		typeSection: string,
		settings: string
	): Promise<SectionControllerCreate> {
		try {
			if (!settings) throw new Error("you must choose an settings");

			formData.set("settings", settings);

			console.log(data);

			if (typeSection === "home")
				SectionValidateHome.validate(data, formData);

			if (typeSection === "about")
				SectionValidationAbout.validate(data, formData);

			if (typeSection === "projects") {
				const projects = JSON.stringify(data.projects);
				formData.set("projects", projects);
			}

			if (typeSection === "skills")
				SectionValidationSkills.validate(data, formData);

			const section = await SectionService.create(
				formData,
				token,
				typeSection
			);

			return {
				data: section,
				successMessage: {
					message: `${typeSection} was successfully created`,
					link: `/`,
				},
			};
		} catch (err) {
			throw new Error(err.message);
		}
	}

	static async update(
		id: string | string[],
		data: CreateSectionData,
		formData: FormData,
		token: string,
		typeSection: string,
		settings: string
	) {
		try {
			if (!settings) throw new Error("you must choose an settings");

			formData.set("settings", settings);
			formData.append("typeSection", typeSection);

			if (typeSection === "home")
				SectionValidateHome.validate(data, formData);

			if (typeSection === "about")
				SectionValidationAbout.validate(data, formData);

			if (typeSection === "projects") {
				const projects = JSON.stringify(data.projects);
				formData.set("projects", projects);
			}

			if (typeSection === "skills")
				SectionValidationSkills.validate(data, formData);

			console.log(formData.get("typeSection"));

			const section = await SectionService.update(id, formData, token);

			console.log(section);

			return {
				data: section,
				successMessage: {
					message: `${typeSection} was successfully updated`,
					link: `/`,
				},
			};
		} catch (err) {
			throw new Error(err.message);
		}
	}

	static async getById(id: string | string[], token: string) {
		try {
			if (!id) throw new Error("you must inform an id");
			if (!token) throw new Error("you must be login");

			const section = await SectionService.getById(id, token);

			if (!section) throw new Error("section not found it");

			return section;
		} catch (err) {
			console.log(err);
		}
	}

	static async getAll(token: string) {
		try {
			if (!token) throw new Error("you must be login");

			const sections = SectionService.getAll(token);

			if (!sections) throw new Error("no section were found it");

			return sections;
		} catch (err) {
			console.log(err);
		}
	}
}
