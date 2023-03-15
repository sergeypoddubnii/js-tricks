import React from 'react';
import Card from 'Components/containers/card';

const Factory = () => {
	return (
		<Card title={'Factory'}>
			<p>
				In React, the Factory pattern is a way of encapsulating the process of creating components. It involves creating a factory function that returns a component based on certain parameters that are passed to it.
				The Factory pattern is often used in large-scale applications where there are many similar components that need to be created dynamically based on different requirements. By using a factory function, developers can avoid duplicating code and instead create a reusable and modular codebase.
			</p>
		</Card>
	);
};

export default Factory;
