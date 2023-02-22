import { Meta, Story } from "@storybook/react/types-6-0";
import LogoLink, { LogoLinkProps } from ".";

// mock
import mock from "./mock";

export default {
	title: "LogoLink",
	component: LogoLink,
	args: mock,
	argTypes: {
		srcImg: { type: "string" },
		link: { type: "string" },
		altText: { type: "string" },
		newTab: { type: "boolean" },
	},
} as Meta<LogoLinkProps>;

export const Template: Story<LogoLinkProps> = (args) => {
	return (
		<div>
			<LogoLink {...args} />
		</div>
	);
};
