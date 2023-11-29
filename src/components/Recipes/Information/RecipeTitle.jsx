import PropTypes from "prop-types";

export default function RecipeTitle({ id, name, author }) {
  return (
    <>
      <a href={`/recipes/${id}`}>
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          {name ? name : "Untitled Recipe"}
        </h2>
      </a>
      <a>
        <h3 className="text-lg font-bold tracking-tight sm:text-lg">
          <span className="dark:text-white text-sm">by</span>
          <span className="ms-1 text-blue-600">
            {author ? author : "Anonymous"}
          </span>
        </h3>
      </a>
    </>
  );
}

RecipeTitle.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
