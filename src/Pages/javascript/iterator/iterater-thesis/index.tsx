import React from 'react';
import Section from 'Components/section';
import Thesis from 'Components/section/thesis/thesis';
import Definition from 'Components/section/definition';
import CodeSyntax from 'Components/code-syntax';
import {useAppSelector} from 'store/hooks';
import {selectIterator} from '../iteratorSlice';

const IteratorThesis = () => {
	const {snippets} = useAppSelector(selectIterator);
	return (
		<Section title={'Iterator'}>
			<Thesis title={'Iterator'}>
				Iterator its object with method <Definition>next()</Definition>.
				<Definition>Next()</Definition> must return object with 2 values:
				<Definition>done: This is true if the last value in the sequence has already been consumed. If value is present alongside done, it is the iterator return value</Definition>
				<Definition>value: The next value in the iteration sequence.</Definition>
			</Thesis>
			<Thesis title='iterable'>
				<Definition>Iterable</Definition> it is object witch have method [Symbol.iterator].
			</Thesis>
			<Thesis>
				<Definition>[Symbol.iterator]</Definition> method returns <Definition>iterator</Definition> witch was mentioned early.
			</Thesis>
			<Thesis>
				<Definition>iterable</Definition> object can be looped in <Definition>for of</Definition>
			</Thesis>
			<CodeSyntax code={snippets.iterator}/>
		</Section>
	);
};

export default IteratorThesis;
