import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from 'store/store';

interface IState {
	map: string;
	foreach: string;
	filter: string;
	find: string;
	reduce: string;
	every: string;
	some: string;
}

const initialState: IState = {
	map: 'function customMapFunction(callback) {\n  const newArray = [];\n  for (let i = 0; i < this.length; i++) {\n    newArray[i] = callback(this[i], i);\n  }\n  return newArray;\n}\n\nArray.prototype.customMap = customMapFunction;',
	foreach: 'function customForEachFunction(callback) {\n  for (let i = 0; i < this.length; i++) {\n    this[i] = callback(this[i], i);\n  }\n}\n\nArray.prototype.customForEach = customForEachFunction;',
	filter: 'function customFilterFunction(callback) {\n  const resultArray = [];\n  for (let i = 0; i < this.length; i++) {\n    if (callback(this[i], i)) {\n      resultArray.push(this[i]);\n    }\n  }\n  return resultArray;\n}\n\nArray.prototype.customFilter = customFilterFunction;',
	find: 'function customFindFunction(callback) {\n  for (let i = 0; i < this.length; i++) {\n    if (callback(this[i], i)) {\n      return this[i];\n    }\n  }\n}\n\nArray.prototype.customFind = customFindFunction;',
	reduce: 'function customReduceFunction(callback, initialValue) {\n  for (let i = 0; i < this.length; i++) {\n    initialValue = callback(initialValue, this[i], i);\n  }\n  return initialValue;\n}\n\nArray.prototype.customReduce = customReduceFunction;',
	every: 'function customEveryFunction(callback) {\n  let countTruth = 0;\n  for (let i = 0; i < this.length; i++) {\n    if (callback(this[i], i)) {\n      countTruth = countTruth + 1;\n    }\n  }\n  return countTruth === this.length;\n}\n\nArray.prototype.customEveryFunction = customEveryFunction;',
	some: 'function customSomeFunction(callback) {\n  for (let i = 0; i < this.length; i++) {\n    if (callback(this[i], i)) {\n      return true;\n    }\n  }\n  return false;\n}\n\nArray.prototype.customSomeFunction = customSomeFunction;'
};

export const arrayMethodsSlice = createSlice({
	name: 'arrayMethods',
	initialState,
	reducers: {},
});

export const { } = arrayMethodsSlice.actions;

export const selectArrayMethods = (state: RootState) => state.arrayMethods;

export default arrayMethodsSlice.reducer;
