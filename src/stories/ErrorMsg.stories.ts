import type { Meta, StoryObj } from "@storybook/react";
import ErrorMsg from "../components/ErrorMsg";

const meta = {
  title: "TEXT/ErrorMsg",
  component: ErrorMsg,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    children: { control: "text", description: "label의 내용" },
  },
} satisfies Meta<typeof ErrorMsg>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "에러 메세지는 여기로",
  },
};
