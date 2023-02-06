import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';

// react component to be test
import SectionContact, { SectionContactProps } from '.';

// mock
import mock from "./mock";

describe('<SectionContact />', () => {
	it('should match snapshot', () => {
		const { container } = renderTheme(<SectionContact {...mock} />);

		expect(container).toMatchSnapshot();
	});
});
