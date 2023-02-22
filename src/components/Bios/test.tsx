import { renderTheme } from "../../styles/render-theme";

// react component to be test
import Bios from ".";

// mock
import mock from "./mock";

describe("<Bios />", () => {
	it("should match a snapshot", () => {
		const { container } = renderTheme(<Bios {...mock} />);

		expect(container).toMatchSnapshot();
	});
});
