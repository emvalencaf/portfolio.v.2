import { screen } from "@testing-library/react";
import { renderTheme } from "../../styles/render-theme";

// react component to be test
import Section from ".";

describe("<Section />", () => {
	it("should render component it props default values", () => {
		renderTheme(
			<Section id="#">
				<h1>Olá</h1>
			</Section>
		);

		expect(
			screen.getByRole("heading", { name: "Olá" })
		).toBeInTheDocument();
	});

	it("should match snapshot", () => {
		const { container } = renderTheme(
			<Section id="#">
				<h1>Olá</h1>
			</Section>
		);

		expect(container).toMatchSnapshot();
	});
});
