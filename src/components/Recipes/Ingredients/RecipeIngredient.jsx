export default function RecipeIngredient({ ingredient }) {
  return (
    <>
      <div className="flex flex-col flex-wrap mt-10">
        <img
          className="rounded-full h-16 w-16"
          src={ingredient.image}
          alt="Recipe Ingredient Image"
        />
        <div className="flex flex-col justify-center items-start">
          <h3 className="text-2xl font-bold mt-3 text-black dark:text-white">{ingredient.food}</h3>
          <p className="text-blue-500 font-bold">
            <span className="text-blue-500">{`${ingredient.quantity} ${ingredient.measure}`}</span>
            <span className="text-gray-500 ms-1">{`(${Math.round(
              ingredient.weight,
            )} g)`}</span>
          </p>
          <p className="text-gray-400 mt-3">{ingredient.text}</p>
        </div>
      </div>
    </>
  );
}
