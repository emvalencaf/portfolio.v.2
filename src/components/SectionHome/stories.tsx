import { Meta, Story } from "@storybook/react/types-6-0";
import SectionHome, { SectionHomeProps } from ".";
import mock from "./mock";

export default {
	title: "SectionHome",
	component: SectionHome,
	args: mock,
	parameters: {
		layout: "fullscreen",
	},
} as Meta<SectionHomeProps>;

export const Template: Story<SectionHomeProps> = (args) => {
	return (
		<div>
			<SectionHome {...args} />
		</div>
	);
};
