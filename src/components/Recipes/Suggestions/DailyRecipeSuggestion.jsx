import Skeleton from "react-loading-skeleton";
import { useGetRandomRecipesQuery } from "../../../redux/slices/freeRecipesAPISlice.js";

import "react-loading-skeleton/dist/skeleton.css";

export default function DailyRecipeSuggestion() {
  const { data, error, isLoading } = useGetRandomRecipesQuery();

  return (
    <>
      <div className="flex flex-row h-full max-h-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="basis-5/12 h-full">
          {isLoading ? (
            <Skeleton className="w-full h-full align-middle rounded-lg rounded-e-none shadow-xl" />
          ) : error ? (
            <p>Something went wrong...</p>
          ) : (
            data && (
              <img
                className="w-full h-full object-cover rounded-lg rounded-e-none shadow-xl"
                src={data[0].image}
                alt="Daily Recipe Image"
              />
            )
          )}
        </div>
        <div className="basis-7/12 m-8">
          <a href="#">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              <span className="block">
                {isLoading ? (
                  <Skeleton className="mb-4 h-12" />
                ) : (
                  "Daily Suggestion"
                )}
              </span>
              <span className="block text-blue-600">
                {isLoading ? (
                  <Skeleton />
                ) : error ? (
                  <p>Something went wrong...</p>
                ) : (
                  data && data[0].title
                )}
              </span>
            </h2>
          </a>
          <div className="mt-8">
            {isLoading ? (
              <Skeleton count={3} />
            ) : error ? (
              <p>Something went wrong...</p>
            ) : (
              <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
                {data && data[0].description}
              </p>
            )}
            {isLoading ? (
              <Skeleton />
            ) : error ? (
              <p>Something went wrong...</p>
            ) : (
              <a
                href={data && `recipes/${data[0].id}`}
                className="inline-flex items-center text-blue-600 hover:underline"
              >
                Check it out
                <svg
                  className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 18"
                >
                  <path
                    stroke="currentColor"
                    d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"
                  />
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
