import SearchBar from "../components/Search/SearchBar.jsx";
import { useParams } from "react-router-dom";
import { useGetRecipesFromSearchQuery } from "../redux/slices/freeRecipesAPISlice.js";
import SearchResultItem from "../components/Search/Result/SearchResultItem.jsx";

export default function SearchPage() {
  const { query } = useParams();
  const { data, error, isLoading } = useGetRecipesFromSearchQuery(query);

  return (
    <>
      <div className="flex flex-col bg-white dark:bg-gray-950 min-h-screen">
        <SearchBar />
        <div className="container mx-auto space-y-8 my-16">
          {isLoading ? (
            <p>Loading</p>
          ) : error ? (
            <p>Error</p>
          ) : (
            data &&
            data.map((recipe, index) => (
              <SearchResultItem
                key={"SearchResultItem_" + index}
                recipe={recipe}
              />
            ))
          )}
        </div>
      </div>
    </>
  );
}
