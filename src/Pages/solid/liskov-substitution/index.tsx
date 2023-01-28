import React from 'react';
import Card from 'Components/card';

const LiskovSubstitution = () => {

	return (
		<Card title='Liskov Substitution'>
			<p>Subclasses should be substitutable for their superclasses</p>
			<p>React perspective: Components should abide by some kind of contract</p>
		</Card>
	);
};

export default LiskovSubstitution;
