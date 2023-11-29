import PropTypes from "prop-types";

export default function RecipeNutrient({
  nutrientName,
  nutrientAmount,
  nutrientUnit,
  nutrientColor,
}) {
  return (
    <>
      <div className="flex flex-row items-center my-1">
        <span
          className="h-6 w-6 rounded-full"
          style={{ background: nutrientColor }}
        />
        <div className="flex flex-col ms-3">
          <p className="text-black dark:text-white font-medium text-lg">
            {nutrientAmount}
            {nutrientUnit}
          </p>
          <p className="text-sm" style={{ color: nutrientColor }}>
            {nutrientName}
          </p>
        </div>
      </div>
    </>
  );
}

RecipeNutrient.propTypes = {
  nutrientName: PropTypes.string.isRequired,
  nutrientAmount: PropTypes.number.isRequired,
  nutrientUnit: PropTypes.string.isRequired,
  nutrientColor: PropTypes.string.isRequired,
};
