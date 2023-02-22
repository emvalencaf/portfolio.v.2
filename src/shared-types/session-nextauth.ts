import { ISODateString } from "./isodatestring";
import { JWT } from "./json-web-token";

export type Session = {
	user?: {
		id?: string | null;
		name?: string | null;
		email?: string | null;
		image?: string | null;
	};
	expires: ISODateString;
	accessToken?: JWT;
};
