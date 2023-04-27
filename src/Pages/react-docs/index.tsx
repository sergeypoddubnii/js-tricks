import React from 'react';
import PageLayout from 'core/layout/page-layout';
import ReferenceList from 'Components/reference/reference-list';
import UseReducerHook from './useReducer-hook';

const references = ['https://react.dev/'];

const ReactDocs = () => {
	return (
		<PageLayout title={'React Documentation'}>
			<UseReducerHook/>
			<ReferenceList references={references}/>
		</PageLayout>
	);
};

export default ReactDocs;
