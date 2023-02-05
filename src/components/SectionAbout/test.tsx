import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';

// react component to be test
import SectionAbout from '.';

// mock
import mock from "./mock";

describe('<SectionAbout />', () => {
	it('should match a snapshot', () => {
		const { container } = renderTheme(<SectionAbout {...mock} />);

		expect(container).toMatchSnapshot();
	});
});