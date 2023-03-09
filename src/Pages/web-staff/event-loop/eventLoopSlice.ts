import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from 'store/store';

interface IState {
	links: string[];
}

const initialState: IState = {
	links: [
		'https://blog.sessionstack.com/how-javascript-works-event-loop-and-the-rise-of-async-programming-5-ways-to-better-coding-with-2f077c4438b5',
		'https://geekflare.com/javascript-event-loops/',
		'https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop?retiredLocale=uk'
	]
};

export const eventLoopSlice = createSlice({
	name: 'eventLoop',
	initialState,
	reducers: {},
});

export const { } = eventLoopSlice.actions;

export const selectEventLoopSlice = (state: RootState) => state.eventLoop;

export default eventLoopSlice.reducer;
