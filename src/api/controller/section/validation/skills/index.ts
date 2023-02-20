import { CreateSectionData, Tech } from "../../../../../shared-types/section";

export default class SectionValidationSkills{
	static validate(data: CreateSectionData, formData: FormData) {
		if (!data.techs) throw new Error("You must have at least one tech attached");

		data.techs.forEach(SectionValidationSkills.validateTech);

		const techs = JSON.stringify(data.techs);

		formData.set("techs", techs);

	}
	static validateTech(tech: Tech) {
        if (!tech.techName) throw new Error(`one of yours tech doesn't have an name`);

        if (tech.techName.length > 50) throw new Error(`your ${tech.techName} does have a name with more than 50 characters`);

        if (!tech.techDescription) throw new Error(`your ${tech.techDescription} doesn't have a description`);

        if (tech.techDescription.length > 250) throw new Error(`your ${tech.techDescription} does have a description with more than 250 characters`);
	}
}