// hooks
import useSWR from "swr";
// controller
import ProjectController from "../../api/controller/project";

// types
import { FetchResponseProjects, Project } from "../../shared-types/project";
type ResponseUseGetAllProjects = {
	projects: Project[];
	isLoading: boolean;
	isError: Error | null;
};

export const useGetAllProjects = (): ResponseUseGetAllProjects => {
	const fetcher = ProjectController.getAll;
	const { data, isLoading, error } = useSWR<FetchResponseProjects>(
		"",
		fetcher
	);

	if (isLoading)
		return {
			projects: null,
			isLoading,
			isError: null,
		};

	if (error)
		return {
			projects: null,
			isLoading,
			isError: error,
		};

	return {
		projects: data.projects,
		isLoading,
		isError: null,
	};
};
