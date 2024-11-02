import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

import {TItem, TDashboardState} from '$dashboard/dashboard.types';

const initialState: TDashboardState = {
  items: [],
  filteredItems: [], // Used in dashboard screen only
  selectedItems: [],
  lastModifiedTime: Date.now(),
};

/**
 * @description Updates the main items array & filtered items array/
 */
const _setItems = (state: TDashboardState, action: PayloadAction<TItem[]>) => {
  state.items = action.payload;
  state.filteredItems = action.payload;
  state.lastModifiedTime = Date.now();
};

const _filterItems = (
  state: TDashboardState,
  action: PayloadAction<TItem[]>,
) => {
  state.filteredItems = action.payload;
};

const _resetFilters = (state: TDashboardState) => {
  state.filteredItems = state.items;
};

const _selectItems = (
  state: TDashboardState,
  action: PayloadAction<TItem[]>,
) => {
  state.selectedItems = action.payload;
};

export const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    setItems: _setItems, // Used in case of update/delete item
    setFilteredItems: _filterItems,
    resetFilters: _resetFilters,
    selectItems: _selectItems,
  },
});

export const {setItems, setFilteredItems, resetFilters, selectItems} =
  dashboardSlice.actions;

export default dashboardSlice.reducer;
