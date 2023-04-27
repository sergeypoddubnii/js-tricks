import React from 'react';
import PageLayout from 'core/layout/page-layout';
import ReferenceList from 'Components/reference/reference-list';

const references = ['https://react.dev/'];

const ReactDocs = () => {
	return (
		<PageLayout title={'React Documentation'}>
			<ReferenceList references={references}/>
		</PageLayout>
	);
};

export default ReactDocs;
