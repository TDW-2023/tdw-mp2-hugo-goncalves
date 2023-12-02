import RecipeTitle from "../components/Recipes/Information/RecipeTitle.jsx";
import { useParams } from "react-router-dom";
import RecipeImage from "../components/Recipes/Information/RecipeImage.jsx";
import RecipeTagsGroup from "../components/Recipes/Tags/RecipeTagsGroup.jsx";
import RecipeNutritionalInfo from "../components/Recipes/Nutrition/RecipeNutritionalInfo.jsx";
import RecipeMetric from "../components/Recipes/Information/RecipeMetric.jsx";
import RecipeIngredient from "../components/Recipes/Ingredients/RecipeIngredient.jsx";
import { useGetRecipeByIdQuery } from "../redux/slices/freeRecipesAPISlice.js";

export default function RecipePage() {
  const { recipeId } = useParams();
  const { data: recipe, error, isLoading } = useGetRecipeByIdQuery(recipeId);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong...</p>;
  if (!recipe) return <p>Recipe not found</p>;

  return (
    <>
      <div className="flex flex-wrap bg-white dark:bg-gray-950 min-h-screen">
        <div className="container mx-5 sm:mx-auto my-12 ">
          <div className="flex flex-wrap flex-row xl:space-x-12 grow">
            <RecipeImage recipeImage={recipe.image} scale={"large"} />
            <div className="flex justify-between grow">
              <div className="flex flex-col">
                <RecipeTitle
                  id={""}
                  name={recipe.title}
                  author={recipe.author}
                />
                <div className="mt-2">
                  <RecipeTagsGroup tags={recipe.tags} />
                </div>
                <div className="flex flex-row flex-wrap justify-around mt-12">
                  {recipe.time ? (
                    <RecipeMetric
                      name={"Time"}
                      value={recipe.time}
                      unit={"min"}
                    />
                  ) : null}
                  <RecipeMetric
                    name={"Ingredients"}
                    value={recipe.ingredients.length}
                  />
                  <RecipeMetric
                    name={"Calories"}
                    value={Math.round(recipe.calories)}
                    unit={"kcal"}
                  />
                  <RecipeMetric
                    name={"Weight"}
                    value={Math.round(recipe.weight)}
                    unit={"g"}
                  />
                </div>
              </div>
              <div className="flex flex-row">
                <RecipeNutritionalInfo nutrients={recipe.nutrients} />
              </div>
            </div>
          </div>
          <hr className="h-px mb-8 mt-10 bg-gray-200 border-0 dark:bg-gray-700" />
          <div className="grid grid-cols-1 lg:grid-cols-3 lg:space-x-8">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
                Ingredients
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-x-8 pb-12">
                {recipe.ingredients &&
                  recipe.ingredients.map((ingredient, index) => (
                    <RecipeIngredient
                      key={`RecipeIngredient_${index}`}
                      ingredient={ingredient}
                    />
                  ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
                Instructions
              </h2>

              <p className="text-gray-950 dark:text-gray-400 mt-8">
                For guidance on how to prepare this recipe, you can visit the
                creator website for step-by-step instructions.
              </p>

              <a href={recipe.url} target="_blank" rel="noreferrer">
                <button
                  type="button"
                  className="mt-6 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  <span>Visit Website</span>
                  <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path stroke="currentColor" d="M1 5h12m0 0L9 1m4 4L9 9" />
                  </svg>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
