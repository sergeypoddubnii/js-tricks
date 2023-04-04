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
				<p>hello</p>
			</Thesis>
		</Section>
	);
};

export default PromiseInstanceMethods;
