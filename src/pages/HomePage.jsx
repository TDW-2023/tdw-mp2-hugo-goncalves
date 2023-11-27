import HeadRecipe from "../components/HeadRecipe/HeadRecipe.jsx";
import RecipesCategories from "../components/Recipes/Categories/RecipesCategories.jsx";
import RecipeSuggestions from "../components/Recipes/Suggestions/RecipeSuggestions.jsx";
import SearchBar from "../components/Search/SearchBar.jsx";

export default function HomePage() {
  return (
    <>
      <div className="flex flex-col bg-white dark:bg-gray-950 h-full space-y-16">
        <SearchBar />
        <div className="container mx-auto mt-16 h-96">
          <HeadRecipe />
        </div>
        <RecipesCategories />
        <RecipeSuggestions />
      </div>
    </>
  );
}