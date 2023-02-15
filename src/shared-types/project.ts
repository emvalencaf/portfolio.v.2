import { SuccessState } from "./async-success-error";
import { BackendUser } from "./user-backend";

export type Project = {
	_id: string;
	title: string;
	resume: string;
	description: string;
	mainLang: "javascript" | "typescript" | "html" | "css" | "python" | "java" | "cplus" | "csharp" | "php";
	srcImg?: string;
	urlDemo: string;
	urlRepository: string;
	owner: BackendUser;
	createdAt: string | number;
	updatedAt: string | number;
};

export type FetchResponseProject = {
	project: Project;
};

export type ProjectControllerCreate = {
	data: Project;
	successMessage: SuccessState;
}