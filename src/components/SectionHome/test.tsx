import { screen } from "@testing-library/react";
import { renderTheme } from "../../styles/render-theme";

// react component to be test
import SectionHome from ".";

// mock
import mock from "./mock";

describe("<SectionHome />", () => {
	it("should render SectionHome with stack language", () => {
		renderTheme(<SectionHome {...mock} />);

		expect(
			screen.getByRole("heading", { name: mock.mainStack.join(" | ") })
		).toBeInTheDocument();
	});
	it("should render a SectionHome without stack language", () => {
		renderTheme(<SectionHome id={mock.id} />);

		expect(
			screen.queryByRole("heading", { name: mock.mainStack.join(" | ") })
		).not.toBeInTheDocument();
	});
	it("should render match a snapshot", () => {
		const { container } = renderTheme(<SectionHome {...mock} />);

		expect(container).toMatchSnapshot();
	});
});
