import { Meta, Story } from '@storybook/react/types-6-0';
import TechButton, { TechButtonProps } from '.';

// mock
import mock from './mock';

export default {
	title: 'TechButton',
	component: TechButton,
	args: mock,
} as Meta<TechButtonProps>;

export const Template: Story<TechButtonProps> = (args) => {
	return (
		<div>
			<TechButton {...args} />
		</div>
	);
};
