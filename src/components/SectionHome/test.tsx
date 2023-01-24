import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';

// react component to be test
import SectionHome from '.';

// mock
import mock from './mock';

describe('<SectionHome />', () => {
	it('should render component it props default values', () => {
		renderTheme(<SectionHome {...mock} />);

		expect(screen.getByRole('heading', { name: 'Oi' })).toBeInTheDocument();
	});
});
