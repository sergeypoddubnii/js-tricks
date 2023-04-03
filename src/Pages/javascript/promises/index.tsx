import React from 'react';
import Section from 'Components/section';
import PageLayout from 'core/layout/page-layout';
import Card from 'Components/containers/card';
import HashMenu from 'Components/navigation-hash/hash-menu';
import CodeSyntax from 'Components/code-syntax';
import Definition from 'Components/section/definition';
import code from  './code.json';
import Thesis from 'Components/section/thesis/thesis';
import Paragraph from 'Components/section/paragraph';

const Promises = () => {
	return (
		<PageLayout>
			<Card title={'Promises'}>
				<Section title={'Summary'}>
					<Paragraph>
						<Definition>Promise</Definition> it is object which used for deferred and asynchronous calculations
					</Paragraph>
					<h5>Create Promise</h5>
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
					<h5>Promise.prototype.then</h5>
					<Thesis>
						<Paragraph>
							The first argument of <Definition>.then</Definition> is a function that runs when the promise is resolved and receives the result.
						</Paragraph>
					</Thesis>
					<Thesis>
						<Paragraph>
							The second argument of <Definition>.then</Definition> is a function that runs when the promise is rejected and receives the error.
						</Paragraph>
					</Thesis>
					<CodeSyntax code={code.then}/>
					<h5>Promise.prototype.catch</h5>
					<Thesis>
						<Paragraph>
							The call <Definition>.catch(func)</Definition> is a complete analog of <Definition>.then(null, func)</Definition>, it’s just a shorthand.
						</Paragraph>
					</Thesis>
					<CodeSyntax code={code.catch}/>
				</Section>
				<HashMenu menu={[]} />
			</Card>
		</PageLayout>
	);
};

export default Promises;
