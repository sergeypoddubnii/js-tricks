import React from 'react';
import Section from 'Components/section';
import Thesis from 'Components/section/thesis/thesis';
import Definition from 'Components/section/definition';
import CodeSyntax from 'Components/code-syntax';
import code from '../code.json';

const PromiseInstanceMethods = () => {
	return (
		<Section title={'Promise Instance methods'}>
			<Thesis title={'Promise.prototype.then'}>
				The first argument of <Definition>.then</Definition> is a function that runs when the promise is resolved and receives the result.
			</Thesis>
			<Thesis>
				The second argument of <Definition>.then</Definition> is a function that runs when the promise is rejected and receives the error.
			</Thesis>
			<CodeSyntax code={code.then}/>
			<Thesis title={'Promise.prototype.catch'}>
				The call <Definition>.catch(func)</Definition> is a complete analog of <Definition>.then(null, func)</Definition>, it’s just a shorthand.
			</Thesis>
			<CodeSyntax code={code.catch}/>
			<Thesis title={'Promise.prototype.finally'}>
				<Definition>.finally(onFinally)</Definition> appends a handler to the promise, and returns a new promise that is resolved when the original promise is resolved. The handler is called when the promise is settled, whether fulfilled or rejected.
			</Thesis>
			<Thesis>
				<Definition>onFinally</Definition>A function to asynchronously execute when this promise becomes settled. Its return value is ignored unless the returned value is a rejected promise. The function is called with no arguments.
			</Thesis>
			<CodeSyntax code={code.finally} />
		</Section>
	);
};

export default PromiseInstanceMethods;
