import { Meta, Story } from '@storybook/react/types-6-0';
import SectionContact, { SectionContactProps } from '.';

export default {
	title: 'SectionContact',
	component: SectionContact,
} as Meta<SectionContactProps>;

export const Template: Story<SectionContactProps> = (args) => {
	return (
		<div>
			<SectionContact {...args} />
		</div>
	);
};
