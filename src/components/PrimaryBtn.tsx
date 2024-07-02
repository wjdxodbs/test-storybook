import React from "react";

type PrimaryBtnTheme = "dark" | "light" | "social" | "text";

interface IPrimaryBtnProps {
  theme: PrimaryBtnTheme;
  children: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  isDisabled: boolean;
}

const dark = "bg-primary text-white";
const light = "bg-white text-primary";
const social = "bg-social text-white";
const text = "bg-transparent text-white";
const disabled = "disabled:bg-mono100 disabled:text-mono200";

const color: Record<PrimaryBtnTheme, string> = {
  dark,
  light,
  social,
  text,
};

const PrimaryBtn = ({
  theme,
  children,
  onClick,
  isDisabled,
}: IPrimaryBtnProps) => {
  return (
    <button
      className={`
        w-full h-[59px] rounded-primary-button ${disabled} ${color[theme]}`}
      onClick={onClick}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};

export default PrimaryBtn;
