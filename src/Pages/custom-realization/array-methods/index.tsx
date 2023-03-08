import React from 'react';
import Card from 'Components/card';
import CodeSyntax from 'Components/code-syntax';
import {useAppSelector} from 'store/hooks';
import { selectArrayMethods} from './arrayMethodsSlice';

const ArrayMethods = () => {
	const arrayMethods = useAppSelector(selectArrayMethods);

	return (
		<Card title='Array Methods'>
			<h6>Custom map</h6>
			<CodeSyntax code={arrayMethods.map}/>
			<h6>Custom foreach</h6>
			<CodeSyntax code={arrayMethods.foreach}/>
			<h6>Custom filter</h6>
			<CodeSyntax code={arrayMethods.filter}/>
			<h6>Custom find</h6>
			<CodeSyntax code={arrayMethods.find}/>
			<h6>Custom reduce</h6>
			<CodeSyntax code={arrayMethods.reduce}/>
			<h6>Custom every</h6>
			<CodeSyntax code={arrayMethods.every}/>
			<h6>Custom some</h6>
			<CodeSyntax code={arrayMethods.some}/>
		</Card>
	);
};

export default ArrayMethods;
