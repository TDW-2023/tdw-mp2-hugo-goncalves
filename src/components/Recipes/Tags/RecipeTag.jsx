import PropTypes from "prop-types";

export default function RecipeTag({ tag }) {
  return (
    <>
      <div
        className="flex justify-center mt-4 me-4 outline outline-blue-600 rounded-3xl"
        aria-label="RecipeTag"
      >
        <p className="py-1 px-4 font-bold text-black dark:text-blue-600">
          {tag}
        </p>
      </div>
    </>
  );
}

RecipeTag.propTypes = {
  tag: PropTypes.string.isRequired,
};
