import { useDispatch, useSelector } from "react-redux";
import { addSelectedFilter, removeSelectedFilter } from "../../../redux/slices/searchSlice.js";
import PropTypes from "prop-types";

export default function SearchFilterTag({ filterName }) {
  const dispatch = useDispatch();
  const filterType = useSelector((state) => state.search.filterOption);
  const selectedFilters = useSelector((state) => state.search.selectedFilters);

  const isSelected = () => {
    return !!selectedFilters.find((filter) => filter.filterName === filterName);
  };

  const obtainClasses = () => {
    if (isSelected()) {
      return "flex justify-center me-4 mb-4 rounded-3xl bg-blue-600 text-white";
    } else {
      return "flex justify-center me-4 mb-4 outline outline-blue-600 rounded-3xl text-blue-600 hover:bg-blue-600 hover:text-white";
    }
  };

  const onFilterSelected = () => {
    if (!isSelected()) {
      dispatch(
        addSelectedFilter({ filterName: filterName, filterType: filterType }),
      );
    } else {
      dispatch(removeSelectedFilter(filterName));
    }
  };

  return (
    <>
      <div
        className={obtainClasses()}
        onClick={onFilterSelected}
        aria-label="RecipeTag"
      >
        <p className="py-2 px-5 font-bold select-none">{filterName}</p>
      </div>
    </>
  );
}

SearchFilterTag.propTypes = {
  filterName: PropTypes.string.isRequired,
};
