import RecipeTag from "./RecipeTag.jsx";
import { useMemo } from "react";
import PropTypes from "prop-types";

export default function RecipeTagsGroup({ tags }) {
  const tagsToPresent = useMemo(() => {
    if (!tags) return [];

    const tagsToPresent = tags.slice(0, 5);

    if (tags.length > 5) tagsToPresent.push("...");

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
};
