import React from 'react';
import PageLayout from 'core/layout/page-layout';
import Observer from './observer';
import EventEmitter from './event-emitter';

const DesignPatterns = () => {
	return (
		<PageLayout title={'Design Patterns'}>
			<Observer/>
			<EventEmitter/>
		</PageLayout>
	);
};

export default DesignPatterns;
