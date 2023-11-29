import RecipeTag from "./RecipeTag.jsx";
import { useMemo } from "react";
import PropTypes from "prop-types";

export default function RecipeTagsGroup({ tags, maxTags }) {
  const tagsToPresent = useMemo(() => {
    const maximumTags = maxTags ? maxTags : 3;

    if (!tags) return [];

    const tagsToPresent = tags.slice(0, maximumTags);

    if (tags.length > maximumTags) tagsToPresent.push("...");

    return tagsToPresent;
  }, [tags]);

  return (
    <>
      <div className="flex flex-row flex-wrap">
        {tagsToPresent.map((tag, index) => (
          <RecipeTag key={"RecipeTag_" + index} tag={tag} />
        ))}
      </div>
    </>
  );
}

RecipeTagsGroup.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string),
  maxTags: PropTypes.number,
};
