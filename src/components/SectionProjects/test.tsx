import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';

// react component to be test
import SectionProject, { SectionProjectProps } from '.';

// mock
import mock from "./mock";

describe('<SectionProject />', () => {
	it('should match snapshot', () => {
		const { container } = renderTheme(<SectionProject {...mock} />);

		expect(container).toMatchSnapshot();
	});
});
