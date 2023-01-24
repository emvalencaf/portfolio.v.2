import { Meta, Story } from '@storybook/react/types-6-0';
import SectionHome, { SectionHomeProps } from '.';

export default {
	title: 'SectionHome',
	component: SectionHome,
} as Meta<SectionHomeProps>;

export const Template: Story<SectionHomeProps> = (args) => {
	return (
		<div>
			<SectionHome {...args} />
		</div>
	);
};
