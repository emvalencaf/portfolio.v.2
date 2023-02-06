import { Meta, Story } from '@storybook/react/types-6-0';
import CardProject, { CardProjectProps } from '.';

// mock
import mock from './mock';

export default {
	title: 'CardProject',
	component: CardProject,
	args: mock,
} as Meta<CardProjectProps>;

export const Template: Story<CardProjectProps> = (args) => {
	return (
		<div style={{ display: "flex", width: "100%", height: "100%", alignContent: "center", justifyContent: "center", margin: "2rem" }}>
			<CardProject {...args} />
		</div>
	);
};
