import React from 'react';
import Section from 'Components/section';
import CodeSyntax from 'Components/code-syntax';
import Thesis from 'Components/section/thesis/thesis';
import Code from 'Components/section/code';

const UseReducerHook = () => {
	return (
		<Section title={'useReducer hook'}>
			<Thesis title='Description'>
				useReducer takes three arguments: <Code>reducer</Code> <Code>initialArgs</Code> <Code>init</Code> return array with two items <Code>state</Code> <Code>dispatch</Code>
			</Thesis>
			<Thesis>
				<Code>Reducer</Code> pure function which takes two arguments: <Code>state</Code> and <Code>action</Code> return <Code>new state</Code>
			</Thesis>
			<Thesis>
				<Code>initialArgs</Code> its data with any type usually this is initialState
			</Thesis>
			<Thesis>
				<Code>init</Code> this is NOT required function. It takes as argument <Code>initialArgs</Code> and return <Code>initialState</Code>
			</Thesis>
			<Thesis>
				<Code>state</Code> it is value of state
			</Thesis>
			<Thesis>
				<Code>dispatch</Code>it is function send action to <Code>reducer</Code>
				and call rerender component
			</Thesis>
			<CodeSyntax code={'import \"./styles.css\";\nimport { useReducer } from \"react\";\n// reducer\nfunction reducer(state, action) {\n  switch (action.type) {\n    case \"increase\":\n      return { ...state, count: state.count + 1 };\n    case \"reduce\":\n      return { ...state, count: state.count - 1 };\n    default:\n      return state;\n  }\n}\n\nexport default function App() {\n  // initialState first value\n  const initialArgs = 33;\n  // init function not required return state\n  // takes as argument initialArgs\n  const initFunc = (count) => {\n    return { count: count };\n  };\n\n  const [state, dispatch] = useReducer(reducer, initialArgs, initFunc);\n\n  const actionIncrease = { type: \"increase\" };\n  const actionReduce = { type: \"reduce\" };\n\n  const handleIncrease = () => {\n    // dispatch call rerender\n    dispatch(actionIncrease);\n  };\n\n  const handleReduce = () => {\n    // dispatch call rerender\n    dispatch(actionReduce);\n  };\n\n  return (\n    <div className=\"App\">\n      <button onClick={handleIncrease}>increase+</button>\n      <button onClick={handleReduce}>reduce-</button>\n      <p>{state.count}</p>\n    </div>\n  );\n}\n'}/>
		</Section>
	);
};

export default UseReducerHook;
