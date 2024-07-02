import type { Meta, StoryObj } from "@storybook/react";
import NavBar from "../components/NavBar";

const meta = {
  title: "Navigation/NavBar",
  component: NavBar,
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
    isShowBackBtn: {
      control: {
        type: "boolean",
      },
      description: "뒤로가기 버튼 표시 여부",
      defaultValue: true,
    },
    isShowCloseBtn: {
      control: {
        type: "boolean",
      },
      description: "닫기 버튼 표시 여부",
      defaultValue: true,
    },
    title: {
      control: {
        type: "text",
      },
      description: "페이지 타이틀",
      defaultValue: "타이틀",
    },
    onBackBtnClick: {
      action: "clicked",
      description: "뒤로가기 버튼 클릭 이벤트",
    },
    onCloseBtnClick: {
      action: "clicked",
      description: "닫기 버튼 클릭 이벤트",
    },
  },
} satisfies Meta<typeof NavBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isShowBackBtn: true,
    isShowCloseBtn: true,
    title: "타이틀",
  },
};
