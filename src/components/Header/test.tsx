import { screen } from "@testing-library/react";
import { renderTheme } from "../../styles/render-theme";

// react component to be test
import Header from ".";

// mock
import mock from "./mock";

describe("<Header />", () => {
	it("should render Header component with menuLink default", () => {
		renderTheme(<Header logo={mock.logo} />);

		expect(screen.getByLabelText("logo link")).toBeInTheDocument();
		expect(
			screen.queryByRole("link", { name: mock.menuLinks[3].link })
		).not.toBeInTheDocument();
	});

	it("should not render Header component", () => {
		renderTheme(<Header {...mock} visible={false} />);

		const header = screen.getByLabelText("logo link").parentElement;

		expect(header).toHaveStyle({
			opacity: 0,
			visibility: "hidden",
			display: "none",
			appearance: "none",
		});
	});

	it("should match snapshot", () => {
		const { container } = renderTheme(<Header {...mock} visible />);

		expect(container).toMatchSnapshot();
	});
});
