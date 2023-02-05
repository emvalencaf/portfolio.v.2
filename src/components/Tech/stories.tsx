import { Meta, Story } from '@storybook/react/types-6-0';
import Tech, { TechProps } from '.';

// mock
import mock from './mock';

export default {
	title: 'Tech',
	component: Tech,
	args: mock,
} as Meta<TechProps>;

export const Template: Story<TechProps> = (args) => {
	return (
		<div>
			<Tech {...args} />
		</div>
	);
};
