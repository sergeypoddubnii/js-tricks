import React, {FC} from 'react';
import Card from 'Components/card';
import CodeSyntax from '../../../Components/code-syntax';
import pattern from './pattern.json';

const ModulePattern:FC = () => {
	return (
		<Card title='Module patterns'>
			<p>The module pattern is a design pattern used for improving the maintainability and reusability of the code by creating public and private access levels. Sometimes called encapsulation, it protects the value inside a module from being accessed from other scopes.</p>
			<CodeSyntax code={pattern}/>
		</Card>
	);
};

export default ModulePattern;
