// types
import { Meta, Story } from "@storybook/react/types-6-0";

// components
import Mock, { MockProps } from ".";

export default {
  title: "Mock",
  component: Mock,
} as Meta;

export const Template: Story<MockProps> = (args) => (
  <div>
    <Mock {...args} />
  </div>
);
