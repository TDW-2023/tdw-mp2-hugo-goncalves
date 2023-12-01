import { fireEvent, render } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "../../../redux/slices/searchSlice.js";
import SearchFilterTag from "./SearchFilterTag.jsx";

describe('SearchFilterTag', () => {
  let store;
  beforeEach(() => {
    store = configureStore({
      reducer: {
        search: searchReducer,
      },
    });
  });

  it('renders with initial state', () => {
    const { getByText } = render(
      <Provider store={store}>
        <SearchFilterTag filterName="Test" />
      </Provider>
    );
    expect(getByText('Test')).toBeInTheDocument();
  });

  it('adds filter when clicked and not selected', () => {
    const { getByText } = render(
      <Provider store={store}>
        <SearchFilterTag filterName="Test" />
      </Provider>
    );
    fireEvent.click(getByText('Test'));
    expect(store.getState().search.selectedFilters).toContainEqual({ filterName: 'Test', filterType: store.getState().search.filterOption });
  });

  it('removes filter when clicked and selected', () => {
    store.dispatch({ type: 'search/addSelectedFilter', payload: { filterName: 'Test', filterType: store.getState().search.filterOption } });
    const { getByText } = render(
      <Provider store={store}>
        <SearchFilterTag filterName="Test" />
      </Provider>
    );
    fireEvent.click(getByText('Test'));
    expect(store.getState().search.selectedFilters).not.toContainEqual({ filterName: 'Test', filterType: store.getState().search.filterOption });
  });
});