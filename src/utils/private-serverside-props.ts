// hooks
import { getSession } from "next-auth/react";

// types
import { GetServerSidePropsContext } from "next";
import { Session } from "next-auth";

// utils
import { serverSideRedirect } from "./backend-redirect";

export const privateServerSideProps = async <T>(
	ctx: GetServerSidePropsContext,
	callbackFn?: (session: Session) => Promise<T>
) => {
	const session: Session = await getSession(ctx);
	console.log("session data in privateServerSideProps", session);
	if (!session) return serverSideRedirect(ctx);
	if (callbackFn) {
		try {
			console.log("in callbackFn");
			const result = await callbackFn(session);
			console.log(
				"result of callbackFn in privaateServerSideProps in the callbackFn",
				result
			);
			return result;
		} catch (e) {
			console.log(e);
			return serverSideRedirect(ctx);
		}
	} else {
		console.log("private serverside else block", session);
		return {
			props: {
				session,
			},
		};
	}
};
