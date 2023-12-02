import RecipeCategory from "./RecipeCategory.jsx";
import PropTypes from "prop-types";
import { useGetRecipeCategoriesQuery } from "../../../redux/slices/freeRecipesAPISlice.js";

export default function RecipesCategories() {
  const { data, error, isLoading } = useGetRecipeCategoriesQuery();

  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center justify-center px-4 mx-auto text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          <span className="block">Yummy</span>
          <span className="block text-blue-600">Categories</span>
        </h2>
        <p className="max-w-xl mx-auto mt-4 text-xl text-gray-500 dark:text-gray-400">
          Check some of our most popular recipes categories.
        </p>
        <div className="flex flex-row flex-wrap mt-5 lg:space-x-12">
          {isLoading ? (
            <div>Loading...</div>
          ) : error ? (
            <div>Error</div>
          ) : (
            data &&
            data.map((category, index) => (
              <RecipeCategory
                key={"RecipeCategory_" + index}
                categoryName={category.title}
                categoryImageURI={category.image}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

RecipesCategories.propTypes = {
  recipesCategories: PropTypes.array,
};
