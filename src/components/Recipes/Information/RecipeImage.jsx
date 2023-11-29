import PropTypes from "prop-types";

export default function RecipeImage({ recipeImage, scale }) {
  if (scale === "small")
    return (
      <img
        className="h-24 max-h-24 rounded-lg"
        src={recipeImage ? recipeImage : "https://placeholder.co/100"}
        alt="Search Result Recipe Image"
      />
    );
  else if (scale === "medium")
    return (
      <img
        className="h-32 max-h-32 rounded-lg"
        src={recipeImage ? recipeImage : "https://placeholder.co/150"}
        alt="Search Result Recipe Image"
      />
    );
  else if (scale === "large")
    return (
      <img
        className="h-64 max-h-64 rounded-lg"
        src={recipeImage ? recipeImage : "https://placeholder.co/256"}
        alt="Search Result Recipe Image"
      />
    );
  else
    return (
      <img
        className="h-16 max-h-16 rounded-lg"
        src={recipeImage ? recipeImage : "https://placeholder.co/64"}
        alt="Search Result Recipe Image"
      />
    );
}

RecipeImage.propTypes = {
  recipeImage: PropTypes.string,
  scale: PropTypes.string,
};
