import { Meta, Story } from "@storybook/react/types-6-0";
import SectionProject, { SectionProjectProps } from ".";

// mock
import mock from "./mock";

export default {
	title: "SectionProject",
	component: SectionProject,
	args: mock,
} as Meta<SectionProjectProps>;

export const Template: Story<SectionProjectProps> = (args) => {
	return (
		<div>
			<SectionProject {...args} />
		</div>
	);
};
