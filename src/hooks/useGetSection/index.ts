// hooks
import useSWR from "swr";

// controller
import SectionController from "../../api/controller/section";
import { FetchResponseSection } from "../../shared-types/section";

// types
type ResponseUseGetSection = Pick<FetchResponseSection, "section"> & {
	isLoading: boolean;
	isError: Error | null;
};

export const useGetSection = (
	id: string | string[],
	token: string
): ResponseUseGetSection => {
	// fetcher
	const fetcher = SectionController.getById;
	// state
	const { data, isLoading, error } = useSWR<FetchResponseSection>(
		{ id, token },
		fetcher
	);

	if (isLoading)
		return {
			section: null,
			isLoading,
			isError: null,
		};

	if (error)
		return {
			section: null,
			isLoading: false,
			isError: error,
		};

	return {
		section: data.section,
		isLoading: false,
		isError: null,
	};
};
