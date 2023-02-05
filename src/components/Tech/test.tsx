import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';

// react component to be test
import Tech from '.';

// mock
import mock from './mock';

describe('<Tech />', () => {
	it('should match a snapshot', () => {
		const { container } = renderTheme(<Tech {...mock} />);

		expect((container)).toMatchSnapshot();
	});
});
