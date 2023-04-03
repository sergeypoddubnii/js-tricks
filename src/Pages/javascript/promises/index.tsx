import React from 'react';
import Section from 'Components/section';
import PageLayout from 'core/layout/page-layout';
import Card from 'Components/containers/card';
import HashMenu from 'Components/navigation-hash/hash-menu';
import CodeSyntax from 'Components/code-syntax';
import Definition from 'Components/section/definition';
import code from  './code.json';

const Promises = () => {
	return (
		<PageLayout>
			<Card title={'Promises'}>
				<Section title={'Summary'}>
					<p>
						<Definition>Promise</Definition> it is object which used for deferred and asynchronous calculations
					</p>
					<h5>Create Promise</h5>
					<ul>
						<li>
							<p>
								<Definition>Executor</Definition> receives two arguments: <Definition>resolve</Definition> and <Definition>reject.</Definition>
								These functions are pre-defined by the JavaScript engine, so we don’t need to create them.
								We should only call one of them when ready.
							</p>
						</li>
						<li>
							<p>
								When <Definition>new Promise</Definition> is created, the <Definition>executor</Definition> runs automatically.

							</p>
						</li>
						<li>
							<p>
								The promise object returned by the <Definition>new Promise</Definition> constructor has these internal properties:
							</p>
							<p>
								<Definition>state</Definition> — initially <Definition>pending</Definition>, then changes to either <Definition>fulfilled</Definition> when resolve is called or <Definition>rejected</Definition> when reject is called
							</p>
							<p>
								<Definition>result</Definition> — initially <Definition>undefined</Definition>, then changes to value when <Definition>resolve(value)</Definition> is called or error when <Definition>reject(error)</Definition> is called.
							</p>
						</li>
						<li>
							<p>
								The executor should call only one resolve or one reject. Any state change is final.
								All further calls of resolve and reject are ignored
							</p>
						</li>
					</ul>
					<CodeSyntax code={code.createPromise}/>
					<h5>Promise.prototype.then</h5>
					<ul>
						<li>
							<p>
								The first argument of <Definition>.then</Definition> is a function that runs when the promise is resolved and receives the result.
							</p>
						</li>
						<li>
							<p>
								The second argument of <Definition>.then</Definition> is a function that runs when the promise is rejected and receives the error.
							</p>
						</li>
					</ul>
					<CodeSyntax code={code.then}/>
					<h5>Promise.prototype.catch</h5>
					<ul>
						<li>
							The call <Definition>.catch(func)</Definition> is a complete analog of <Definition>.then(null, func)</Definition>, it’s just a shorthand.
						</li>
					</ul>
					<CodeSyntax code={code.catch}/>
				</Section>
				<HashMenu menu={[]} />
			</Card>
		</PageLayout>
	);
};

export default Promises;
