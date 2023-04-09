import React from 'react';
import Section from 'Components/section';
import Thesis from 'Components/section/thesis/thesis';
import Definition from 'Components/section/definition';
import {useAppSelector} from 'store/hooks';
import {selectIterator} from '../iteratorSlice';
import CodeSyntax from 'Components/code-syntax';

const GeneratorSection = () => {
	const {snippets} = useAppSelector(selectIterator);

	return (
		<Section title={'Generator'}>
			<Thesis>
				To create a <Definition>generator</Definition>, we need a special syntax construct: <Definition>function*</Definition>.
				Generator functions behave differently from regular ones.
				When such function is called, it doesn*t run its code.
				Instead it returns a special object, called <Definition>“generator object”</Definition>, to manage the execution.
			</Thesis>
			<Thesis>
				The main method of a generator is <Definition>next()</Definition>.
				When called, it runs the execution until the nearest <Definition>yield value</Definition> statement.
				Then the function execution pauses, and the yielded value is returned to the outer code.
			</Thesis>
			<CodeSyntax code={snippets.generator}/>
		</Section>
	);
};

export default GeneratorSection;
