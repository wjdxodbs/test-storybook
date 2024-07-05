import type { Meta, StoryObj } from "@storybook/react";
import TagList from "../components/TagList";
import { fn } from "@storybook/test";

const meta = {
  title: "List/TagList",
  component: TagList,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    tagList: {
      control: {
        type: "object",
      },
      description: "태그 리스트",
      defaultValue: ["tag1", "tag2", "tag3"],
    },
  },
} satisfies Meta<typeof TagList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tagList: ["tag1", "tag2", "tag3", "tag4"],
  },
};
