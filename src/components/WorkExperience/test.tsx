import { renderTheme } from "../../styles/render-theme";

// react component to be test
import WorkExperience from ".";

// mock
import mock from "./mock";

describe("<WorkExperience />", () => {
	it("should match a snapshot", () => {
		const { container } = renderTheme(<WorkExperience {...mock} />);

		expect(container).toMatchSnapshot();
	});
});
