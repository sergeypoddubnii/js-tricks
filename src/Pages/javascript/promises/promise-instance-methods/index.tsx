import React from 'react';
import Section from 'Components/section';
import SubTitle from 'Components/section/sub-title';
import Thesis from 'Components/section/thesis/thesis';
import Paragraph from 'Components/section/paragraph';
import Definition from 'Components/section/definition';
import CodeSyntax from 'Components/code-syntax';
import code from '../code.json';

const PromiseInstanceMethods = () => {
	return (
		<Section title={'Promise Instance methods'}>
			<SubTitle text='Promise.prototype.then'/>
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
			<SubTitle text={'Promise.prototype.catch'} />
			<Thesis>
				<Paragraph>
					The call <Definition>.catch(func)</Definition> is a complete analog of <Definition>.then(null, func)</Definition>, it’s just a shorthand.
				</Paragraph>
			</Thesis>
			<CodeSyntax code={code.catch}/>
		</Section>
	);
};

export default PromiseInstanceMethods;
