import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';

// react component to be test
import SectionProject, { SectionProjectProps } from '.';

// mock
import mock from "./mock";

describe('<SectionProject />', () => {
	it('should render component it props default values', () => {
		renderTheme(<SectionProject {...mock} />);

		expect(screen.getByRole('heading', { name: 'Oi' })).toBeInTheDocument();
	});
});
