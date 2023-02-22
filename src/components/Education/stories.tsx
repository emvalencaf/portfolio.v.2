// component
import Education, { EducationProps } from ".";

// types
import { Meta, Story } from "@storybook/react/types-6-0";

// mock
import mock from "./mock";

export default {
	title: "Education",
	component: Education,
	args: mock,
} as Meta<EducationProps>;

export const Template: Story<EducationProps> = (args) => {
	return (
		<div>
			<Education {...args} />
		</div>
	);
};
