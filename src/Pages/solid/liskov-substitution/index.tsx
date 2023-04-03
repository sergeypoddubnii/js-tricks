import React, {FC} from 'react';
import CodeSyntax from 'Components/code-syntax';
import code from './pattern.json';
import Section from 'Components/section';

interface IProps {
	hashId: string;
}

const LiskovSubstitution:FC<IProps> = ({hashId}:IProps) => {
	return (
		<Section hashId={hashId} title='Liskov Substitution Principle'>
			<p>Subclasses should be substitutable for their superclasses</p>
			<p>
				The Liskov Substitution Principle (LSP) is one of the SOLID principles of software development. It states that any instance of a base class should be able to be replaced by an instance of any of its derived classes without altering the correctness of the program.
				In the context of React, this principle is relevant in the design and implementation of components. When creating components, its important to ensure that they can be easily extended and modified without breaking the functionality of the application.
				One way to apply the LSP in React is to use inheritance and composition appropriately. Inheritance allows you to create a base component that can be extended by derived components with additional functionality, while composition allows you to build complex components by combining simpler components.
				To ensure that components adhere to the LSP, you should avoid violating the contract of the base component. For example, if a base component expects certain props to be passed to it, a derived component should not require additional props that are not part of the contract.
				You should also avoid overriding methods or properties of the base component in a way that alters their behavior. This can cause unexpected issues when the derived component is used in place of the base component.
				In React, the Liskov Substitution Principle can be applied to components. In particular, it means that a child component should be able to substitute its parent component without breaking the functionality of the parent component.
				In summary, the Liskov Substitution Principle is an important principle in software development, including React. By designing components that adhere to the LSP, you can create more flexible and maintainable code that can be easily extended and modified without breaking the functionality of the application.
			</p>
			<CodeSyntax code={code.pattern} />
		</Section>
	);
};

export default LiskovSubstitution;
