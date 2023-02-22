import { Project } from "./project";

export type BackendUser = {
	_id: string;
	name: string;
	email: string;
	createdAt: string | number;
	updatedAt: string | number | null;
	projects: Project[];
};
