import { Meta, Story } from "@storybook/react/types-6-0";
import SocialMedia, { SocialMediaProps } from ".";
import mock from "./mock";

export default {
	title: "SocialMedia",
	component: SocialMedia,
	args: mock,
	argTypes: {
		instaURL: { type: "string" },
		facebookURL: { type: "string" },
		twitterURL: { type: "string" },
		githubURL: { type: "string" },
		homepageURL: { type: "string" },
		linkedinURL: { type: "string" },
	},
} as Meta<SocialMediaProps>;

export const Template: Story<SocialMediaProps> = (args) => {
	return (
		<div>
			<SocialMedia {...args} />
		</div>
	);
};
