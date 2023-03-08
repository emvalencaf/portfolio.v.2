// hooks
import useSWR from "swr";

// controller
import SettingsController from "../../api/controller/settings";
import {
	FetchResponseAllSettings,
	Settings,
} from "../../shared-types/settings";

// type
type ResponseUseGetAllSettings = {
	settings: Settings[];
	isLoading: boolean;
	isError?: Error | null;
};

export const useGetAllSettings = (token: string): ResponseUseGetAllSettings => {
	// fetcher
	const fetcher = SettingsController.getAll;
	// states
	const { data, isLoading, error } = useSWR<FetchResponseAllSettings>(
		token,
		fetcher
	);
	if (isLoading)
		return {
			settings: null,
			isLoading,
			isError: null,
		};

	if (error)
		return {
			settings: null,
			isLoading: false,
			isError: error,
		};

	return {
		settings: data.settings,
		isLoading: false,
		isError: null,
	};
};
