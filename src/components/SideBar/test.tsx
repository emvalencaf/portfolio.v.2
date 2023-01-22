import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';

// react component to be test
import SideBar from '.';
import { theme } from '../../styles/theme';

const mock = {
	githubURL: "https://wwww.github.com/tício",
	linkedinURL: "https://www.linkedin.com/in/tício",
}

describe('<SideBar />', () => {
	it('should render SideBar component with github and linkedin profile and default values for sizes', () => {
		renderTheme(<SideBar githubURL={mock.githubURL} />);

		expect(screen.getByRole('link', { name: 'github profile' })).toHaveStyle({
			height: theme.font.sizes.large,
			width: theme.font.sizes.large,
		});
		expect(screen.queryByRole('link', { name: 'linkedin profile' })).not.toBeInTheDocument();
		expect(screen.getByLabelText("vertical division line")).toBeInTheDocument();
	});

	it("should render SideBar component with github profile svg with size big", () => {
		renderTheme(<SideBar githubURL={mock.githubURL} sizes="big" />);

		expect(screen.getByRole("link", { name: "github profile" })).toHaveStyle({
			height: theme.font.sizes.xlarge,
			width: theme.font.sizes.xlarge,
		});
	});

	it("should render SideBar component with github profile svg with size small", () => {
		renderTheme(<SideBar githubURL={mock.githubURL} sizes="small" />);

		expect(screen.getByRole("link", { name: "github profile" })).toHaveStyle({
			height: theme.font.sizes.medium,
			width: theme.font.sizes.medium,
		});
	});

	it('should not render SideBar with github profile ', () => {
		renderTheme(<SideBar githubURL="tício" linkedinURL={mock.linkedinURL} />);

		expect(screen.queryByRole('link', { name: 'github profile' })).not.toBeInTheDocument();
		expect(screen.getByRole('link', { name: 'linkedin profile' })).toHaveAttribute("href", mock.linkedinURL);
		expect(screen.getByLabelText("vertical division line")).toBeInTheDocument();
	});

	it('should not render SideBar', () => {
		renderTheme(<SideBar />);

		expect(screen.queryByRole('link', { name: 'github profile' })).not.toBeInTheDocument();
		expect(screen.queryByRole('link', { name: 'linkedin profile' })).not.toBeInTheDocument();
		expect(screen.queryByLabelText("vertical division line")).not.toBeInTheDocument();
	});

	it("should match a snapshot", () => {
		const { container } = renderTheme(<SideBar {...mock} />);

		expect(container).toMatchSnapshot();

	})
});
