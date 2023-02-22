import { screen } from "@testing-library/react";
import { renderTheme } from "../../styles/render-theme";

// react component to be test
import Footer from ".";
import mock from "./mock";

describe("<Footer />", () => {
	it("should render Footer component with all social media and with user and date", () => {
		renderTheme(<Footer {...mock} />);

		expect(screen.getAllByRole("link")).toHaveLength(8);
		expect(screen.getByLabelText("year")).toBeInTheDocument();
		expect(screen.getByLabelText("owner name")).toBeInTheDocument();
	});

	it("should render Footer component with no social media url and default date value", () => {
		renderTheme(<Footer />);

		expect(screen.getByLabelText("year")).toBeInTheDocument();
		expect(screen.queryByLabelText("owner name")).not.toBeInTheDocument();
		expect(screen.queryAllByRole("link")).not.toHaveLength(8);
	});

	it("should match a snapshot", () => {
		const { container } = renderTheme(<Footer {...mock} />);

		expect(container).toMatchSnapshot();
	});
});
