import React, {FC} from 'react';
import ReactDOM from 'react-dom';

interface IProps {
	children: React.ReactNode,
	rootElementId: string;
}

const Portal:FC<IProps> = ({children, rootElementId}:IProps) => {
	const portal =  document.createElement('div');
	portal.setAttribute('id', rootElementId);
	document.body.append(portal);

	if(!portal) return null;
	return ReactDOM.createPortal(
		children,
		portal
	);
};

export default Portal;
