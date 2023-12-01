import SearchFilterType from "./SearchFilterType.jsx";
import SearchFilterTags from "./SearchFilterTags.jsx";

export default function SearchFilters() {
  return (
    <>
      <div className="flex flex-row justify-center">
        <div className="flex justify-center basis-10/12 align-middle">
          <SearchFilterTags />
        </div>
        <div className="flex justify-center">
          <SearchFilterType />
        </div>
      </div>
    </>
  );
}
