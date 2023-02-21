import { Meta, Story } from '@storybook/react/types-6-0';
import GithubHoverCard from './';

export default {
	title: 'GithubHoverCard',
	component: GithubHoverCard,
} as Meta;

export const Template: Story = (args) => {
	return (
		<div>
			<GithubHoverCard {...args} />
		</div>
	);
};
