import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';

// react component to be test
import AcademicCertificate from '.';

import mock from "./mock";

describe('<AcademicCertificate />', () => {
	it('should render component it props default values', () => {
		const { container } = renderTheme(<AcademicCertificate {...mock} />);

		expect(container).toMatchSnapshot();
	});
});
