import React from 'react';
import Section from 'Components/section';
import Thesis from 'Components/section/thesis/thesis';
import Code from 'Components/section/code';
import CodeSyntax from 'Components/code-syntax';
import {useAppSelector} from 'store/hooks';
import {selectPromise} from '../promiseSlice';

const PromiseInstanceMethods = () => {
	const {snippets} = useAppSelector(selectPromise);

	return (
		<Section title={'Promise Instance methods'}>
			<Thesis title={'Promise.prototype.then'}>
				The first argument of <Code>.then</Code> is a function that runs when the promise is resolved and receives the result.
			</Thesis>
			<Thesis>
				The second argument of <Code>.then</Code> is a function that runs when the promise is rejected and receives the error.
			</Thesis>
			<CodeSyntax code={snippets.then}/>
			<Thesis title={'Promise.prototype.catch'}>
				The call <Code>.catch(func)</Code> is a complete analog of <Code>.then(null, func)</Code>, it’s just a shorthand.
			</Thesis>
			<CodeSyntax code={snippets.catch}/>
			<Thesis title={'Promise.prototype.finally'}>
				<Code>.finally(onFinally)</Code> appends a handler to the promise, and returns a new promise that is resolved when the original promise is resolved. The handler is called when the promise is settled, whether fulfilled or rejected.
			</Thesis>
			<Thesis>
				<Code>onFinally</Code>A function to asynchronously execute when this promise becomes settled. Its return value is ignored unless the returned value is a rejected promise. The function is called with no arguments.
			</Thesis>
			<CodeSyntax code={snippets.finally} />
		</Section>
	);
};

export default PromiseInstanceMethods;
