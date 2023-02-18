import React from 'react';
import Card from 'Components/card';
import customPromise from './custom-promise.json';
import CodeSyntax from 'Components/code-syntax';

const PromiseAll = () => {
	return (
		<Card title={'Custom promise all'}>
			<h6>Custom promise all</h6>
			<CodeSyntax code={customPromise.promiseIterative} />
		</Card>
	);
};

export default PromiseAll;
