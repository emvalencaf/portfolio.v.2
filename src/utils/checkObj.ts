export default class CheckObj {
	static isObjectEqual(objA: unknown, objB: unknown) {
		return JSON.stringify(objA) === JSON.stringify(objB);
	}
}
