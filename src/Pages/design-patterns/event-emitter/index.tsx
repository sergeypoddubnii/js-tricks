import React from 'react';
import Section from 'Components/section';
import CodeSyntax from 'Components/code-syntax';

const EventEmitter = () => {
	return (
		<Section title={'Event Emitter'}>
			<p>Event Emitter</p>
			<CodeSyntax code={'class EventEmitter {\n  constructor() {\n    this.events = {};\n  }\n\n  subscribe(eventName, callback) {\n    if (!this.events[eventName]) {\n      this.events[eventName] = [];\n    }\n    this.events[eventName].push(callback);\n  }\n\n  unsubscribe(eventName, callback) {\n    this.events[eventName] = this.events[eventName].filter(\n      (eventCallback) => callback !== eventCallback\n    );\n  }\n\n  emit(eventName, args) {\n    if (this.events[eventName]) {\n      this.events[eventName].forEach((callback) => callback.call(null, args));\n    }\n  }\n}\n'}/>
		</Section>
	);
};

export default EventEmitter;
