export default function SearchBar() {
  return (
    <>
      <div className="flex flex-row justify-center mt-14">
        <div className="flex flex-row p-4 w-5/12 rounded-3xl bg-gray-200 dark:bg-gray-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-8 h-8 text-gray-600 dark:text-gray-300"
          >
            <path d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
          <input
            type="text"
            placeholder="Search..."
            className="rounded-3xl bg-gray-200 dark:bg-gray-800 w-full mx-6 outline-none text-black dark:text-gray-300 text-lg"
          />
        </div>
      </div>
    </>
  );
}
