class DateStringFormating {
	static getMonthAndFullYear(timestamp: string | number): string {
		const date = new Date(timestamp);
		return `${date.getMonth()}/${date.getFullYear()}`;
	}
	static getFullYear(timestamp: string | number): number {
		const date = new Date(timestamp);
		return date.getFullYear();
	}
	static getFullDateString(timestamp: string | number) {
		const date = new Date(timestamp);
		return date.toLocaleDateString("pt-br", {
			weekday: "long",
			year: "numeric",
			month: "long",
			day: "numeric",
		});
	}
	static getTimeStamp(dateString: string | number) {
		return new Date(dateString).getTime();
	}
}

export default DateStringFormating;
