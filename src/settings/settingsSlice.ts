import {createSlice} from '@reduxjs/toolkit';
import type {PayloadAction} from '@reduxjs/toolkit';

import StorageService from '$common/services/StorageService';
import {TSettingsState} from '$settings/settings.types';

const initialState: TSettingsState = {
  colorThemeIndex: StorageService.get(`colorThemeIndex`, 'number') || 0,
  developersOptionsEnabled: false,
};

/**
 * @description Updates the color theme of app
 */
const _setColorThemeIndex = (
  state: TSettingsState,
  action: PayloadAction<number>,
) => {
  state.colorThemeIndex = action.payload;
};

/**
 * @description Updates the developers options
 */
const _setDevelopersOptions = (
  state: TSettingsState,
  action: PayloadAction<boolean>,
) => {
  state.developersOptionsEnabled = action.payload;
};

/**
 * @description Toggles the developers options
 */
const _toggleDevelopersOptions = (state: TSettingsState) => {
  state.developersOptionsEnabled = !state.developersOptionsEnabled;
};

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setColorThemeIndex: _setColorThemeIndex,
    setDevelopersOptions: _setDevelopersOptions,
    toggleDevelopersOptions: _toggleDevelopersOptions,
  },
});

export const {
  setColorThemeIndex,
  setDevelopersOptions,
  toggleDevelopersOptions,
} = settingsSlice.actions;

export default settingsSlice.reducer;
