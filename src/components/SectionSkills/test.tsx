import { renderTheme } from "../../styles/render-theme";

// react component to be test
import SectionSkills from ".";

// mock
import mock from "./mock";

describe("<SectionSkills />", () => {
	it("should match a snapshot", () => {
		const { container } = renderTheme(<SectionSkills {...mock} />);

		expect(container).toMatchSnapshot();
	});
});
