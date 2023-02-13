// service
import ProjectService from "../../services/project";

// type
type ProjectData = {
	_id: string;
	title: string;
	resume: string;
	description: React.ReactNode;
	mainLang: "javascript" | "typescript" | "html" | "css" | "python" | "java" | "cplus" | "csharp" | "php";
	urlDemo: string;
	urlRepository: string;
	picture: Blob | MediaSource | File;
};

export default class ProjectController {
	static async create(projectData: ProjectData, form: HTMLFormElement, token: string, setErrorMessage, setSuccessMessage){
		const {
			title,
			resume,
			description,
			mainLang,
			urlDemo,
			urlRepository,
			picture,
		 } = projectData;

		 // check if there empety propeties
		 if (!title) return setErrorMessage("You must fill the title field");

		 if (!resume) return setErrorMessage("You must fill the resume field");

		 if (!description) return setErrorMessage("You must fill the description field");

		 if (!mainLang) return setErrorMessage("You must fill the main programming language field");

		 if (!urlDemo) return setErrorMessage("You must fill the url of the demonstration field");

		 if (!urlRepository) return setErrorMessage("You must fill the url of the repository field");

		 if (!picture) return setErrorMessage("You must upload an image for the cover of your project");

		 // validation of values
		 if (
			mainLang !== "java" &&
			mainLang !== "javascript" &&
			mainLang !== "html" &&
			mainLang !== "css" &&
			mainLang !== "python" &&
			mainLang !== "cplus" &&
			mainLang !== "csharp" &&
			mainLang !== "php"
		) return setErrorMessage("Your project must be of one of the set pogramming languages")


		 const formData = new FormData(form);

		 try {
			const response = await ProjectService.create(form, token);
			setSuccessMessage({
				message: `${response.project.title} was successfully created you can check the project `,
				link: `/projects/${response.project._id}`,
			})
		 } catch (err){
			console.log(err);
			setErrorMessage(err.message);
		 }
	}
}