import React from "react";
import IconBtn from "./IconBtn";

interface INavBarProps {
  isShowBackBtn: boolean;
  isShowCloseBtn: boolean;
  title: string;
  onBackBtnClick?: React.MouseEventHandler<HTMLButtonElement>;
  onCloseBtnClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const NavBar = ({
  isShowBackBtn,
  isShowCloseBtn,
  title = "",
  onBackBtnClick = () => {},
  onCloseBtnClick = () => {},
}: INavBarProps) => {
  return (
    <div className="flex gap-[2dvh] justify-between">
      <div className="flex gap-2">
        {isShowBackBtn && (
          <IconBtn
            alt="back-arrow"
            iconPath={`https://kr.object.ncloudstorage.com/icons/ic-back-arrow.svg`}
            onClick={onBackBtnClick}
          />
        )}
        {title && <h1 className="text-2xl">{title}</h1>}
      </div>
      {isShowCloseBtn && (
        <IconBtn
          alt="close"
          iconPath={`https://kr.object.ncloudstorage.com/icons/ic-close.svg`}
          onClick={onCloseBtnClick}
        />
      )}
    </div>
  );
};

export default NavBar;
