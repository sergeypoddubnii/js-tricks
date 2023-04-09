import React from 'react';
import Section from 'Components/section';
import Thesis from 'Components/section/thesis/thesis';
import Code from 'Components/section/code';
import CodeSyntax from 'Components/code-syntax';
import {useAppSelector} from 'store/hooks';
import {selectIterator} from '../iteratorSlice';

const IteratorThesis = () => {
	const {snippets} = useAppSelector(selectIterator);
	return (
		<Section title={'Iterator'}>
			<Thesis title={'Iterator'}>
				Iterator its object with method <Code>next()</Code>.
				<Code>Next()</Code> must return object with 2 values:
				<Code>done: This is true if the last value in the sequence has already been consumed. If value is present alongside done, it is the iterator return value</Code>
				<Code>value: The next value in the iteration sequence.</Code>
			</Thesis>
			<Thesis title='iterable'>
				<Code>Iterable</Code> it is object witch have method [Symbol.iterator].
			</Thesis>
			<Thesis>
				<Code>[Symbol.iterator]</Code> method returns <Code>iterator</Code> witch was mentioned early.
			</Thesis>
			<Thesis>
				<Code>iterable</Code> object can be looped in <Code>for of</Code>
			</Thesis>
			<CodeSyntax code={snippets.iterator}/>
		</Section>
	);
};

export default IteratorThesis;
