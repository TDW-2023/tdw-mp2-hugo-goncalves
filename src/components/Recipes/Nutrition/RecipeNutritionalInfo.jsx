import { PieChart } from "react-minimal-pie-chart";
import RecipeNutrient from "./RecipeNutrient.jsx";
import { useMemo } from "react";
import PropTypes from "prop-types";

export default function RecipeNutritionalInfo({ nutrients }) {
  const nutrientsList = useMemo(() => {
    const nutrientsList = [];

    for (let nutrient in nutrients) {
      const nutrientObj = nutrients[nutrient];

      if (["Carbs", "Fat", "Fiber", "Protein"].includes(nutrientObj.label)) {
        nutrientsList.push({
          name: nutrientObj.label,
          amount: nutrientObj.quantity,
          unit: nutrientObj.unit,
        });
      }
    }

    return nutrientsList;
  }, [nutrients]);

  const getColorByNutrientName = (nutrientName) => {
    if (nutrientName === "Carbs") return "#eab308";
    if (nutrientName === "Fat") return "#ef4444";
    if (nutrientName === "Fiber") return "#fde68a";
    if (nutrientName === "Protein") return "#22c55e";
    return "#2777e1";
  };

  return (
    <>
      <div className="flex flex-row justify-center items-center">
        <div className="grid grid-cols-2 gap-x-10 invisible lg:visible">
          {nutrientsList &&
            nutrientsList.map((nutrient, index) => {
              return (
                <RecipeNutrient
                  key={"RecipeNutrient_" + index}
                  nutrientName={nutrient.name}
                  nutrientAmount={Math.round(nutrient.amount)}
                  nutrientUnit={nutrient.unit}
                  nutrientColor={getColorByNutrientName(nutrient.name)}
                />
              );
            })}
        </div>

        <div className="flex items-center mx-10">
          <PieChart
            className="h-20 w-20"
            lineWidth={20}
            rounded
            data={
              nutrientsList &&
              nutrientsList.map((nutrient) => {
                return {
                  title: nutrient.name,
                  value: nutrient.amount,
                  color: getColorByNutrientName(nutrient.name),
                };
              })
            }
          />
        </div>
      </div>
    </>
  );
}

RecipeNutritionalInfo.propTypes = {
  nutrients: PropTypes.object.isRequired,
};
