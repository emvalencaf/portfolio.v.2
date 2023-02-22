import { Meta, Story } from "@storybook/react/types-6-0";
import MenuLink, { MenuLinkProps } from ".";

export default {
	title: "MenuLink",
	component: MenuLink,
	args: {
		link: "/",
		text: "click here",
		newTab: false,
	},
	argTypes: {
		link: { type: "string" },
		text: { type: "string" },
		newTab: { type: "boolean" },
	},
} as Meta<MenuLinkProps>;

export const Template: Story<MenuLinkProps> = (args) => {
	return (
		<div>
			<MenuLink {...args} />
		</div>
	);
};
