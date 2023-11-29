import PropTypes from "prop-types";

export default function RecipeMetric({ name, value, unit }) {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="flex flex-row items-end">
          <p className="text-3xl font-extrabold text-black dark:text-white">
            {value}
          </p>
          <p className="text-sm text-black max-w-2xl">{unit}</p>
        </div>
        <p className="text-sm text-blue-600 max-w-2xl font-bold">{name}</p>
      </div>
    </>
  );
}

RecipeMetric.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  unit: PropTypes.string,
};
