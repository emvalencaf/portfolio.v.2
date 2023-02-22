import { Meta, Story } from "@storybook/react/types-6-0";
import Section, { SectionProps } from ".";

export default {
	title: "Section",
	component: Section,
	args: {
		children: "<h1> Olá </h1>",
	},
} as Meta<SectionProps>;

export const Template: Story<SectionProps> = (args) => {
	return (
		<div>
			<Section {...args} />
		</div>
	);
};
