import { Meta, Story } from '@storybook/react/types-6-0';
import WorkExperienceContainer, { WorkExperienceContainerProps } from '.';
import mock from './mock';

export default {
	title: 'WorkExperienceContainer',
	component: WorkExperienceContainer,
	args: mock,
} as Meta<WorkExperienceContainerProps>;

export const Template: Story<WorkExperienceContainerProps> = (args) => {
	return (
		<div>
			<WorkExperienceContainer {...args} />
		</div>
	);
};
