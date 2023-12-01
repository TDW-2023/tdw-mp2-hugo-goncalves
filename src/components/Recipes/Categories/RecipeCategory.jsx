import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { addSelectedFilter } from "../../../redux/slices/searchSlice.js";
import { useNavigate } from "react-router-dom";

export default function RecipeCategory({ categoryName, categoryImageURI }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(
      addSelectedFilter({
        filterName: categoryName,
        filterType: { id: "mealType", title: "Category" },
      }),
    );
    navigate(`/search/${categoryName}`);
  };

  return (
    <div
      className="flex flex-col items-center p-6 hover:cursor-pointer"
      onClick={handleClick}
    >
      <div className="h-24 w-24">
        <img
          className="rounded-full h-full w-full object-cover"
          src={
            categoryImageURI ? categoryImageURI : "https://placeholder.co/150"
          }
          alt="recipe category"
          aria-label={categoryName ? categoryName : "Category Placeholder"}
        />
      </div>
      <div className="mt-3">
        <h3 className="text-2xl font-bold tracking-tight text-blue-600">
          {categoryName ? categoryName : "Category"}
        </h3>
      </div>
    </div>
  );
}

RecipeCategory.propTypes = {
  categoryName: PropTypes.string,
  categoryImageURI: PropTypes.string,
};
