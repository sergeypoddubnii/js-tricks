import React from 'react';
import Card from 'Components/card';
import customPromise from './custom-promise.json';
import CodeSyntax from 'Components/code-syntax';

const CustomPromise = () => {
	return (
		<Card title={'Custom promise'}>
			<h6>Custom promise</h6>
			<CodeSyntax code={customPromise.promise} />
			<h6>Custom method promise all</h6>
			<CodeSyntax code={customPromise.promiseIterative} />
		</Card>
	);
};

export default CustomPromise;
