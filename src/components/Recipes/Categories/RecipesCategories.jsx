import RecipeCategory from "./RecipeCategory.jsx";

export default function RecipesCategories({ recipesCategories }) {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center justify-center px-4 mx-auto text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          <span className="block">Yummy</span>
          <span className="block text-blue-600">Categories</span>
        </h2>
        <p className="max-w-xl mx-auto mt-4 text-xl text-gray-500 dark:text-gray-400">
          Some Food categories you may be interested in!
        </p>
        <div className="flex flex-row mt-5 space-x-12">
          {recipesCategories ? (
            recipesCategories.map((category) => (
              <RecipeCategory
                key={category.id}
                categoryName={category.name}
                categoryImageURI={category.image}
              />
            ))
          ) : (
            <>
              <RecipeCategory />
              <RecipeCategory />
            </>
          )}
        </div>
      </div>
    </div>
  );
}