import { Meta, Story } from "@storybook/react/types-6-0";
import ProfilePhoto, { ProfilePhotoProps } from ".";
import mock from "./mock";

export default {
	title: "ProfilePhoto",
	component: ProfilePhoto,
	args: mock,
	argTypes: {
		altText: { type: "string" },
		srcImg: { type: "string" },
	},
} as Meta<ProfilePhotoProps>;

export const Template: Story<ProfilePhotoProps> = (args) => {
	return (
		<div>
			<ProfilePhoto {...args} />
		</div>
	);
};
