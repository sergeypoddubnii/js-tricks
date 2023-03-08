import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from 'store/store';

interface IState {
	links: string[];
}

const initialState: IState = {
	links: [
		'https://medium.com/@maneesa/what-happens-when-you-type-an-url-in-the-browser-and-press-enter-bb0aa2449c1a',
		'https://aws.amazon.com/ru/blogs/mobile/what-happens-when-you-type-a-url-into-your-browser/',
		'https://medium.com/jspoint/how-the-browser-renders-a-web-page-dom-cssom-and-rendering-df10531c9969'
	]
};

export const loadingPageProcessSlice = createSlice({
	name: 'loadingPageProcess',
	initialState,
	reducers: {},
});

export const { } = loadingPageProcessSlice.actions;

export const selectLoadingPageProcessSlice = (state: RootState) => state.loadingPageProcess;

export default loadingPageProcessSlice.reducer;
