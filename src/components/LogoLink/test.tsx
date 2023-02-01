import { logDOM, screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';

// react component to be test
import LogoLink from '.';

// mock
import mock from "./mock";

describe('<LogoLink />', () => {
	it('should render LogoLink with an image', () => {
		renderTheme(<LogoLink {...mock} />);
		const img = screen.getByRole("img", { name: mock.altText});
		const link = img.parentElement;
		expect(img).toBeInTheDocument();
		expect(link).toHaveAttribute("target", "_self");
	});

	it('should render LogoLink with only text', () => {
		const { container } = renderTheme(<LogoLink link="https://wwww.google.com.br/" altText={mock.altText}/>);
		const link = screen.getByText(mock.altText);

		expect(screen.queryByRole("img", { name: mock.altText})).not.toBeInTheDocument();
		expect(link).toHaveAttribute("rel","external");
	});


	it('should render a LogoLink with a next link', () => {
		const { container } = renderTheme(<LogoLink link="/" altText={mock.altText}/>);
		const link = screen.getByText(mock.altText);

		expect(screen.queryByRole("img", { name: mock.altText})).not.toBeInTheDocument();
		expect(link).toHaveAttribute("rel","internal");
	});

	it("should render LogoLink with link that will open a new tab", () => {
		renderTheme(<LogoLink link='/home' altText={mock.altText} srcImg={mock.srcImg} newTab />);

		expect(screen.queryByRole("link")).toHaveAttribute("target","_blank");
		expect(screen.getByRole("img", { name: mock.altText})).toBeInTheDocument();
		expect(screen.queryByText(mock.altText)).not.toBeInTheDocument();

	})

	it('should match snapshot', () => {
		const { container } = renderTheme(<LogoLink {...mock} />);
		expect(container).toMatchSnapshot();
	});
});
