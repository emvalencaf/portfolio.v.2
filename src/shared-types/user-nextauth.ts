import { JWT } from "./json-web-token";

export type User = {
	id: string;
	jwt: JWT;
	name: string;
	email: string;
	expiration: number;
};
