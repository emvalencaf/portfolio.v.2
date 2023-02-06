import { screen } from '@testing-library/react';
import { renderTheme } from '../../styles/render-theme';

// react component to be test
import CardProject, { CardProjectProps } from '.';

// mock
import mock from "./mock";

describe('<CardProject />', () => {
	it('should render component it props default values', () => {
		renderTheme(<CardProject {...mock} />);

		expect(screen.getByRole('heading', { name: 'Oi' })).toBeInTheDocument();
	});
});
