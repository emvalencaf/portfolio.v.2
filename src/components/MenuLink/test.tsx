import { fireEvent, screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';

// react component to be test
import MenuLink, { MenuLinkProps } from '.';

const mock: MenuLinkProps = {
	children: "click here",
	link: "/",
};

describe('<MenuLink />', () => {
	it("should render MenuLink component with a anchor element", () => {
		renderTheme(<MenuLink link="#home">Home</MenuLink>);
		expect(screen.getByRole("link", { name: "Home" })).toHaveAttribute("href", "#home");
	});

	it("should render a MenuLink component with nextlink component", () =>{
		renderTheme(<MenuLink link='/home'>Home</MenuLink>);
		expect(screen.getByRole("link", { name: "Home" })).toHaveAttribute("href", "/home");
	});

	it("should render MenuLink component with a internal link", () => {
		renderTheme(<MenuLink link='https://localhost:3000/home'>Home</MenuLink>);

		expect(screen.getByRole("link", { name: "Home" })).toHaveAttribute("rel","internal");
	});

	it("should render MenuLink component with a external link that will open a new tab", () => {
		renderTheme(<MenuLink link='https://google.com' newTab>Home</MenuLink>);

		expect(screen.getByRole("link", { name: "Home" })).toHaveAttribute("target","_blank");
		expect(screen.getByRole("link", { name: "Home" })).toHaveAttribute("rel","external");
	});

	it("should match a snapshot", () => {
		const { container } = renderTheme(<MenuLink link="#" >Home</MenuLink>);

		expect(container).toMatchSnapshot();
	})
});
