import { ITag } from "../../types/tag-type";
import { NavLink } from "react-router-dom";

const Tags = ({ tags }: { tags: ITag[] }) => {
  return (
    <div className="tags">
      <span className="tags__header">Tags</span>
      {tags.map((tag, index) => (
        <NavLink to={tag.url} className="tags__item" key={index}>
          {tag.name}
        </NavLink>
      ))}
    </div>
  );
};

export default Tags;
