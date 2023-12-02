export default function AboutPage() {
  return (
    <div className="flex dark:bg-gray-950 h-screen">
      <div className="container mx-auto my-16">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          Yummy
        </h1>
        <h2 className="text-lg font-bold tracking-tight sm:text-2xl text-blue-600">
          About
        </h2>
        <p className="mt-4 text-black dark:text-white font-medium">
          Yummy is a frontend project developed using React in the context of <span className="text-blue-600">TDW 2023</span> course.
          It serves as an online recipe indexer. The primary functionality revolves around consuming data from the Edamam API, a comprehensive source of recipe information.
          The application offers a user-friendly interface allowing individuals to search and filter recipes based on various criteria.
        </p>
        <hr className="mt-8" />
        <div className="grid grid-cols-2 mt-8 gap-16">
          <div>
            <div>
              <h2 className="text-lg font-bold tracking-tight sm:text-2xl text-blue-600">
                Features
              </h2>
              <ul className="mt-4 ms-6 text-black dark:text-white list-disc space-y-2">
                <li>
                  <strong>Daily Recipe Suggestion:</strong> Provides a daily recommendation for a recipe.
                </li>
                <li>
                  <strong>Random Recipe Listing:</strong> Lists a random set of 18 recipes.
                </li>
                <li>
                  <strong>Recipe Search and Filtering:</strong> Allows users to search and filter recipes using queries and tags.
                </li>
                <li>
                  <strong>Recipe Category Filtering:</strong> Enables filtering of recipes by category, such as breakfast, lunch, snack, dinner, etc.
                </li>
                <li>
                  <strong>Search Result Presentation:</strong> Presents search results with a quick summary for each recipe, including calorie count, preparation time, and the number of ingredients.
                </li>
                <li>
                  <strong>Recipe Details Presentation:</strong> Displays detailed information for each recipe, including nutritional details, ingredient description, calories, preparation time, quantity of ingredients, and total weight.
                </li>
              </ul>
            </div>
            <div className="mt-10">
              <h2 className="text-lg font-bold tracking-tight sm:text-2xl text-blue-600">
                Contributors
              </h2>
              <a href="https://github.com/Hugo1307" >
                <p className="mt-4 text-lg font-medium">
                  Hugo Gonçalves
                </p>
                <button type="button" className="mt-5 text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2">
                  <svg className="w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"/>
                  </svg>
                  Github Profile
                </button>
              </a>
            </div>
          </div>
          <div>
            <h2 className="text-lg font-bold tracking-tight sm:text-2xl text-blue-600">
              Used Libraries
            </h2>
            <ul className="mt-4 ms-6 text-black dark:text-white list-disc space-y-2">
              <li>
                <strong>Tailwind CSS:</strong> A utility-first CSS framework that provides low-level utility classes to build designs directly in your markup.
                <a href="https://www.npmjs.com/package/tailwindcss" target="_blank" rel="noopener noreferrer" className="text-blue-600">
                  <p>Tailwind CSS on npm</p>
                </a>
              </li>

              <li>
                <strong>React Router:</strong> A standard library for routing in React applications, allowing the navigation between different components in a React application.
                <a href="https://www.npmjs.com/package/react-router-dom" target="_blank" rel="noopener noreferrer" className="text-blue-600">
                  <p>React Router on npm</p>
                </a>
              </li>

              <li>
                <strong>React Redux:</strong> A predictable state container for JavaScript applications, particularly useful for managing state in larger React applications.
                <a href="https://www.npmjs.com/package/react-redux" target="_blank" rel="noopener noreferrer" className="text-blue-600">
                  <p>React Redux on npm</p>
                </a>
              </li>

              <li>
                <strong>Axios:</strong> A promise-based HTTP client for the browser and Node.js. It makes it easy to send asynchronous HTTP requests and handle responses.
                <a href="https://www.npmjs.com/package/axios" target="_blank" rel="noopener noreferrer" className="text-blue-600">
                  <p>Axios on npm</p>
                </a>
              </li>

              <li>
                <strong>Hero Icons:</strong> A set of free, MIT-licensed high-quality SVG icons for you to use in your web projects.
                <a href="https://www.npmjs.com/package/@heroicons/react" target="_blank" rel="noopener noreferrer" className="text-blue-600">
                  <p>Hero Icons on npm</p>
                </a>
              </li>

              <li>
                <strong>Headless UI:</strong> A set of completely unstyled, fully accessible UI components for building design systems and web applications.
                <a href="https://www.npmjs.com/package/@headlessui/react" target="_blank" rel="noopener noreferrer" className="text-blue-600">
                  <p>Headless UI on npm</p>
                </a>
              </li>

              <li>
                <strong>React Infinite Scroll Component:</strong> A React component that helps in implementing infinite scrolling in web applications.
                <a href="https://www.npmjs.com/package/react-infinite-scroll-component" target="_blank" rel="noopener noreferrer" className="text-blue-600">
                  <p>React Infinite Scroll Component on npm</p>
                </a>
              </li>

              <li>
                <strong>React Loading Skeleton:</strong> A lightweight library for adding loading skeletons to your React applications, providing a placeholder while content is loading.
                <a href="https://www.npmjs.com/package/react-loading-skeleton" target="_blank" rel="noopener noreferrer" className="text-blue-600">
                  <p>React Loading Skeleton on npm</p>
                </a>
              </li>

              <li>
                <strong>React Minimal Pie Chart:</strong> A lightweight React chart library to create simple and animated pie charts.
                <a href="https://www.npmjs.com/package/react-minimal-pie-chart" target="_blank" rel="noopener noreferrer" className="text-blue-600">
                  <p>React Minimal Pie Chart on npm</p>
                </a>
              </li>

              <li>
                <strong>React Toastify:</strong> A toast notification library for React applications, allowing you to show messages to the user in a non-intrusive way.
                <a href="https://www.npmjs.com/package/react-toastify" target="_blank" rel="noopener noreferrer" className="text-blue-600">
                  <p>React Toastify on npm</p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

  );
}