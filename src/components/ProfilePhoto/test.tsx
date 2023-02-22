import { renderTheme } from "../../styles/render-theme";

// react component to be test
import ProfilePhoto from ".";

// mock
import mock from "./mock";

describe("<ProfilePhoto />", () => {
	it("should match a snapshot", () => {
		const { container } = renderTheme(<ProfilePhoto {...mock} />);

		expect(container).toMatchSnapshot();
	});
});
