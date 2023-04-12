import React from 'react';
import Section from 'Components/section';
import Thesis from 'Components/section/thesis/thesis';
import Code from 'Components/section/code';
import CodeSyntax from 'Components/code-syntax';

const Observer = () => {
	return (
		<Section title={'Observer'}>
			<Thesis title='General info'>
				<Code>Observer</Code>is a behavioral design pattern that lets you define a subscription mechanism
				to notify multiple objects about any events that happen to the object they’re observing.
			</Thesis>
			<CodeSyntax code={'class Observer {\n  constructor() {\n    this.observers = [];\n  }\n\n  subscribe(func) {\n    this.observers.push(func);\n  }\n\n  unsubscribe(func) {\n    this.observers = this.observers.filter((observer) => observer !== func);\n  }\n\n  notify(data) {\n    this.observers.forEach((observer) => observer(data));\n  }\n}\n\nconst observable = new Observer();\n'}/>
			<CodeSyntax code={'import React from "react";\nimport { Button } from "@material-ui/core";\n\nclass Observer {\n  constructor() {\n    this.subscribers = [];\n  }\n\n  subscribe(func) {\n    this.subscribers.push(func);\n  }\n\n  unsubscribe(func) {\n    this.observers = this.subscribers.filter((subscriber) => subscriber !== func);\n  }\n\n  notify(data) {\n    this.subscribers.forEach((subscriber) => subscriber(data));\n  }\n}\n// create observable object\nconst observable = new Observer();\n\nfunction handleClick() {\n  // call notify for all subscribers\n  observable.notify("User clicked button!");\n}\n\nfunction logger(data) {\n  console.log(`${Date.now()} ${data}`);\n}\n\n// subscribe function logger\nobservable.subscribe(logger);\n\nexport default function App() {\n  return (\n    <div className="App">\n      <Button variant="contained" onClick={handleClick}>\n        Click me!\n      </Button>\n    </div>\n  );\n}\n'}/>
		</Section>
	);
};

export default Observer;
