import {
  useGetCuisineTypesQuery,
  useGetDietTypesQuery,
  useGetHealthFiltersQuery,
  useGetRecipeCategoriesQuery
} from "../../../redux/slices/freeRecipesAPISlice.js";
import { useSelector } from "react-redux";
import SearchFilterTag from "./SearchFilterTag.jsx";

export default function SearchFilterTags() {
  const {
    data: categoriesData,
    error: categoriesError,
    isLoading: categoriesLoading,
  } = useGetRecipeCategoriesQuery();
  const {
    data: cuisinesData,
    error: cuisinesError,
    isLoading: cuisinesLoading,
  } = useGetCuisineTypesQuery();
  const {
    data: dietsData,
    error: dietsError,
    isLoading: dietsLoading,
  } = useGetDietTypesQuery();
  const {
    data: intolerancesData,
    error: intolerancesError,
    isLoading: intolerancesLoading,
  } = useGetHealthFiltersQuery();

  const { id: filterId } = useSelector((state) => state.search.filterOption);

  if (filterId === "diet") {
    return (
      <div className="flex flex-wrap justify-center">
        {dietsLoading ? (
          <p>Loading...</p>
        ) : dietsError ? (
          <p>Error</p>
        ) : (
          dietsData &&
          dietsData.map((diet, index) => (
            <SearchFilterTag
              key={"SearchFilterTag_" + index}
              filterName={diet}
            />
          ))
        )}
      </div>
    );
  } else if (filterId === "cuisineType") {
    return (
      <div className="flex flex-wrap justify-center">
        {cuisinesLoading ? (
          <p>Loading...</p>
        ) : cuisinesError ? (
          <p>Error</p>
        ) : (
          cuisinesData &&
          cuisinesData.map((cuisine, index) => (
            <SearchFilterTag
              key={"SearchFilterTag_" + index}
              filterName={cuisine}
            />
          ))
        )}
      </div>
    );
  } else if (filterId === "mealType") {
    return (
      <div className="flex flex-wrap justify-center">
        {categoriesLoading ? (
          <p>Loading...</p>
        ) : categoriesError ? (
          <p>Error</p>
        ) : (
          categoriesData &&
          categoriesData.map((category, index) => (
            <SearchFilterTag
              key={"SearchFilterTag_" + index}
              filterName={category.title}
            />
          ))
        )}
      </div>
    );
  } else if (filterId === "health") {
    return (
      <div className="flex flex-wrap justify-center">
        {intolerancesLoading ? (
          <p>Loading...</p>
        ) : intolerancesError ? (
          <p>Error</p>
        ) : (
          intolerancesData &&
          intolerancesData.map((intolerance, index) => (
            <SearchFilterTag
              key={"SearchFilterTag_" + index}
              filterName={intolerance}
            />
          ))
        )}
      </div>
    );
  }
}
