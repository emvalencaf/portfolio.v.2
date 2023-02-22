import { CreateSectionData } from "../../../../../shared-types/section";

export default class SectionValidationHome {
	static validate(data: CreateSectionData, formData: FormData) {
		if (
			!data.mainStack ||
			data.mainStack instanceof Array === false ||
			data.mainStack.length === 0
		)
			throw new Error(
				"you must fill at least one code language for your stack"
			);

		if (!data.ocupation)
			throw new Error("you must fill your ocupation at the form");

		if (data.ocupation.length === 50)
			throw new Error(
				"your ocupation cannot have more than 50 characteres"
			);

		// set the validated data
		formData.set("mainStack", JSON.stringify(data.mainStack));
		formData.set("ocupation", data.ocupation);
	}
}
