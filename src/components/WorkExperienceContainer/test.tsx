import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';

// react component to be test
import WorkExperienceContainer from '.';

// mock
import mock from "./mock";

describe('<WorkExperienceContainer />', () => {
	it('should match a snapshot', () => {
		const { container } = renderTheme(<WorkExperienceContainer {...mock} />);

		expect(container).toMatchSnapshot();
	});
});