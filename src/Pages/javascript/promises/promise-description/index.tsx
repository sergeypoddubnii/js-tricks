import React, {FC} from 'react';
import Code from 'Components/section/code';
import Thesis from 'Components/section/thesis/thesis';
import CodeSyntax from 'Components/code-syntax';
import Section from 'Components/section';
import {useAppSelector} from 'store/hooks';
import {selectPromise} from '../promiseSlice';

const PromiseDescription:FC = () => {
	const {snippets} = useAppSelector(selectPromise);
	return (
		<Section title='Promise Description'>
			<p>
				<Code>Promise</Code> it is object which used for deferred and asynchronous calculations
			</p>
			<Thesis title={'Create Promise'}>
				<p>
					<Code>Executor</Code> receives two arguments: <Code>resolve</Code> and <Code>reject.</Code>
					These functions are pre-defined by the JavaScript engine, so we don’t need to create them.
					We should only call one of them when ready.
				</p>
			</Thesis>
			<Thesis>
				<p>
					When <Code>new Promise</Code> is created, the <Code>executor</Code> runs automatically.
				</p>
			</Thesis>
			<Thesis>
				<p>
					The promise object returned by the <Code>new Promise</Code> constructor has these internal properties:
				</p>
				<p>
					<Code>state</Code> — initially <Code>pending</Code>, then changes to either <Code>fulfilled</Code> when resolve is called or <Code>rejected</Code> when reject is called
				</p>
				<p><Code>result</Code> — initially <Code>undefined</Code>, then changes to value when <Code>resolve(value)</Code> is called or error when <Code>reject(error)</Code> is called.</p>
			</Thesis>
			<Thesis>
				The executor should call only one resolve or one reject. Any state change is final.
				All further calls of resolve and reject are ignored
			</Thesis>
			<CodeSyntax code={snippets.description} />
		</Section>
	);
};

export default PromiseDescription;
