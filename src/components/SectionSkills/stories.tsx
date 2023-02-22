import { Meta, Story } from "@storybook/react/types-6-0";
import SectionSkills, { SectionSkillsProps } from ".";

// mock
import mock from "./mock";

export default {
	title: "SectionSkills",
	component: SectionSkills,
	args: mock,
} as Meta<SectionSkillsProps>;

export const Template: Story<SectionSkillsProps> = (args) => {
	return (
		<div>
			<SectionSkills {...args} />
		</div>
	);
};
