export default class CheckObj{
	static isObjectEqual(objA: any, objB: any) {
		return JSON.stringify(objA) === JSON.stringify(objB);
	}
}