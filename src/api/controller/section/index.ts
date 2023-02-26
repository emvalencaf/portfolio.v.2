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
		data: CreateSectionData,
		formData: FormData,
		token: string,
		typeSection: string,
		settings: string
	) {
		try {
			if (!settings) throw new Error("you must choose an settings");

			formData.set("settings", settings);

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
}
