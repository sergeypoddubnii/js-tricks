import React from 'react';
import Card from 'Components/card';
import codeExample from './react-18-code-example.json';
import CodeSyntax from 'Components/code-syntax';

const React18 = () => {
	return (
		<Card title='React v18'>
			<h6>Automatic Batching</h6>
			<p>Batching is when React groups multiple state updates into a single re-render for better performance</p>
			<CodeSyntax code={codeExample.automaticBatching} />
			<h6>A transition is a new concept in React to distinguish between urgent and non-urgent updates.</h6>
			<p>A transition is a new concept in React to distinguish between urgent and non-urgent updates.</p>
			<CodeSyntax code={codeExample.transition} />
			<h6>New Suspense Features</h6>
			<p>Suspense in React 18 works best when combined with the transition API. If you suspend during a transition, React will prevent already-visible content from being replaced by a fallback. Instead, React will delay the render until enough data has loaded to prevent a bad loading state.</p>
			<CodeSyntax code={codeExample.suspense} />
			<h6>New Hooks</h6>
			<p>useId is a new hook for generating unique IDs on both the client and server, while avoiding hydration mismatches. It is primarily useful for component libraries integrating with accessibility APIs that require unique IDs. This solves an issue that already exists in React 17 and below, but it’s even more important in React 18 because of how the new streaming server renderer delivers HTML out-of-order.</p>
			<p>useTransition and startTransition let you mark some state updates as not urgent. Other state updates are considered urgent by default. React will allow urgent state updates (for example, updating a text input) to interrupt non-urgent state updates (for example, rendering a list of search results).</p>
			<p>useDeferredValue lets you defer re-rendering a non-urgent part of the tree. It is similar to debouncing, but has a few advantages compared to it. There is no fixed time delay, so React will attempt the deferred render right after the first render is reflected on the screen. The deferred render is interruptible and doesn’t block user input.</p>
			<p>useSyncExternalStore is a new hook that allows external stores to support concurrent reads by forcing updates to the store to be synchronous. It removes the need for useEffect when implementing subscriptions to external data sources, and is recommended for any library that integrates with state external to React.</p>
			<p>useInsertionEffect is a new hook that allows CSS-in-JS libraries to address performance issues of injecting styles in render. Unless you’ve already built a CSS-in-JS library we don’t expect you to ever use this. This hook will run after the DOM is mutated, but before layout effects read the new layout. This solves an issue that already exists in React 17 and below, but is even more important in React 18 because React yields to the browser during concurrent rendering, giving it a chance to recalculate layout.</p>
		</Card>
	);
};

export default React18;
