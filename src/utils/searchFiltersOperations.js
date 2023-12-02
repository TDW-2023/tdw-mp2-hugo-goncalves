export const transformFilters = (selectedFilters) => {
  const filters = {};

  selectedFilters.forEach((filter) => {
    if (Object.prototype.hasOwnProperty.call(filters, filter.filterType.id)) {
      filters[filter.filterType.id].push(filter.filterName);
    } else {
      filters[filter.filterType.id] = [filter.filterName];
    }
  });

  return filters;
};
