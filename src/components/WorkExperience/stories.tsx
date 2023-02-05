import { Meta, Story } from '@storybook/react/types-6-0';
import WorkExperience, {WorkExperienceProps } from '.';

// mock
import mock from './mock';

export default {
	title: 'WorkExperience',
	component: WorkExperience,
	args: mock,
	argTypes: {
		employer: { type: "string" },
		ocupation: { type: "string" },
		startIn: {control: "date" },
		endIn: { control: "date" },
		showData: { type: "boolean" },
	}
} as Meta<WorkExperienceProps>;

export const Template: Story<WorkExperienceProps> = (args) => {
	return (
		<div>
			<WorkExperience {...args} />
		</div>
	);
};