import "./Navbar.css";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [activeRoute, setActiveRoute] = useState("");

  useEffect(() => {
    const currentPath = window.location.pathname;
    if (currentPath === "/") {
      setActiveRoute("Home");
    } else if (currentPath === "/search") {
      setActiveRoute("Search");
    } else if (currentPath === "/about") {
      setActiveRoute("About");
    }
  }, []);

  return (
    <>
      <nav className="navbar-title bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700">
        <div className="container flex flex-wrap items-center justify-between mx-auto py-8">
          <a
            href="/"
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
                {activeRoute === "Home" ? (
                  <a
                    href="/"
                    className="block py-2 px-3 text-blue-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Home
                  </a>
                ) : (
                  <a
                    href="/"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Home
                  </a>
                )}
              </li>
              <li>
                {activeRoute === "Search" ? (
                  <a
                    href="/search"
                    className="block py-2 px-3 text-blue-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Search
                  </a>
                ) : (
                  <a
                    href="/search"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Search
                  </a>
                )}
              </li>
              <li>
                {activeRoute === "About" ? (
                  <a
                    href="/about"
                    className="block py-2 px-3 text-blue-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    About
                  </a>
                ) : (
                  <a
                    href="/about"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    About
                  </a>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
