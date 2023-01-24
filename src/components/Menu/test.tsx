import { fireEvent, render, screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';

// react component to be test
import Menu from '.';

// mock
import mock from './mock';
import { theme } from '../../styles/theme';

describe('<Menu />', () => {
	it("should render a Menu component with mock MenuLinks", () => {
		renderTheme(<Menu {...mock} />);

		expect(screen.getAllByRole("link")).toHaveLength(mock.menuLinks.length);
	});

	it("should render a Menu component without any props", () => {
		const { container } = renderTheme(<Menu />);

		expect(screen.getByRole("link")).toHaveAttribute("href", "#");
	});

	it("should render a Menu component with Button open", () => {
		renderTheme(<Menu {...mock} />);

		const button = screen.getByLabelText("Open/Close menu");
		const menuContainer = screen.getByRole("navigation");
		const openButton = screen.getByLabelText("Open menu");
		expect(button).toHaveStyle({
			display: "none",
			appearance: "none",
			opacity: 0,
		})
		expect(button).toHaveStyleRule("display", "flex", {
			media: theme.media.lteMedium,
		});
		expect(menuContainer).toHaveStyleRule("opacity", "0", {
			media: theme.media.lteMedium,
		});

		expect(openButton).toBeInTheDocument();

		fireEvent.click(button);
		expect(menuContainer).toHaveStyleRule("opacity", "1", {
			media: theme.media.lteMedium,
		});

		expect(screen.getByLabelText("Close menu")).toBeInTheDocument();

		fireEvent.click(menuContainer);

		expect(menuContainer).toHaveStyleRule("opacity", "0", {
			media: theme.media.lteMedium,
		});
		expect(screen.getByLabelText("Open menu")).toBeInTheDocument();
	});

	it("should match a snapshot", () => {
		const { container } = renderTheme(<Menu {...mock} />);

		expect(container).toMatchSnapshot();
	})
});
