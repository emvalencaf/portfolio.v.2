// services
import SectionService from "../../services/section";

// types
import { CreateSectionData } from "../../../shared-types/portfolio";
import { instanceOf } from "prop-types";

export default class SectionController{
	static async create(data: CreateSectionData, formData: FormData, token: string, typeSection: string, settings: string) {

		try{
			if (!settings) throw new Error("you must choose an settings");

			formData.set("settings", settings);

			if (typeSection === "home") SectionController.validateHome(data, formData);

			if (typeSection === "about") SectionController.validateAbout()

			return await SectionService.create(formData, token, typeSection);

		} catch(err) {
			throw new Error(err.message);
		}

	}

	static validateHome(data: CreateSectionData, formData: FormData) {

		if (!data.mainStack || data.mainStack instanceof Array === false || data.mainStack.length === 0) throw new Error("you must fill at least one code language for your stack");


		if (!data.ocupation) throw new Error("you must fill your ocupation at the form");

		if (data.ocupation.length === 50) throw new Error("your ocupation cannot have more than 50 characteres");

		// set the validated data
		formData.set("mainStack", JSON.stringify(data.mainStack));
		formData.set("ocupation", data.ocupation);

		// format formData with the keys of the home sections
		formData.forEach((value, key) => {
			if (formData[key] === "ocupation") return;

			if (formData[key] === "mainStack") return;

			if (formData[key] === "backgroundImg") return;

			formData.delete(key);
		})
	}
}