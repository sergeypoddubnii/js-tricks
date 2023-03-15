import React, {FC} from 'react';
import LinkHash from '../link-hash';
import { useLocation } from 'react-router-dom';
import './styles.scss';

export interface IHash {
	to: string;
	text: string;
}

interface IProps {
	menu: IHash[];
}

const HashMenu:FC<IProps> = ({menu}:IProps) => {
	const {hash} = useLocation();

	const hashList = menu.map((item:IHash) => {
		return (
			<li
				key={item.to}
				className='hash__item'
			>
				<LinkHash
					to={item.to}
					text={item.text}
					className={hash === item.to ? 'hash__item_active' : ''}
				/>
			</li>
		);
	});

	return (
		<ul className='hash__menu'>
			{hashList}
		</ul>
	);
};

export default HashMenu;
