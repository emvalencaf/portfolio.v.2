import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';

// react component to be test
import SectionHome from '.';

// mock
import mock from './mock';

describe('<SectionHome />', () => {
	it('should render match a snapshot', () => {
		const { container } = renderTheme(<SectionHome {...mock} />);

		expect(container).toMatchSnapshot();
	});
});
