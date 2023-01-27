import React from 'react';
import Card from 'Components/card';

const DependencyInversion = () => {

	return (
		<Card title='Dependency inversion'>
			<p>Dependency inversion</p>
			<p>React perspective: No component or function should care about how a particular thing is done.</p>
			<p>In most cases, if you are violating the single-responsibility principle, then you might also be violating the dependency inversion principle</p>
			<p>For any component, look into the import section at the top. If you are importing some library that’s not responsible for displaying something (e.g. a toast or modal), then you might be violating the principle</p>

		</Card>
	);
};

export default DependencyInversion;
