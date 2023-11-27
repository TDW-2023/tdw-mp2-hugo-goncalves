export default function HeadRecipe() {
  return (
    <>
      <div className="flex flex-row h-full max-h-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className="basis-5/12 h-full">
          <img
            className="w-full h-full object-cover rounded-lg rounded-e-none shadow-xl"
            src="https://assets.bonappetit.com/photos/64349ba03fd52da4745a35f4/1:1/w_3563,h_3563,c_limit/04102023-ratatouille-lede.jpg"
          />
        </div>
        <div className="basis-7/12 m-8">
          <a href="#">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              <span className="block">Daily Suggestion</span>
              <span className="block text-blue-600">Some Recipe</span>
            </h2>
          </a>
          <div className="mt-8">
            <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">
              Go to this step by step guideline process on how to certify for
              your weekly benefits:
            </p>
            <a
              href="#"
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
          </div>
        </div>
      </div>
    </>
  );
}
