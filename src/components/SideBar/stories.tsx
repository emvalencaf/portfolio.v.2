import { Meta, Story } from "@storybook/react/types-6-0";
import SideBar, { SideBarProps } from ".";

import { theme } from "../../styles/theme";

export default {
	title: "SideBar",
	component: SideBar,
	args: {
		githubURL: "wwww.github.com/tício",
		linkedinURL: "www.linkedin.com/in/tício",
		sizes: "medium",
	},
	argTypes: {
		githubURL: { type: "string" },
		linkedinURL: { type: "string" },
	},
	parameters: {
		layout: "fullscreen",
	},
} as Meta<SideBarProps>;

export const Template: Story<SideBarProps> = (args) => {
	return (
		<div
			style={{
				padding: `0px ${theme.spacings.xxhero}`,
				margin: `calc(${theme.spacings.xhuge} + ${theme.spacings.huge}) auto`,
			}}
		>
			<h1>Lorem ipsum dolor sit, amet</h1>
			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
				doloremque qui eum maxime magni omnis sit, aliquam soluta
				distinctio nam dignissimos praesentium ut sunt porro incidunt
				molestias libero ab consectetur.
			</p>
			<h1>Lorem ipsum dolor sit, amet</h1>
			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
				doloremque qui eum maxime magni omnis sit, aliquam soluta
				distinctio nam dignissimos praesentium ut sunt porro incidunt
				molestias libero ab consectetur.
			</p>
			<h1>Lorem ipsum dolor sit, amet</h1>
			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
				doloremque qui eum maxime magni omnis sit, aliquam soluta
				distinctio nam dignissimos praesentium ut sunt porro incidunt
				molestias libero ab consectetur.
			</p>
			<h1>Lorem ipsum dolor sit, amet</h1>
			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
				doloremque qui eum maxime magni omnis sit, aliquam soluta
				distinctio nam dignissimos praesentium ut sunt porro incidunt
				molestias libero ab consectetur.
			</p>
			<h1>Lorem ipsum dolor sit, amet</h1>
			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
				doloremque qui eum maxime magni omnis sit, aliquam soluta
				distinctio nam dignissimos praesentium ut sunt porro incidunt
				molestias libero ab consectetur.
			</p>
			<h1>Lorem ipsum dolor sit, amet</h1>
			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
				doloremque qui eum maxime magni omnis sit, aliquam soluta
				distinctio nam dignissimos praesentium ut sunt porro incidunt
				molestias libero ab consectetur.
			</p>
			<h1>Lorem ipsum dolor sit, amet</h1>
			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi
				doloremque qui eum maxime magni omnis sit, aliquam soluta
				distinctio nam dignissimos praesentium ut sunt porro incidunt
				molestias libero ab consectetur.
			</p>
			<SideBar {...args} />
		</div>
	);
};
