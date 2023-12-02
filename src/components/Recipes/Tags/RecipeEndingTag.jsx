import PropTypes from "prop-types";

export default function RecipeEndingTag({ remainingTags }) {
  return (
    <>
      <div
        className="flex justify-center mt-4 me-4 outline outline-blue-600 rounded-3xl"
        aria-label="RecipeTag"
      >
        <p className="py-1 px-4 font-bold text-black dark:text-blue-600 transititext-primary text-primary transition duration-150 ease-in-out" data-te-toggle="tooltip"
           title={remainingTags}>
          +{remainingTags.length}
        </p>
      </div>
    </>
  );
}

RecipeEndingTag.propTypes = {
  remainingTags: PropTypes.array.isRequired,
};
