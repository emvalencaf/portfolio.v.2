import { renderTheme } from "../../styles/render-theme";

// react component to be test
import TechButton from ".";

// mock
import mock from "./mock";

describe("<TechButton />", () => {
	it("should match a snapshot", () => {
		const { container } = renderTheme(<TechButton {...mock} />);

		expect(container).toMatchSnapshot();
	});
});
