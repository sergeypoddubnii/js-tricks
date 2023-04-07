import React, {FC} from 'react';
import PageLayout from 'core/layout/page-layout';
import Card from 'Components/containers/card';
import HashMenu from 'Components/navigation-hash/hash-menu';
import CodeSyntax from 'Components/code-syntax';
import {useAppSelector} from 'store/hooks';
import {selectIterator} from './iteratorSlice';
import Section from 'Components/section';
import Thesis from 'Components/section/thesis/thesis';
import Definition from 'Components/section/definition';

const Iterator:FC = () => {
	const {snippets} = useAppSelector(selectIterator);

	return (
		<PageLayout>
			<Card title='Iterator'>
				<Section title={'Iterator'}>
					<Thesis title={'Iterator'}>
						Iterator its object with method <Definition>next()</Definition>.
						<Definition>Next()</Definition> must return object with 2 values:
						<Definition>done: boolean</Definition>
						<Definition>value: next value</Definition>
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
			</Card>
			<HashMenu menu={[]}/>
		</PageLayout>
	);
};

export default Iterator;
