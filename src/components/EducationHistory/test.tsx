import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';

// react component to be test
import AcademicHistory from '.';

import mock from './mock';


describe('<AcademicHistory />', () => {
	it('should render component it props default values', () => {
		const { container } = renderTheme(<AcademicHistory {...mock} />);

		expect(container).toMatchSnapshot();
	});
});
