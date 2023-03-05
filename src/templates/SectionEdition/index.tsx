// components
import SectionForm from "../../components/SectionForm";

// types
import {
	Education,
	EducationData,
	FetchResponseSection,
} from "../../shared-types/section";
export type SectionEditioTemplateProps = {
	section: FetchResponseSection;
};

const SectionEditionTemplate = ({ section }: SectionEditioTemplateProps) => {
	const filterEducationData = (educationData: EducationData) => {
		const arr = [];
		const filterEducationData = (
			element: Education,
			courseType: string
		) => ({
			courseType,
			title: element.title,
			startIn:
				typeof element.startIn === "number"
					? element.startIn.toString()
					: element.startIn.split("T")[0],
			endIn:
				typeof element.endIn === "number"
					? element.endIn.toString()
					: element.endIn && element.endIn.split("T")[0],
			urlDownload: element.urlDownload,
			resume: element.resume,
			institution: element.institution,
			workTime: element.workTime,
		});
		educationData.higherEducation.forEach((higherEducation) =>
			arr.push(filterEducationData(higherEducation, "higherEducation"))
		);
		educationData.courses.forEach((course) =>
			arr.push(filterEducationData(course, "courses"))
		);
		return arr;
	};

	return (
		<SectionForm
			formType="update"
			disabledSelectSettings={true}
			disabledSelectTypeSection={true}
			typeSectionProps={section.icon}
			settingsIdProps={section.settings && section.settings}
			backgroundImgProps={section.background && section.backgroundImg}
			ocupationProps={section.ocupation && section.ocupation}
			mainStackProps={section.mainStack && section.mainStack}
			biosDataProps={section.biosData && section.biosData}
			workDataProps={
				section.workData &&
				section.workData.workExperience.map((work) => ({
					...work,
					startIn:
						typeof work.startIn === "number"
							? work.startIn.toString()
							: work.startIn.split("T")[0],
					endIn:
						typeof work.endIn === "number"
							? work.endIn.toString()
							: work.endIn && work.endIn.split("T")[0],
				}))
			}
			educationDataProps={
				section.educationData &&
				filterEducationData(section.educationData)
			}
			urlDownloadProps={section.urlDownload && section.urlDownload}
			techsProps={
				section.techs &&
				section.techs.map((tech) => ({
					techName: tech.techName,
					techDescription: tech.techDescription,
				}))
			}
			projectsProps={
				section.projects &&
				section.projects.map((project) => ({
					_id: project._id,
					title: project.title,
				}))
			}
		/>
	);
};

export default SectionEditionTemplate;
