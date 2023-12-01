import SearchResultItem from "./SearchResultItem.jsx";
import { useDispatch, useSelector } from "react-redux";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import {
  addSearchResults,
  setNextPageUrl,
} from "../../../redux/slices/searchSlice.js";
import { transformRecipesResponse } from "../../../redux/slices/freeRecipesAPISlice.js";

export default function SearchResults() {
  const searchData = useSelector((state) => state.search.searchResults);
  const nextPageUrl = useSelector((state) => state.search.nextPageUrl);

  const dispatch = useDispatch();

  const fetchMoreResults = () => {
    if (!nextPageUrl) return;

    axios.get(nextPageUrl).then((response) => {
      const transformedResponse = transformRecipesResponse(response.data);

      dispatch(addSearchResults(transformedResponse));
      dispatch(setNextPageUrl(transformedResponse[0].nextPage));
    });
  };

  const loadingComponent = (
    <>
      <div className="flex justify-center my-16">
        <svg
          className="animate-spin h-10 w-10 text-blue-600"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
          />
        </svg>
      </div>
    </>
  );

  const noResultsComponent = (
    <>
      <div className="flex justify-center my-12">
        <h1 className="text-3xl font-bold text-gray-700 dark:text-gray-300">
          {searchData?.length > 0 ? "End of results" : "No results"}
        </h1>
      </div>
    </>
  );

  return (
    <>
      <div className="container mx-auto space-y-8 my-8">
        <InfiniteScroll
          dataLength={searchData ? searchData.length : 0}
          next={fetchMoreResults}
          hasMore={nextPageUrl}
          loader={loadingComponent}
          endMessage={noResultsComponent}
        >
          <div className="flex flex-col space-y-8">
            {searchData && (
              searchData.map((recipe, index) => (
                <SearchResultItem
                  key={"SearchResultItem_" + index}
                  recipe={recipe}
                />
              ))
            )}
          </div>
        </InfiniteScroll>
      </div>
    </>
  );
}
