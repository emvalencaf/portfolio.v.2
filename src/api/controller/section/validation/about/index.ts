import {
	CreateSectionData,
	Education,
	Work,
} from "../../../../../shared-types/section";

export default class SectionValidationAbout {
	static validate(data: CreateSectionData, formData: FormData) {
		SectionValidationAbout.validateBiosData(data, formData);
		SectionValidationAbout.validateEducationData(data, formData);
		SectionValidationAbout.validateWorkDataExperience(data, formData);
	}

	static validateEducationData(data: CreateSectionData, formData: FormData) {
		if (!data.educationData)
			throw new Error("you must at least inform an education");

		if (data.educationData.courses.length >= 1) {
			data.educationData.courses.forEach(
				SectionValidationAbout.validateCourseData
			);
		}

		const educationData = JSON.stringify(data.educationData);

		formData.set("educationData", educationData);
	}

	static validateWorkDataExperience(
		data: CreateSectionData,
		formData: FormData
	) {
		if (!data.workData)
			throw new Error("your about section must have some work data");

		if (data.workData.workExperience.length >= 1) {
			data.workData.workExperience.forEach(
				SectionValidationAbout.validateWorkData
			);
		}

		const workData = JSON.stringify(data.workData);

		formData.set("workData", workData);
	}

	static validateBiosData(data: CreateSectionData, formData: FormData) {
		if (!data.biosData)
			throw new Error("your about section must have some bios data ");

		if (!data.biosData.bios)
			throw new Error(
				"your about section must have a resume bios about yourself"
			);

		if (data.biosData.bios.length > 1000)
			throw new Error(
				"your about section resume bios cannot have more than 1000 characters"
			);

		const biosData = JSON.stringify(data.biosData);

		formData.set("biosData", biosData);
	}

	static validateWorkData(work: Work) {
		if (!work.employer)
			throw new Error(
				"one of yours work experience doesn't have an employer"
			);

		if (work.employer.length > 50)
			throw new Error(
				`your work experience at ${work.employer}'s employer name does have more than 50 characters`
			);

		if (!work.jobDescription)
			throw new Error(
				`your work experience at ${work.employer} doesn't have a job description`
			);

		if (work.jobDescription.length > 250)
			throw new Error(
				`your work experience at ${work.employer}'s job description does have more than 250 characters`
			);

		if (!work.startIn)
			throw new Error(
				`your work experience at ${work.employer} doesn't have a job description`
			);

		if (!work.ocupation)
			throw new Error(
				`your work experience at ${work.employer} doesn't have an ocupation`
			);

		if (work.ocupation.length > 50)
			throw new Error(
				`your work experience at ${work.employer}'s ocupation does have more than 50 characters`
			);
	}
	static validateCourseData(course: Education) {
		if (!course.title)
			throw new Error("one of yours courses doesn't have a title");

		if (course.title.length > 50)
			throw new Error(
				"one of your courses title has more than 150 characters"
			);

		if (!course.institution)
			throw new Error(
				`your ${course.title} course doesn't have an institution`
			);

		if (course.institution.length > 50)
			throw new Error(
				`your ${course.title} course institution name has more than 150 characters`
			);

		if (!course.resume)
			throw new Error(
				`your ${course.resume} course doesn't have a resume`
			);

		if (course.resume.length > 250)
			throw new Error(
				`your ${course.resume} course has more than 250 characters`
			);

		if (!course.startIn)
			throw new Error(
				`your ${course.title} course doesn't have started date`
			);

		if (!course.workTime)
			throw new Error(
				`your ${course.title} course dosen't have a work time`
			);

		if (typeof course.workTime === "string")
			throw new Error(
				`your ${course.title} course has more than 50 characters`
			);
	}
}
