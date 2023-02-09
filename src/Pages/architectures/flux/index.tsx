import React from 'react';
import Card from 'Components/card';
import CodeSyntax from 'Components/code-syntax';
import codeExample from './flux-example.json';

const Flux = () => {
	return (
		<Card title='Flux'>
			<p>Flux uses a unidirectional data flow pattern to solve state management complexity</p>
			<CodeSyntax code={codeExample.dataFlow} />
			<h6>View</h6>
			<p>View component renders the UI. Whenever any user interaction occurs on it (like an event) then it fires off the action. Also when the Store informs the View that some change has occurred, it re-renders itself. For example, if a user clicks the Add button.</p>
			<h6>Action</h6>
			<CodeSyntax code={codeExample.action} />
			<p>Action handles all the events. These events are passed by the view component. This layer is generally used to make API calls. Once the action is done it is dispatched using the Dispatcher. The action can be something like add a post, delete a post, or any other user interaction.</p>
			<h6>Dispatcher</h6>
			<p>Dispatcher is the central hub and singleton registry. It dispatches the payload from Actions to Store. Also makes sure that there are no cascading effects when an action is dispatched to the store. It ensures that no other action happens before the data layer has completed processing and storing operations.</p>
			<h6>Store</h6>
			<p>An application can have one or many app stores. Stores get updated because they have a callback that is registered using the dispatcher.</p>
		</Card>
	);
};

export default Flux;
