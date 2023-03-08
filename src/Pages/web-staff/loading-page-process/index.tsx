import React from 'react';
import Card from 'Components/card';
import InfoLinks from 'Components/link/info-links';
import {useAppSelector} from 'store/hooks';
import {selectLoadingPageProcessSlice} from './loadingPageProcessSlice';
import img from 'assets/images/load-page-process.png';

const LoadingPageProcess = () => {
	const loadingPageProcess = useAppSelector(selectLoadingPageProcessSlice);

	return (
		<Card title={'Loading page process'}>
			<img src={img}/>
			<InfoLinks links={loadingPageProcess.links}/>
		</Card>
	);
};

export default LoadingPageProcess;
