import { Meta, Story } from "@storybook/react/types-6-0";
import GithubHoverCard, { GithubHoverCardProps } from "./";

// mock
import mock from "./mock";

export default {
	title: "GithubHoverCard",
	component: GithubHoverCard,
	args: mock,
} as Meta<GithubHoverCardProps>;

export const Template: Story<GithubHoverCardProps> = (args) => {
	return (
		<div>
			<GithubHoverCard {...args} />
		</div>
	);
};
