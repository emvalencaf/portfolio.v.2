// hooks
import useSWR from "swr";

// controller
import SectionController from "../../api/controller/section";

// types
import { FetchResponseSections } from "../../shared-types/section";
type ResponseGetAllSections = Pick<FetchResponseSections, "sections"> & {
	isLoading: boolean;
	isError?: Error | null;
};

export const useGetAllSections = (token: string): ResponseGetAllSections => {
	// fetcher
	const fetcher = SectionController.getAll;
	// states
	const { data, isLoading, error } = useSWR<FetchResponseSections>(
		token,
		fetcher
	);

	if (isLoading)
		return {
			sections: null,
			isLoading,
			isError: null,
		};

	if (error)
		return {
			sections: null,
			isLoading: false,
			isError: error,
		};

	return {
		sections: data.sections,
		isLoading: false,
		isError: null,
	};
};
