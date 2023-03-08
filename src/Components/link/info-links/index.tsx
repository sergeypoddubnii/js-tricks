import React, {FC} from 'react';
import InfoLink from '../info-link';

interface IProps {
	links: string[];
	title?: string;
}

const InfoLinks:FC<IProps> = ({links, title='Links'}:IProps) => {

	const list = links.map((link: string) => <InfoLink key={link} path={link}/>);
	return (
		<div>
			<h5>{title}:</h5>
			{list}
		</div>
	);
};

export default InfoLinks;
