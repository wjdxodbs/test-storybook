interface IErrorMsgProps {
  children: string;
}

const ErrorMsg = ({ children }: IErrorMsgProps) => {
  return <p className="text-xs text-error">{children}</p>;
};

export default ErrorMsg;
