import { Meta, Story } from "@storybook/react/types-6-0";

// components and it's type props
import HtmlComponent, { HtmlComponentProps } from ".";

// mock
import mock from "./mock";

export default {
	title: "HtmlComponent",
	component: HtmlComponent,
	args: {
		html: mock,
	},
	argTypes: {
		children: { type: "string" },
	},
} as Meta;

export const Template: Story<HtmlComponentProps> = (args) => (
	<div style={{ maxWidth: "800px", margin: "0 auto" }}>
		<HtmlComponent {...args} />
	</div>
);
