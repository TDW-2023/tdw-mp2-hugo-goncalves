export default function RecipeCategory({ categoryName, categoryImageURI }) {
  return (
    <div className="flex flex-col items-center p-6">
      <div className="h-24 w-24">
        <img
          className="rounded-full"
          src={
            categoryImageURI ? categoryImageURI : "https://placeholder.co/150"
          }
          alt="recipe category"
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
