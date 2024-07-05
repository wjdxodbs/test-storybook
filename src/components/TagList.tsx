import { useState } from "react";
import TagBtn from "./TagBtn";

interface ITagListProps {
  tagList: string[];
}

const TagList = ({ tagList }: ITagListProps) => {
  const [selectedTag, setSelectedTag] = useState<string>(tagList[0]);

  return (
    <div className="flex gap-x-4">
      {tagList.map((tag) => (
        <TagBtn
          key={tag}
          isChecked={tag === selectedTag}
          onClick={() => setSelectedTag(tag)}
        >
          {tag}
        </TagBtn>
      ))}
    </div>
  );
};

export default TagList;
