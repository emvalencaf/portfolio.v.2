import React from 'react';

import { Meta, Story } from '@storybook/react/types-6-0';
import Footer, { FooterProps } from '.';

// mock
import mock from "./mock";

export default {
	title: 'Footer',
	component: Footer,
	args: mock,
	argTypes: {
		instaURL: {type: "string"},
		facebookURL: {type: "string"},
		twitterURL: {type: "string"},
		githubURL: {type: "string"},
		homepageURL: {type: "string"},
		linkedinURL: {type: "string"},
		tiktokURL: {type: "string"},
		youtubeURL: {type: "string"},
		ownerName: {type: "string"},
		year: {type: "string"},
	}
} as Meta<FooterProps>;

export const Template: Story<FooterProps> = (args) => {
	return (
		<div>
			<Footer {...args} />
		</div>
	);
};
