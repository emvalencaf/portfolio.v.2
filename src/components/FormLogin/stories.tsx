import { Meta, Story } from "@storybook/react/types-6-0";
import FormLogin, { FormLoginProps } from ".";

export default {
	title: "FormLogin",
	component: FormLogin,
	parameters: {
		layout: "fullscreen",
	},
	decorators: [
		(Story) => {
			return (
				<div style={{ padding: "4rem" }}>
					<Story />
				</div>
			);
		},
	],
} as Meta<FormLoginProps>;

export const Template: Story<FormLoginProps> = (args) => {
	return (
		<div>
			<FormLogin {...args} />
		</div>
	);
};

export const TemplateWithError: Story<FormLoginProps> = (args) => {
	return (
		<div>
			<FormLogin {...args} />
		</div>
	);
};

TemplateWithError.args = {
	errorMessage: "este é o erro",
};
