import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";

// types
import { Token } from "../../../shared-types/token-nextauth";
import { Session } from "../../../shared-types/session-nextauth";
import { User } from "../../../shared-types/user-nextauth";
import { Account } from "next-auth/core/types";

type NextAuthJwt = {
	token: Token;
	user: User;
	account: Account;
  };
type NextAuthSession = {
	token: Token;
	user: User;
	session: Session;
};
type SetTokenParams = {
	jwt: string;
	user?: {
		id?: string;
		username?: string;
		email?: string;
		provider?: "google";
		confirmed?: boolean;
		blocked?: boolean;
		createdAt?: string;
		updatedAt?: string;
	};
	name?:  string;
	email?: string;
	id?: string;
	expiration?: number;
};

// token expiration config
const actualDateInSeconds = Math.floor(Date.now() / 1000);
const tokenExpirationInSeconds = Math.floor(7 * 24 * 60 * 60);

export default NextAuth({
	secret: process.env.NEXT_AUTH_SECRET,
	session: {
		maxAge: 7 * 24 * 60 * 60,
		strategy: "jwt",
	},
	callbacks: {
		jwt: async ({ token, user, account }: NextAuthJwt) => {
			const isSignIn = !!user;

			if (isSignIn) {

					setToken(user, token);

			} else {
				if (!token?.expiration) Promise.resolve({});

				if (actualDateInSeconds > token.expiration) Promise.resolve({});
			}

			return Promise.resolve(token);
		},
		session: async ({ session, token }: NextAuthSession) => {
			if (
				!token?.jwt ||
				!token?.expiration ||
				!token?.email ||
				!token?.name ||
				!token?.id
			) return null;

			session.accessToken = token.jwt;
			session.user = {
				id: token.id,
				name: token.name,
				email: token.email,
			}

			return {...session};
		},
		redirect: async ({ url, baseUrl }) => {
			if (url.startsWith(baseUrl)) return url;

			if (url.startsWith("/")) return baseUrl + url;

			return baseUrl;
		},
	},
	providers: [
		CredentialsProvider({
			name: "Credentials",
			credentials: {
				username: { label: "Username", type: "text", placeholder: "username" },
				password: { label: "Password", type: "password", placeholder: "password"},
			},
			async authorize(credentials, req) {

				if (!credentials?.username || !credentials?.password) return null;

				try {

					const body = {
						email: credentials.username.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/) ? credentials.username : "",
						name: credentials.username.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/) ? "" : credentials.username,
						password: credentials.password,
					}

					console.log(body);

					const login = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/users/login`, {
						method: "POST",
						headers: {
							"Content-Type" : "application/json",
						},
						body: JSON.stringify(body),
					}).then((data) => data.json());

					console.log(login);

					if (!login) throw new Error("No login");

					const { user, jwt } = login;
					const { id, name, email } = user;

					if (
						!jwt ||
						!id ||
						!name ||
						!email
					) return null;

					return {
						jwt,
						id,
						name,
						email,
					};
				} catch (e) {
					console.log(e);
					return null;
				}
			}
		}),
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		})
	]
});

const setToken = (data: SetTokenParams, token: Token) => {
	if (
		!data ||
		!data?.jwt ||
		(
			data?.user && (
					!data?.user?.username ||
					!data?.user?.id ||
					!data?.user?.id
				)
		) ||
		(
			!data?.user && (
					!data?.email ||
					!data?.id ||
					!data?.name
				)
		)) return {};

	token.jwt = data.jwt;
	token.id = data?.id || data?.user?.id;
	token.name = data?.name || data?.user?.username;
	token.email = data?.email || data?.user?.email;
	token.expiration = Math.floor(actualDateInSeconds + tokenExpirationInSeconds);
};