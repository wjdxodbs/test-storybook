import type { Meta, StoryObj } from "@storybook/react";
import PrimaryBtn from "../components/PrimaryBtn";
import { fn } from "@storybook/test";

const meta = {
  title: "Buttons/PrimaryBtn",
  component: PrimaryBtn,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story: any) => (
      <div className="w-80">
        <Story />
      </div>
    ),
  ],
  argTypes: {
    theme: {
      control: {
        type: "select",
        option: ["dark", "light", "social", "text"],
      },
      description: "버튼 테마",
      // defaultValue: "dark",
    },
    children: {
      control: {
        type: "text",
      },
      description: "버튼 텍스트",
      defaultValue: "타이틀",
    },
    isDisabled: {
      control: {
        type: "boolean",
      },
      description: "",
    },
    onClick: {
      action: "clicked",
      description: "버튼 클릭 이벤트",
    },
  },
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof PrimaryBtn>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Button",
    theme: "dark",
    isDisabled: true,
  },
};
