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
	const getHashId = () => {
		const {hash} = useLocation();
		return hash.slice(1,hash.length);
	};

	const hashList = menu.map((item:IHash) => {
		return (
			<li
				key={item.to}
				className='hash__item'
			>
				<LinkHash
					to={item.to}
					text={item.text}
					className={getHashId() === item.to ? 'hash__link hash__link_active' : 'hash__link'}
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
