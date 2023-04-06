import { configureStore } from '@reduxjs/toolkit';
import arrayMethodsSlice from 'Pages/custom-realization/array-methods/arrayMethodsSlice';
import loadingPageProcess from 'Pages/web-staff/loading-page-process/loadingPageProcessSlice';
import eventLoopSlice from 'Pages/web-staff/event-loop/eventLoopSlice';
import promiseSlice from 'Pages/javascript/promises/promiseSlice';

export const store = configureStore({
	reducer: {
		arrayMethods: arrayMethodsSlice,
		loadingPageProcess: loadingPageProcess,
		eventLoop: eventLoopSlice,
		promise: promiseSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
