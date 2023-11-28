import Skeleton from "react-loading-skeleton";

import "react-loading-skeleton/dist/skeleton.css";

export default function DailyRecipeSuggestion() {
  // const { data, error, isLoading } = useGetRandomRecipesQuery();

  const isLoading = false;
  const error = false;
  const data = [
    {
      id: "d70515a72a70d6387b6de5adc4825833",
      title: "Fatteh recipes",
      description:
        "3 pitas, cut into wedges, 1 tin (400 g) chickpeas drained and rinsed",
      image:
        "https://edamam-product-images.s3.amazonaws.com/web-img/63f/63f120347e29dcdea543e16968c0d875?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLWVhc3QtMSJHMEUCIG2MlfqQhSVOAsT1zA%2FKXponTVXfNvfVeVSFnmI3MeJgAiEApIOO9nLbCEbgYZfbMUgTY7tWjs%2F9IrQ6n%2BiOrHJCzK4qwgUIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDDqmemDRTFdAHcgMHiqWBWLGsuVTHfO0k3NqbQDqsgWKJX3iBEGgtTjBF7u7%2Fe4Ipl97aGMc6h%2FRZXEW4as%2FJY1l%2BvbUAPS5GtyWAiB4qo0osuGikbJlWAwiEvfX%2BRfZzmnMtKFI8dzRsICl9kBukBhh4l96cN7OPnn86XE8tWtVxp%2BUSPlIZ%2BoJEmgxds2QYkt2FZR12zH8NYXk3NMjDN9mg%2BNlAM3eICqvBEGNqYk3qfMeEOvNBL0T%2FSFWrnSmvBG3pH8YxVHZyR5jvhOEXAcWrpYt%2FUCQZcHHPCROyluXAKY1w1wF1OYQ9g84jVBHB2rZMaDQZh3DqCx36ncxRNRz%2Fcd8V2Lc0XjMP9cBLnvWgJe4A2AaMeIGGGxQ69obulhdwLA2H6lfvJoCNVIUzxJEgfe5DBPlDJxzlyBQOLqKCzDUZwhaC7MTG68xbv0SDJSA7uW2gHp2SKb2zuj%2F2uzdbmiHhnfkduewkTwv0yXLQFxqJ9XmL2qbBFqMtc%2FZ2jx%2Bf%2F3Lv%2BU8hj7BexnxqDZ2IKdPQFpehAaaJDRSKB%2BvuTGULsABuXXtQ2MeZSutoxarIeVxVTiXyvzVsv0Pvtx8b0xtm8liDf1%2FidDfDOGXI8Uenn7SgQ6O9DZrfdEXRMXIUOofY%2FnwFGZ8nFpu91HdTZ03iRgDRf%2FyId6Bf6VAtGUI5P%2FhsFZhOgNNAZezpGnjXN6FXlhOdJwl2y3gCWXKC9Xc3mfOEo2Id9AJIvVwUWkJIxomkCeE3rl2TBwZ57cM1i%2F6rbYNLcOA%2FQqrfAtJ%2BjX5h7xss0bvJr3Rsqz85jZFosuTsSpfwatUEXzbKJemavqmW4XDC0V0yfpYZz3JlYP7M2j2f0QA1iqB15ie%2BoA8cIevwewXfqLdTibNxnj5ytKrMOfhmKsGOrEB3itaADjTjXSd5x9dNQQ9Z%2FXyU%2B9FHClVcKchhdDtpopkJylX71IdNW7XgiO%2FnKOcSYxCIx7gBTiQd4eb7c621lTu5skaEiGEFMcoRw4n%2Fwxx2vnHpPQMhYmoqSl3WLCCNj1YwzXse3GO6CsIBIGcOO%2BSp0aodtK%2BrChuOkUU%2FdnzC8qePYHUout9jW7lx%2F7tzyXRLVMbWlV3y8z7KRQRLi3vho7vwmUTW%2B5bI18LA%2B7F&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20231128T185513Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFPEXD3HZK%2F20231128%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=62b13f8c23ad3699ad7fe99e5e2f726e5ae7721768d1ff6d7f3277969e12e3e6",
    },
  ];

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
