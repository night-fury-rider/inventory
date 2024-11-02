import {configureStore, createListenerMiddleware} from '@reduxjs/toolkit';

import {DASHBOARD} from '$common/constants/strings.constants';
import LoggerService from '$common/services/LoggerService';
import StorageService from '$common/services/StorageService';
import dashboardSlice, {setItems} from '$dashboard/dashboardSlice';
import settingsSlice from '$settings/settingsSlice';

const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
  actionCreator: setItems,
  effect: async action => {
    await StorageService.set('items', action.payload);
    LoggerService.log(DASHBOARD.editItem.successMsg.persisted);
  },
});

export const store = configureStore({
  reducer: {
    dashboard: dashboardSlice,
    settings: settingsSlice,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().prepend(listenerMiddleware.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type TRootState = ReturnType<typeof store.getState>;

export type TAppDispatch = typeof store.dispatch;
