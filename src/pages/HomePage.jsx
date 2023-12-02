import DailyRecipeSuggestion from "../components/Recipes/Suggestions/DailyRecipeSuggestion.jsx";
import RecipesCategories from "../components/Recipes/Categories/RecipesCategories.jsx";
import RecipeSuggestions from "../components/Recipes/Suggestions/RecipeSuggestions.jsx";
import SearchBar from "../components/Search/SearchBar.jsx";

export default function HomePage() {
  return (
    <>
      <div className="flex flex-col bg-white dark:bg-gray-950 h-full space-y-14">
        <SearchBar />
        <div className="container mx-5 sm:mx-auto mt-16 h-96">
          <DailyRecipeSuggestion />
        </div>
        <RecipesCategories />
        <RecipeSuggestions />
      </div>
    </>
  );
}
