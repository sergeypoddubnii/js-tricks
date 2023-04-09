import React from 'react';
import Section from 'Components/section';
import Thesis from 'Components/section/thesis/thesis';
import Code from 'Components/section/code';
import {useAppSelector} from 'store/hooks';
import {selectIterator} from '../iteratorSlice';
import CodeSyntax from 'Components/code-syntax';

const GeneratorSection = () => {
	const {snippets} = useAppSelector(selectIterator);

	return (
		<Section title={'Generator'}>
			<Thesis>
				To create a <Code>generator</Code>, we need a special syntax construct: <Code>function*</Code>.
				Generator functions behave differently from regular ones.
				When such function is called, it doesn*t run its code.
				Instead it returns a special object, called <Code>“generator object”</Code>, to manage the execution.
			</Thesis>
			<Thesis>
				The main method of a generator is <Code>next()</Code>.
				When called, it runs the execution until the nearest <Code>yield value</Code> statement.
				Then the function execution pauses, and the yielded value is returned to the outer code.
			</Thesis>
			<CodeSyntax code={snippets.generator}/>
		</Section>
	);
};

export default GeneratorSection;
