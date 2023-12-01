import SearchBar from "../components/Search/SearchBar.jsx";
import { useParams } from "react-router-dom";
import SearchFilters from "../components/Search/Filters/SearchFilters.jsx";
import SearchResults from "../components/Search/Result/SearchResults.jsx";

export default function SearchPage() {
  const { query } = useParams();

  return (
    <>
      <div className="flex flex-col bg-white dark:bg-gray-950 min-h-screen">
        <SearchBar query={query} />
        <div className="mt-8">
          <SearchFilters />
        </div>
        <div className="container mx-auto">
          <hr className="h-px mb-2 mt-6 bg-gray-200 border-0 dark:bg-gray-700" />
        </div>
        <SearchResults />
      </div>
    </>
  );
}
