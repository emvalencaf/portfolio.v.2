import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';

// theme
import { theme } from '../../styles/theme';

// react component to be test
import SocialMedia from '.';

// mock
import mock from "./mock";

describe('<SocialMedia />', () => {
	it("should render all social media in SocialMedia component", () => {
		renderTheme(<SocialMedia {...mock} />);

		expect(screen.getAllByRole("link")).toHaveLength(8);
	});

	it("should rend no social media in SocialMedia component", () => {
		renderTheme(<SocialMedia />);

		expect(screen.queryAllByRole("link")).toHaveLength(0);
	});


	it("should rend SocialMedia component with sizes small", () => {
		renderTheme(<SocialMedia githubURL={mock.githubURL} sizes="small" />);

		expect(screen.getByLabelText("github profile")).toHaveStyle({
			width: theme.fonts.sizes.medium,
			height: theme.fonts.sizes.medium,
		});
	});

	it("should rend SocialMedia component with size medium", () => {
		renderTheme(<SocialMedia githubURL={mock.githubURL} sizes="medium" />);
		expect(screen.getByLabelText("github profile")).toHaveStyle({
			width: theme.fonts.sizes.large,
			height: theme.fonts.sizes.large,
		});
	});

	it("should rend SocialMedia component with size big", () => {
		renderTheme(<SocialMedia githubURL={mock.githubURL} sizes="big" />);
		expect(screen.getByLabelText("github profile")).toHaveStyle({
			width: theme.fonts.sizes.xlarge,
			height: theme.fonts.sizes.xlarge,
		});
	});


	it("should match a snapshot", () => {
		const { container } = renderTheme(<SocialMedia {...mock} />)

		expect(container).toMatchSnapshot();
	});
});


