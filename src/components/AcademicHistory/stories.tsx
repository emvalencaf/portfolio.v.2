import { Meta, Story } from '@storybook/react/types-6-0';
import AcademicHistory, { AcademicHistoryProps } from '.';
import mock from './mock';

export default {
	title: 'AcademicHistory',
	component: AcademicHistory,
	args: mock,
} as Meta<AcademicHistoryProps>;

export const Template: Story<AcademicHistoryProps> = (args) => {
	return (
		<div>
			<AcademicHistory {...args} />
		</div>
	);
};
