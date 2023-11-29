import RecipeTitle from "../../Recipes/Information/RecipeTitle.jsx";
import RecipeMetric from "../../Recipes/Information/RecipeMetric.jsx";
import RecipeTagsGroup from "../../Recipes/Tags/RecipeTagsGroup.jsx";
import PropTypes from "prop-types";
import RecipeImage from "../../Recipes/Information/RecipeImage.jsx";

export default function SearchResultItem({ recipe }) {
  if (!recipe) return;

  return (
    <>
      <div className="flex flex-row h-full p-6 bg-white border border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700">
        <RecipeImage recipeImage={recipe.image} scale="medium"/>
        <div className="flex grow justify-between">
          <div className="flex flex-col ms-12 basis-5/12 xl:me-8">
            <RecipeTitle
              id={recipe.id}
              name={recipe.title}
              author={recipe.author}
            />
            <RecipeTagsGroup tags={recipe.tags} />
          </div>

          <div className="flex flex-wrap basis-2/6 ">
            {recipe.time ? (
              <div
                className="flex flex-col grow justify-center items-center"
                aria-label="recipe-metric"
              >
                <RecipeMetric name="Time" value={recipe.time} unit={"min"} />
              </div>
            ) : null}
            <div
              className="flex flex-col grow justify-center items-center"
              aria-label="recipe-metric"
            >
              <RecipeMetric
                name="Ingredients"
                value={recipe.ingredients ? recipe.ingredients.length : 0}
              />
            </div>
            <div
              className="flex flex-col grow justify-center items-center"
              aria-label="recipe-metric"
            >
              <RecipeMetric
                name="Calories"
                value={Math.round(recipe.calories)}
                unit={"kcal"}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

SearchResultItem.propTypes = {
  recipe: PropTypes.object.isRequired,
};
