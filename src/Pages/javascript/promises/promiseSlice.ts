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
		'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise',
		'https://javascript.info/promise-basics',
	],
	snippets: {
		description: 'const executor = (resolve, reject) => {\n  if ("everything ok") {\n    resolve("succeed with some result"); // when promise succeed\n  } else {\n    reject(new Error("failed because of ...")); // when promise failed\n  }\n\n  return "Return something"; // ingore return from func executor\n};\n\nconst promise = new Promise(executor);\n\npromise.then((result) => {\n  console.log(result); // Expected output: "some succeed result"\n});\n\n// === several resolve, reject call ===\n\nconst executor1 = (resolve, reject) => {\n  resolve("succeed only first resolve!");\n\n  reject(new Error("failed because of ...")); // ignored\n  resolve("some new result"); // ignored\n};\n\nconst promise1 = new Promise(executor1);\n\npromise1.then((result) => {\n  console.log(result); // Expected output: "succeed only first resolve!"\n});\n',
		then: 'const instancePromise = new Promise((resolve, reject) => {\n  resolve("Succeed!");\n});\n\ninstancePromise.then(\n  (result) => console.log(result), //Expected output: "Succeed!"\n  (error) => console.log(error) // ignored\n);\n\n// ====\n\nconst instancePromise1 = new Promise((resolve, reject) => {\n  reject(new Error("failed because of ... "));\n});\n\ninstancePromise1.then(\n  (result) => console.log(result), // ignored\n  (error) => console.log(error) //Expected output: "failed because of ... "\n);\n',
		catch: 'const instancePromise = new Promise((resolve, reject) => {\n  reject(new Error("failed because of ... "));\n});\n\ninstancePromise.then(\n  null,\n  (error) => console.log(error) //Expected output: "failed because of ... "\n);\n\n// equal snippets\n\ninstancePromise.catch(\n  (error) => console.log(error) //Expected output: "failed because of ... "\n);\n',
		finally: 'let isLoading = true;\n\nfetch("Some request")\n  .then((response) => {\n    // some work flow with response\n  })\n  .catch((error) => {\n    // some work flow with error\n  })\n  .finally(() => {\n    isLoading = false; // some cleanup\n  });\n',
		all : 'const promise1 = Promise.resolve(10);\nconst promise2 = new Promise((resolve, reject) => {\n  setTimeout(() => {\n    resolve("Succeed!");\n  }, 1000);\n});\nconst nonPromiseValue = 1; // non-promise value ignored but\n// returned in promise array value\n\nconst interable = [promise1, promise2, nonPromiseValue];\n\nPromise.all(interable).then((values) => {\n  console.log(values); //Expected output: [10, "Succeed!", 1]\n});\n\nconst promise3 = Promise.reject("Some reason");\nconst promise4 = Promise.resolve("Some succeed result");\n\nconst iterable1 = [promise3, promise4];\n\nPromise.all(iterable1)\n  .then((result) => {\n    console.log(result); // ignored\n  })\n  .catch((error) => {\n    console.log(error); ////Expected output: Some reason\n  });\n',
		allSettled: 'const promise1 = Promise.reject("Some reason");\nconst promise2 = Promise.resolve("Some succeed result");\n\nconst iterable = [promise1, promise2];\n\nPromise.allSettled(iterable).then((results) => {\n  console.log(results);\n  // Expected output:\n  // [\n  //   {\n  //     status: "rejected",\n  //     reason: "Some reason"\n  //   },\n  //   {\n  //     status: "fulfilled",\n  //     value: "Some succeed result"\n  //   }\n  // ]\n});\n\nconst promise3 = Promise.resolve(1);\nconst promise4 = Promise.reject("an error");\nconst nonPromiseValue = 10; // non-promise value\n\nconst iterable1 = [promise3, promise4, nonPromiseValue];\n\nPromise.allSettled(iterable1).then((results) => {\n  console.log(results);\n  // Expected output:\n  // [\n  //   {\n  //     status: "fulfilled",\n  //     value: 1\n  //   },\n  //   {\n  //     status: "rejected",\n  //     reason: "an error"\n  //   },\n  //   {\n  //     status: "fulfilled",\n  //     value: 10\n  //   }\n  // ]\n});\n',
		any: 'const promise1 = Promise.reject("some reason");\nconst promise2 = new Promise((resolve, reject) => {\n  setTimeout(resolve("quick"), 100);\n});\nconst promise3 = new Promise((resolve) => {\n  setTimeout(resolve("slow"), 500);\n});\n\nconst iterable1 = [promise1, promise2, promise3];\n\nconst iterable2 = [Promise.reject(1), Promise.reject(2)];\n\nPromise.any(iterable1).then((value) => {\n  console.log(value);\n  // Expected output: "quick"\n});\n\nPromise.any([]).catch((error) => {\n  console.log("error", error);\n  //Expected output: AggregateError: All promises were rejected\n});\n\nPromise.any(iterable2).catch((error) => {\n  console.log("error iterable2", error);\n  //Expected output: AggregateError: All promises were rejected\n});\n',
		race: 'const promise1 = new Promise((resolve, reject) => {\n  setTimeout(() => {\n    resolve("Succeed with some ...");\n  }, 1000);\n});\n\nconst promise2 = new Promise((resolve, reject) => {\n  setTimeout(() => {\n    reject("Failed with some reason ...");\n  }, 100);\n});\n\nPromise.race([promise1, promise2])\n  .then((value) => {\n    console.log(value);// ignored because resolve too slow\n  })\n  .catch((reason) => {\n    console.error(reason);\n    // Expected output: "Failed with some reason ..."\n  });\n'
	}
};

export const promiseSlice = createSlice({
	name: 'promise',
	initialState,
	reducers: {},
});

export const { } = promiseSlice.actions;

export const selectPromise = (state: RootState) => state.promise;

export default promiseSlice.reducer;
