export type Token = {
	id: string;
	jwt: string;
	name: string;
	email: string;
	expiration: number;
	iat: number;
	exp: number;
	jti: string;
	sub: string;
};
