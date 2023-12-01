import { useSelector } from "react-redux";

export default function SearchFilterIndicator() {
  const activeFilters = useSelector((state) => state.search.selectedFilters);

  return (
    <>
      {activeFilters && activeFilters.length > 0 ? (
        <div className="flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">
          {activeFilters.length}
        </div>
      ) : null}
    </>
  );
}
