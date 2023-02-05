class DateStringFormating {
	static getMonthAndFullYear(timestamp: string | number): string {
		const date = new Date(timestamp);
		return `${date.getMonth()}/${date.getFullYear()}`;
	};
}

export default DateStringFormating;