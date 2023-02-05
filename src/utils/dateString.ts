class DateStringFormating {
	static getMonthAndFullYear(timestamp: string | number): string {
		const date = new Date(timestamp);
		return `${date.getMonth()}/${date.getFullYear()}`;
	};
	static getFullYear(timestamp: string | number): number {
		const date = new Date(timestamp);
		return date.getFullYear();
	}
}

export default DateStringFormating;