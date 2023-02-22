import { renderTheme } from "../../styles/render-theme";

// react component to be test
import CardProject from ".";

// mock
import mock from "./mock";

describe("<CardProject />", () => {
	it("should match snapshot", () => {
		const { container } = renderTheme(<CardProject {...mock} />);

		expect(container).toMatchSnapshot();
	});
});
