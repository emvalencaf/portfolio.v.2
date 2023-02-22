import { Meta, Story } from "@storybook/react/types-6-0";
import SectionAbout, { SectionAboutProps } from ".";

// mock
import mock from "./mock";

export default {
	title: "SectionAbout",
	component: SectionAbout,
	args: mock,
} as Meta<SectionAboutProps>;

export const Template: Story<SectionAboutProps> = (args) => {
	return (
		<div>
			<SectionAbout {...args} />
		</div>
	);
};
