interface Props {
  isChecked: boolean;
  children: string;
  onClick: () => void;
}

const TagBtn = ({ isChecked, children, onClick }: Props) => {
  const btnStyle = isChecked
    ? "text-primary bg-white"
    : "text-white bg-darkOpacity";

  return (
    <button
      className={`h-[33px] px-[10px] rounded-tag-button border border-white text-sm font-medium clicked:bg-red-500 ${btnStyle}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default TagBtn;
