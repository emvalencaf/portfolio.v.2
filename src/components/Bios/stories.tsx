import { Meta, Story } from "@storybook/react/types-6-0";
import Bios, { BiosProps } from ".";

// mock
import mock from "./mock";

export default {
	title: "Bios",
	component: Bios,
	args: mock,
} as Meta<BiosProps>;

export const Template: Story<BiosProps> = (args) => {
	return (
		<div>
			<Bios {...args} />
		</div>
	);
};
