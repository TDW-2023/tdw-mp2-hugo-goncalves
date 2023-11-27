import "./Navbar.css";

export default function Navbar() {
  return (
    <>
      <nav className="navbar-title bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
        <div className="container flex flex-wrap items-center justify-between mx-auto py-8">
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Yummy
            </h2>
          </a>
          <div
            className="font-thin hidden w-full md:block md:w-auto"
            id="navbar-multi-level"
          >
            <ul className="navbar-text flex flex-col font-medium text-md p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
                  aria-current="page"
                >
                  All
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Chicken
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Fish
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Vegetarian
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
