import React from 'react';
import PageLayout from 'core/layout/page-layout';
import ReferenceList from 'Components/reference/reference-list';
import UseReducerHook from './useReducer-hook';
import UseCallbackHook from './useCallback-hook';
import UseEffectHook from './useEffect-hook';

const references = ['https://react.dev/'];

const ReactDocs = () => {
	return (
		<PageLayout title={'React Documentation'}>
			<UseReducerHook/>
			<UseCallbackHook/>
			<UseEffectHook/>
			<ReferenceList references={references}/>
		</PageLayout>
	);
};

export default ReactDocs;
