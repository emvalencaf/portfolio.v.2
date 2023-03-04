// hooks
import { useEffect, useState, useRef } from "react";

// type
type UseFetchState<T> = {
	status: "idle" | "loading" | "error" | "success";
	data: null | T;
	error: null | Error;
};

// utils
import CreateFetch from "../../utils/createFetch";
// will check if object A's props values are equalas to object B's props values. That will be used to compare the url and options params to they refs
import CheckObj from "../../utils/checkObj";

// hook
export const useFetch = <T>(
	url: string,
	options?: RequestInit,
	cb?: <T>() => Promise<T>
): UseFetchState<T> => {
	// states
	const [fetchState, setFetchState] = useState<UseFetchState<T>>({
		status: "idle",
		data: null,
		error: null,
	});
	const [shouldLoad, setShouldLoad] = useState<boolean>(false);

	// refs
	const urlRef = useRef(url);
	const optionsRef = useRef(options);

	useEffect(() => {
		let changed = false;

		if (!CheckObj.isObjectEqual(url, urlRef.current)) {
			urlRef.current = url;
			changed = true;
		}

		if (!CheckObj.isObjectEqual(options, optionsRef.current)) {
			optionsRef.current = options;
			changed = true;
		}

		if (changed) setShouldLoad((s) => !s);
	}, [url, options]);

	useEffect(() => {
		// flag to clean up useFetch
		let wait = false;
		// if no url in the ref it will do nothing.
		if (!urlRef.current) return;

		// it will controller the fetching of data, so if the component is unmounted while fetching in the cleanup the fetch will be cancel
		const controller = new AbortController();
		const signal = controller.signal;

		const fetchData = async () => {
			console.log("dentro do fetchData");
			try {
				// it will flag a loading for our fetch data
				setFetchState((currentData) => ({
					...currentData,
					state: "loading",
				}));
				console.log(fetchState);

				if (cb) {
					const json = await cb<T>();
					if (!wait)
						setFetchState({
							data: json,
							status: "success",
							error: null,
						});
					return;
				}

				const json = await CreateFetch.dispatch<T>(urlRef.current, {
					signal,
					...optionsRef.current,
				});
				console.log(json);
				/*
				if (!response.ok) return setFetchState({
					data: null,
					status: "error",
					error: new Error(response.statusText),
				});*/

				// const json = await response.json();

				if (!wait)
					setFetchState({
						data: json,
						status: "success",
						error: null,
					});
			} catch (err) {
				console.log(err);

				if (!wait)
					setFetchState({
						data: null,
						status: "error",
						error: err.message,
					});

				throw err;
			}
		};

		// it will only start fetchData if the component is mounted
		if (!wait) fetchData();

		// it will cleanup the fetchData when the component is unmounted
		// if the fetch is already happening it will cancel
		return () => {
			wait = true;
			controller.abort();
		};
	}, [cb, fetchState, shouldLoad]);

	const { data, status, error } = fetchState;

	return { data, status, error };
};
