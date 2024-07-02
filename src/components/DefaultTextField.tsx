import React, { useState } from "react";
import ErrorMsg from "./ErrorMsg";
import IconBtn from "./IconBtn";

interface IDefaultTextFieldProps {
  errorMsg: string;
  iconPath: string;
  iconAlt: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  placeholder: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  value: string;
  isError: boolean;
  id: string;
}

const DefaultTextField = ({
  errorMsg,
  iconPath,
  iconAlt,
  onClick,
  placeholder,
  onChange,
  value,
  isError,
  id,
}: IDefaultTextFieldProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const borderColor = isFocused
    ? "border-secondary"
    : !value
      ? "border-mono300"
      : "border-primary";

  return (
    <div className="relative text-field">
      <div
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`text-primary border-b ${borderColor}`}
      >
        <input
          id={id}
          type="text"
          className="outline-none"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        {!!value && (
          <IconBtn alt={iconAlt} iconPath={iconPath} onClick={onClick} />
        )}
      </div>
      {isError && <ErrorMsg>{errorMsg}</ErrorMsg>}
    </div>
  );
};

export default DefaultTextField;
