import Skeleton from "react-loading-skeleton";
import { useGetRandomRecipesQuery } from "../../../redux/slices/freeRecipesAPISlice.js";

import "react-loading-skeleton/dist/skeleton.css";
import RecipeMetric from "../Information/RecipeMetric.jsx";
import { useMemo } from "react";
import RecipeTagsGroup from "../Tags/RecipeTagsGroup.jsx";

export default function DailyRecipeSuggestion() {
  const { data, isLoading } = useGetRandomRecipesQuery();

  const recipeIndex = useMemo(() => Math.round(Math.random() * 20), []);

  const regularComponent = (
    <div className="flex flex-row h-full max-h-full bg-white border border-gray-200 rounded-3xl shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="basis-5/12 h-full">
        {data && (
          <img
            className="w-full h-full object-cover rounded-3xl rounded-e-none shadow-xl"
            src={data[recipeIndex].image}
            alt="Daily Recipe Image"
          />
        )}
      </div>
      <div className="basis-7/12 m-8">
        <a href={`/recipes/${data && data[recipeIndex].id}`}>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            <span className="block">Daily Suggestion</span>
            <span className="block text-blue-600">
              {data && data[recipeIndex].title}
            </span>
          </h2>
        </a>
        <div className="flex mt-2">
          <RecipeTagsGroup tags={data && data[recipeIndex].tags} maxTags={5} />
        </div>
        <div className="flex flex-row grow justify-around mt-16">
          <RecipeMetric
            name={"Calories"}
            value={data && Math.round(data[recipeIndex].calories)}
            unit={"kcal"}
          />
          <RecipeMetric
            name={"Ingredients"}
            value={data && data[recipeIndex].ingredients.length}
          />
          {data && data[recipeIndex].time > 0 && (
            <RecipeMetric
              name={"Time"}
              value={data[recipeIndex].time}
              unit={"min"}
            />
          )}
        </div>
      </div>
    </div>
  );

  const skeletonComponent = (
    <div className="flex flex-row h-full max-h-full bg-white border border-gray-200 rounded-3xl shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="basis-5/12 h-full">
        <Skeleton className="w-full h-full align-middle rounded-3xl rounded-e-none shadow-xl" />
      </div>
      <div className="basis-7/12 m-8">
        <a href="#">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            <span className="block">
              <Skeleton className="mb-4 h-12" />
            </span>
            <span className="block text-blue-600">
              <Skeleton />
            </span>
          </h2>
        </a>
        <div className="flex mt-2">
          <Skeleton className="w-full h-12" />
        </div>
        <div className="flex flex-row grow justify-around mt-16">
          <Skeleton className="w-full h-12" />
          <Skeleton className="w-full h-12" />
          <Skeleton className="w-full h-12" />
        </div>
      </div>
    </div>
  );

  return <>{isLoading ? skeletonComponent : regularComponent}</>;
}
