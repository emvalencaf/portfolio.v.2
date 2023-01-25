import Prism from "prismjs";
import { renderTheme } from "../../styles/render-theme";
import HtmlComponent from ".";
import { screen } from "@testing-library/react";

jest.mock("prismjs");

describe("<HtmlComponent />", () => {
	it("should render a html", () => {
		renderTheme(<HtmlComponent html={"<b>Children</b>"} />);
		const element = screen.getByText("Children");
		expect(element).toBeInTheDocument();
	});

	it("should fired Prism.highlight()", () => {
		renderTheme(<HtmlComponent html={"<b>Children</b>"} />);

		expect(Prism.highlightAll).toBeCalled();
	});

	it("should match a snapshot", () => {
		const { container } = renderTheme(
			<HtmlComponent html={"<b>Children</b>"} />
		);
		expect(container).toMatchSnapshot();
	});
});
