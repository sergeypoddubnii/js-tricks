import React from 'react';
import Card from 'Components/card';
import CodeSyntax from 'Components/code-syntax';
import customRedux from './custom-redux.json';

const CustomRedux = () => {
	return (
		<Card title={'Custom Redux'}>
			<h6>Redux realization</h6>
			<CodeSyntax code={customRedux.redux}/>
			<h6>Redux usage</h6>
			<CodeSyntax code={customRedux.reduxUsage}/>
			<h6>combineReducers</h6>
			<CodeSyntax code={customRedux.combineReducers}/>
		</Card>
	);
};

export default CustomRedux;
