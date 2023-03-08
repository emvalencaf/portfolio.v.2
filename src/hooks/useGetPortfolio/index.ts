// hooks
import useSWR from "swr";

// controller
import PortfolioController from "../../api/controller/portfolio";

// types
import { FetchResponsePortfolio } from "../../shared-types/portfolio";
type ResponseUseGetProject = Pick<FetchResponsePortfolio, "portfolio"> & {
	isLoading: boolean;
	isError?: Error | null;
};

export const useGetPortfolio = (): ResponseUseGetProject => {
	// controller method
	const fetcher = PortfolioController.get;
	// states
	const { data, error, isLoading } = useSWR<FetchResponsePortfolio>(
		" ",
		fetcher
	);

	if (isLoading)
		return {
			portfolio: null,
			isLoading,
			isError: null,
		};

	if (error)
		return {
			portfolio: null,
			isLoading,
			isError: error,
		};

	if (!data)
		return {
			portfolio: null,
			isLoading: false,
			isError: null,
		};
	console.log(data);
	return {
		portfolio: data.portfolio,
		isLoading,
		isError: null,
	};
};
