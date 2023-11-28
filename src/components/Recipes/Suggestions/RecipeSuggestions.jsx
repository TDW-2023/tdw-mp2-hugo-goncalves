import RecipeItem from "./RecipeItem.jsx";
import { useGetRandomRecipesQuery } from "../../../redux/slices/freeRecipesAPISlice.js";

export default function RecipeSuggestions() {
  const { data, error, isLoading } = useGetRandomRecipesQuery();

  return (
    <>
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center px-4 mx-auto text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            <span className="block">Yummy</span>
            <span className="block text-blue-600">Recipes</span>
          </h2>
          <p className="max-w-xl mx-auto mt-4 text-xl text-gray-500 dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
            magnam voluptatum cupiditate veritatis in, accusamus quisquam.
          </p>
        </div>
      </div>
      <div className="container mx-auto h-full pb-16 grid grid-cols-3">
        {isLoading ? (
          <div>Loading...</div>
        ) : error ? (
          <div>Oh no, there was an error</div>
        ) : data ? (
          data.map((recipe, index) => {
            return (
              <RecipeItem
                key={"RecipeItem_" + index}
                recipeId={recipe.id}
                recipeName={recipe.title}
                recipeImage={recipe.image}
                recipeDescription={recipe.description}
              />
            );
          })
        ) : (
          <>
            <RecipeItem />
            <RecipeItem />
            <RecipeItem />
          </>
        )}
      </div>
    </>
  );
}
