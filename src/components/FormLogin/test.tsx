import { renderTheme } from "../../styles/render-theme";

// react component to be test
import FormLogin from ".";

describe("<FormLogin />", () => {
	it("should match snapshot", () => {
		const { container } = renderTheme(<FormLogin />);

		expect(container).toMatchSnapshot();
	});
});
