import React, {FC} from 'react';
import {toast} from 'react-toastify';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import './styles.scss';

interface IProps {
	children: React.ReactNode;
	notificationText?: string;
}

const CopyButton:FC<IProps> = ({children, notificationText='Copied!'}:IProps) => {
	const handleCopyCode = () => toast.success(notificationText);

	return (
		<div className='code__button'>
			<CopyToClipboard
				text={'Copy'}
				onCopy={handleCopyCode}
			>
				{children}
			</CopyToClipboard>
		</div>
	);
};

export default CopyButton;
