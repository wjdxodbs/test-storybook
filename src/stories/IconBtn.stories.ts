import type { Meta, StoryObj } from "@storybook/react";
import IconBtn from "../components/IconBtn";
import { fn } from "@storybook/test";

const meta = {
  title: "Buttons/IconBtn",
  component: IconBtn,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    alt: {
      control: "text",
      description: "이미지의 alt 속성",
      defaultValue: "icon",
    },
    iconPath: {
      control: "text",
      description: "이미지의 경로",
      defaultValue: "",
    },
    onClick: {
      action: "clicked",
      description: "버튼 클릭 이벤트",
    },
  },
  args: {
    // onClick: fn(),
  },
} satisfies Meta<typeof IconBtn>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    alt: "icon",
    iconPath: "https://cdn-icons-png.flaticon.com/512/8634/8634968.png",
  },
};
