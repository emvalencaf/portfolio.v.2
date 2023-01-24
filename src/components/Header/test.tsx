import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';

// react component to be test
import Header from '.';

// mock
import mock from './mock';


describe('<Header />', () => {
	it('should match snapshot', () => {
		const { container } = renderTheme(<Header {...mock} />);

		expect(container).toMatchSnapshot();
	});
});
