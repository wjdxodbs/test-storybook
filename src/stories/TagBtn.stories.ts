import type { Meta, StoryObj } from "@storybook/react";
import TagBtn from "../components/TagBtn";
import { fn } from "@storybook/test";

const meta = {
  title: "Buttons/TagBtn",
  component: TagBtn,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    isChecked: {
      control: {
        type: "boolean",
      },
      description: "버튼 활성화 여부",
    },
    children: {
      control: {
        type: "text",
      },
      description: "버튼 텍스트",
    },
    onClick: {
      action: "clicked",
      description: "버튼 클릭 이벤트",
    },
  },
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof TagBtn>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isChecked: false,
    children: "button",
  },
};
