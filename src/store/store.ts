import { configureStore } from '@reduxjs/toolkit';
import arrayMethodsSlice from 'Pages/custom-realization/array-methods/arrayMethodsSlice';
import loadingPageProcess from 'Pages/web-staff/loading-page-process/loadingPageProcessSlice';

export const store = configureStore({
	reducer: {
		arrayMethods: arrayMethodsSlice,
		loadingPageProcess: loadingPageProcess
	},
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
