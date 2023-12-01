import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useGetRecipesFromSearchQuery } from "../../redux/slices/freeRecipesAPISlice.js";
import { setSearchResults } from "../../redux/slices/searchSlice.js";
import PropTypes from "prop-types";

export default function SearchBar({ query }) {
  const [searchQuery, setSearchQuery] = useState(query);
  const [shouldReFetch, setShouldReFetch] = useState(true);

  const dispatch = useDispatch();
  const selectedFilters = useSelector((state) => state.search.selectedFilters);

  const nav = useNavigate();

  const transformFilters = () => {
    const filters = {};

    selectedFilters.forEach((filter) => {
      if (Object.prototype.hasOwnProperty.call(filters, filter.filterType.id)) {
        filters[filter.filterType.id].push(filter.filterName);
      } else {
        filters[filter.filterType.id] = [filter.filterName];
      }
    });

    return filters;
  };

  const { data } = useGetRecipesFromSearchQuery(
    { query: searchQuery, filters: transformFilters(selectedFilters) },
    { skip: !shouldReFetch },
  );

  useEffect(() => {
    dispatch(setSearchResults(data));
    if (data) setShouldReFetch(false); // Disable re-fetching
  }, [data, dispatch]);

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      if (!searchQuery || searchQuery === "") {
        console.log("No search query");
        return;
      }
      setShouldReFetch(true); // Re-render the component and program a re-fetch on next render
      nav(`/search/${searchQuery}`);
    }
  };

  return (
    <>
      <div className="flex flex-row justify-center mt-14">
        <div className="flex flex-row items-center p-4 w-5/12 rounded-3xl bg-gray-200 dark:bg-gray-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-8 h-8 text-gray-600 dark:text-gray-300"
          >
            <path d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
          <input
            type="text"
            placeholder="Search..."
            className="bg-gray-200 dark:bg-gray-800 w-full mx-6 border-none outline-none text-black focus:ring-0 dark:text-gray-300 text-lg"
            defaultValue={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
            }}
            onKeyDown={(e) => handleKeyDown(e)}
          />
        </div>
      </div>
    </>
  );
}

SearchBar.propTypes = {
  query: PropTypes.string.isRequired,
};
