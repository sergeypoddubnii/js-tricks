import React from 'react';
import Section from 'Components/section';
import Thesis from 'Components/section/thesis/thesis';
import Definition from 'Components/section/definition';
import CodeSyntax from 'Components/code-syntax';
import {useAppSelector} from 'store/hooks';
import {selectPromise} from '../promiseSlice';

const PromiseStaticMethods = () => {
	const {snippets}  = useAppSelector(selectPromise);

	return (
		<Section title='Promise Static Methods'>
			<Thesis title='Promise.all(iterable)'>
				<Definition>Promise.all(iterable)</Definition> static method takes an iterable of promises as input and returns a single Promise.
				This returned promise fulfills when all of the input promises fulfill (including when an empty iterable is passed), with an array of the fulfillment values.
			</Thesis>
			<Thesis>
				If the iterable passed is empty, already fulfilled.
			</Thesis>
			<Thesis>
				Asynchronously rejected, when any of the promises in the given iterable rejects. The rejection reason is the rejection reason of the first promise that was rejected.
			</Thesis>
			<Thesis>
				If the <Definition>iterable</Definition> contains non-promise values, they will be ignored, but still counted in the returned promise array value (if the promise is fulfilled):
			</Thesis>
			<CodeSyntax code={snippets.all}/>
			<Thesis title='Promise.allSettled(iterable)'>
				<Definition>Promise.allSettled(iterable)</Definition> static method takes an iterable of promises as input and returns a single Promise.
				This returned promise fulfills when all of the input promises settle (including when an empty iterable is passed),
				with an array of objects that describe the outcome of each promise.
			</Thesis>
			<Thesis>
				The fulfillment value is an array of objects, each describing the outcome of one promise in the iterable,
				in the order of the promises passed, regardless of completion order.
				Each outcome object has the following properties:
			</Thesis>
			<CodeSyntax code={snippets.allSettled}/>
			<Thesis title='Promise.any(iterable)'>
				<Definition>Promise.any(iterable)</Definition> static method takes an iterable of promises as input and returns a single Promise.
				This returned promise fulfills when any of the input promises fulfills, with this first fulfillment value.
				It rejects when all of the input promises reject (including when an empty iterable is passed),
				with an AggregateError containing an array of rejection reasons.
			</Thesis>
			<Thesis>
				Asynchronously rejected, when all of the promises in the given <Definition>iterable</Definition> reject.
				The rejection reason is an AggregateError containing an array of rejection reasons in its errors property.
			</Thesis>
			<Thesis title='Promise.race(iterable)'>
				<Definition>Promise.race(iterable)</Definition> static method takes an iterable of promises as input and returns a single Promise.
				This returned promise settles with the eventual state of the first promise that settles.
			</Thesis>
			<Thesis>
				<Definition>Promise.race(iterable)</Definition> takes the first settled <Definition>Promise</Definition>
			</Thesis>
			<CodeSyntax code={snippets.any}/>
		</Section>
	);
};

export default PromiseStaticMethods;
