import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useGetRecipesFromSearchQuery } from "../../redux/slices/freeRecipesAPISlice.js";
import {
  setSearchResults,
  setNextPageUrl,
} from "../../redux/slices/searchSlice.js";
import PropTypes from "prop-types";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid/index.js";
import { transformFilters } from "../../utils/searchFiltersOperations.js";

export default function SearchBar({ query }) {
  const [localSearchQuery, setLocalSearchQuery] = useState(query);
  const [shouldReFetch, setShouldReFetch] = useState(!!query);
  const [outdatedResults, setOutdatedResults] = useState(false);

  const dispatch = useDispatch();
  const selectedFilters = useSelector((state) => state.search.selectedFilters);

  const nav = useNavigate();

  const { data } = useGetRecipesFromSearchQuery(
    { query: localSearchQuery, filters: transformFilters(selectedFilters) },
    { skip: !shouldReFetch },
  );

  useEffect(() => {
    dispatch(setSearchResults(data));
    setOutdatedResults(false);

    if (data) {
      dispatch(setNextPageUrl(data[0]?.nextPage));
      setShouldReFetch(false); // Disable re-fetching
    }
  }, [data, dispatch]);

  useEffect(() => {
    // If the selected filters change, let user know he should press enter to search again
    if (selectedFilters && selectedFilters.length > 0) {
      setOutdatedResults(true);
    } else if (selectedFilters && selectedFilters.length === 0) {
      setOutdatedResults(false);
    }
  }, [selectedFilters]);

  const handleSearch = (event) => {
    if (event.type === "keydown" && event.key !== "Enter") return;

    if (!localSearchQuery || localSearchQuery === "") {
      console.log("No search query");
      return;
    }

    setShouldReFetch(true); // Re-render the component and program a re-fetch on next render
    nav(`/search/${localSearchQuery}`);
  };

  return (
    <>
      <div className="flex flex-row justify-center mt-14">
        <div className="flex flex-row items-center p-4 w-5/12 rounded-3xl bg-gray-200 dark:bg-gray-800 outline outline-blue-500 outline-4">
          <div className="flex basis-11/12">
            <MagnifyingGlassIcon className="w-10 h-10 text-gray-600" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-gray-200 dark:bg-gray-800 w-full ms-4 me-6 border-none outline-none text-black focus:ring-0 dark:text-gray-300 text-lg"
              defaultValue={localSearchQuery}
              onChange={(e) => {
                setLocalSearchQuery(e.target.value);
                if (e.target.value && e.target.value !== query) {
                  setOutdatedResults(true);
                } else {
                  setOutdatedResults(false);
                }
              }}
              onKeyDown={(e) => handleSearch(e)}
            />
          </div>
          <div className="flex">
            {outdatedResults && (
              <p
                className="font-bold text-blue-600 text-lg mx-2 animate-pulse hover:cursor-pointer"
                onClick={handleSearch}
              >
                Search
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

SearchBar.propTypes = {
  query: PropTypes.string,
};
