import React from "react";

interface IIconBtnProps {
  alt: string;
  iconPath: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const IconBtn = ({ alt, iconPath, onClick }: IIconBtnProps) => {
  return (
    <button onClick={onClick}>
      <img src={iconPath} alt={alt} />
    </button>
  );
};

export default IconBtn;
