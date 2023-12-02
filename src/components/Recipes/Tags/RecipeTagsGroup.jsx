import RecipeTag from "./RecipeTag.jsx";
import { useMemo } from "react";
import PropTypes from "prop-types";
import RecipeEndingTag from "./RecipeEndingTag.jsx";

export default function RecipeTagsGroup({ tags, maxTags }) {

  const maximumTags = maxTags ? maxTags : 3;

  const tagsToPresent = useMemo(() => {

    if (!tags) return [];

    const tagsToPresent = tags.slice(0, maximumTags);

    if (tags.length > maximumTags) tagsToPresent.push("...");

    return tagsToPresent;
  }, [tags, maxTags]);

  return (
    <>
      <div className="flex flex-row flex-wrap">
        {tagsToPresent.map((tag, index) => {
          if (tag === "...") {
            return <RecipeEndingTag key={"RecipeEndingTag_" + index} remainingTags={tags.slice(maximumTags, tags.length)} />
          } else {
            return <RecipeTag key={"RecipeTag_" + index} tag={tag} />
          }
        })}
      </div>
    </>
  );
}

RecipeTagsGroup.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string),
  maxTags: PropTypes.number,
};
