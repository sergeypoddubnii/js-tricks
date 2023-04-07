import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from 'store/store';

interface ISnippets {
	[key :string]: string
}

interface IState {
	references: string[];
	snippets: ISnippets;
}

const initialState: IState = {
	references: [
		'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_generators'
	],
	snippets: {
		iterator: 'let iterable = {// can`t use \"for of\"\n  from: 0,\n  to: 10\n};\n\niterable[Symbol.iterator] = function () {\n  return { // return iterator\n    current: this.from,\n    end: this.to,\n\n    next() {\n      // this method must return {done: boolean, value: \"next value\"}\n      if (this.current <= this.end) {\n        return {\n          done: false,\n          value: this.current++\n        };\n      } else {\n        return { done: true, value: null };\n      }\n    }\n  };\n};\n\nfor (const number of iterable) {\n  console.log(\"number\", number);\n  // Expected output: \"0,1,2,3,4,5,6,7,8,9,10\"\n}\n\n',

	}
};

export const iteratorSlice = createSlice({
	name: 'iterator',
	initialState,
	reducers: {},
});

export const { } = iteratorSlice.actions;

export const selectIterator = (state: RootState) => state.iterator;

export default iteratorSlice.reducer;
