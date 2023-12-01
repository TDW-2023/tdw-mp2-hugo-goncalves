import SearchResultItem from "./SearchResultItem.jsx";
import { useSelector } from "react-redux";

export default function SearchResults() {
  const searchData = useSelector((state) => state.search.searchResults);

  return (
    <>
      <div className="container mx-auto space-y-8 my-8">
        {searchData && searchData.length > 0 ? (
          searchData.map((recipe, index) => (
            <SearchResultItem
              key={"SearchResultItem_" + index}
              recipe={recipe}
            />
          ))
        ) : (
          <p>No results found</p>
        )}
      </div>
    </>
  );
}
