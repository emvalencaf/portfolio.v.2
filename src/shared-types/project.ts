export type Project = {
	_id: string;
	title: string;
	resume: string;
	description: React.ReactNode;
	mainLang: "javascript" | "typescript" | "html" | "css" | "python" | "java" | "cplus" | "csharp" | "php";
	srcImg?: string;
	urlDemo: string;
	urlRepository: string;
};

export type FetchResponseProject = {
	project: Project;
};