import React, {FC} from 'react';
import Paragraph from 'Components/section/paragraph';
import Definition from 'Components/section/definition';
import SubTitle from 'Components/section/sub-title';
import Thesis from 'Components/section/thesis/thesis';
import CodeSyntax from 'Components/code-syntax';
import code from '../code.json';
import Section from 'Components/section';

const PromiseDescription:FC = () => {
	return (
		<Section title='Promise Description'>
			<Paragraph>
				<Definition>Promise</Definition> it is object which used for deferred and asynchronous calculations
			</Paragraph>
			<SubTitle text='Create Promise'/>
			<Thesis>
				<Paragraph>
					<Definition>Executor</Definition> receives two arguments: <Definition>resolve</Definition> and <Definition>reject.</Definition>
					These functions are pre-defined by the JavaScript engine, so we don’t need to create them.
					We should only call one of them when ready.
				</Paragraph>
			</Thesis>
			<Thesis>
				<Paragraph>
					When <Definition>new Promise</Definition> is created, the <Definition>executor</Definition> runs automatically.
				</Paragraph>
			</Thesis>
			<Thesis>
				<Paragraph>
					The promise object returned by the <Definition>new Promise</Definition> constructor has these internal properties:
				</Paragraph>
				<Paragraph>
					<Definition>state</Definition> — initially <Definition>pending</Definition>, then changes to either <Definition>fulfilled</Definition> when resolve is called or <Definition>rejected</Definition> when reject is called
				</Paragraph>
				<Paragraph>
					<Definition>result</Definition> — initially <Definition>undefined</Definition>, then changes to value when <Definition>resolve(value)</Definition> is called or error when <Definition>reject(error)</Definition> is called.
				</Paragraph>
			</Thesis>
			<Thesis>
				<Paragraph>
					The executor should call only one resolve or one reject. Any state change is final.
					All further calls of resolve and reject are ignored
				</Paragraph>
			</Thesis>
			<CodeSyntax code={code.createPromise} />
		</Section>
	);
};

export default PromiseDescription;
