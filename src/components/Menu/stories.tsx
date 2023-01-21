import { Meta, Story } from '@storybook/react/types-6-0';
import Menu, { MenuProps } from '.';
import mock from './mock';

export default {
	title: 'Menu',
	component: Menu,
	args: mock,
	parameters: {
		layout: "fullscreen",
	},
} as Meta<MenuProps>;

export const Template: Story<MenuProps> = (args) => {
	return (
		<div>
			<Menu {...args} />
		</div>
	);
};
