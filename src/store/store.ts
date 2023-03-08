import { configureStore } from '@reduxjs/toolkit';
import arrayMethodsSlice from 'Pages/custom-realization/array-methods/arrayMethodsSlice';

export const store = configureStore({
	reducer: {
		arrayMethods: arrayMethodsSlice
	},
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
