import React from 'react';
import Card from 'Components/card';
import CodeSyntax from 'Components/code-syntax';
import customMethods from './arrayMethods.json';

const ArrayMethods = () => {
	return (
		<Card title='Array Methods'>
			<h6>Custom map</h6>
			<CodeSyntax code={customMethods.customMap}/>
			<h6>Custom foreach</h6>
			<CodeSyntax code={customMethods.customForeach}/>
			<h6>Custom filter</h6>
			<CodeSyntax code={customMethods.customFilter}/>
			<h6>Custom find</h6>
			<CodeSyntax code={customMethods.customFind}/>
		</Card>
	);
};

export default ArrayMethods;
