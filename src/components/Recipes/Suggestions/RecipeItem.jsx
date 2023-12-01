import PropTypes from "prop-types";

export default function RecipeItem({ recipeId, recipeName, recipeImage }) {
  return (
    <>
      <div className="m-4 p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="flex flex-row items-center">
          <div className="basis-2/6">
            <img
              aria-label={recipeName ? recipeName : "Recipe Name Placeholder"}
              className="rounded-full"
              src={recipeImage ? recipeImage : "https://placeholder.co/150x150"}
              alt="Recipe Item Image"
            />
          </div>
          <div className="flex flex-col basis-4/6 ms-6">
            <a href={`/recipes/${recipeId}`}>
              <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                {recipeName ? recipeName : "Recipe Name Placeholder"}
              </h5>
            </a>
            <a
              href={`/recipes/${recipeId}`}
              className="inline-flex items-center text-blue-600 hover:underline"
            >
              Check it out
              <svg
                className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 18 18"
              >
                <path
                  stroke="currentColor"
                  d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

RecipeItem.propTypes = {
  recipeId: PropTypes.string,
  recipeName: PropTypes.string,
  recipeImage: PropTypes.string,
  recipeDescription: PropTypes.string,
};
