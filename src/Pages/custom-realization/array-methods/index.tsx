import React from 'react';
import Card from 'Components/card';
import CodeSyntax from 'Components/code-syntax';
import customMethods from './arrayMethods.json';

const ArrayMethods = () => {
	return (
		<Card title='Array Methods'>
			<h6>Custom map</h6>
			<CodeSyntax code={customMethods.map}/>
			<h6>Custom foreach</h6>
			<CodeSyntax code={customMethods.foreach}/>
			<h6>Custom filter</h6>
			<CodeSyntax code={customMethods.filter}/>
			<h6>Custom find</h6>
			<CodeSyntax code={customMethods.find}/>
			<h6>Custom reduce</h6>
			<CodeSyntax code={customMethods.reduce}/>
		</Card>
	);
};

export default ArrayMethods;
