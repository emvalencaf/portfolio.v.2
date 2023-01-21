import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';

// react component to be test
import Menu from '.';

// mock
import mock from './mock';

describe('<Menu />', () => {
	it("should render a Menu component with mock MenuLinks", () => {
		renderTheme(<Menu {...mock} />);

		expect(screen.getAllByRole("link")).toHaveLength(mock.menuLinks.length);
	});

	it("should render a Menu component without any props", () => {
		const { container } = renderTheme(<Menu />);

		expect(screen.getByRole("link")).toHaveAttribute("href", "/");
	});

	it("should match a snapshot", () => {
		const { container } = renderTheme(<Menu {...mock} />);

		expect(container).toMatchSnapshot();
	})
});
