// hooks
import useSWR from "swr";

// controller
import ProjectController from "../../api/controller/project";
import { FetchResponseProject } from "../../shared-types/project";

// types
type ResponseUseGetProject = Pick<FetchResponseProject, "project"> & {
	isLoading: boolean;
	isError?: Error | null;
};

export const useGetProject = (id: string | string[]): ResponseUseGetProject => {
	// controller method
	const fetcher = ProjectController.getById;
	// states
	const { data, error, isLoading } = useSWR<FetchResponseProject>(
		id,
		fetcher
	);

	if (isLoading)
		return {
			project: null,
			isLoading,
			isError: null,
		};

	if (error)
		return {
			project: null,
			isLoading,
			isError: error,
		};

	if (!data)
		return {
			project: null,
			isLoading: false,
			isError: null,
		};

	return {
		project: data.project,
		isLoading,
		isError: null,
	};
};
