import SearchFilterType from "./SearchFilterType.jsx";
import SearchFilterTags from "./SearchFilterTags.jsx";
import SearchFilterIndicator from "./SearchFilterIndicator.jsx";

export default function SearchFilters() {
  return (
    <>
      <div className="flex flex-row container mx-auto justify-center">
        <div className="flex justify-center basis-1/12" />
        <div className="flex justify-center basis-10/12 align-middle">
          <SearchFilterTags />
        </div>
        <div className="flex justify-center basis-1/12">
          <SearchFilterType />
          <SearchFilterIndicator />
        </div>
      </div>
    </>
  );
}
