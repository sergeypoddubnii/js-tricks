import React, {FC, useState} from 'react';
import NavigationLink from '../Navigation/NavigationLink';
import './styles.scss';

interface ISubListItem {
	route: string;
	name: string;
}

interface IProps {
	title: string;
	subList: ISubListItem[];
}

const SubMenu: FC<IProps> = ({title, subList}:IProps) => {
	const [isOpen, setIsOpen] = useState(false);

	const handleToggleOpen = () => {
		setIsOpen((prev) => !prev);
	};

	const list = subList.map((item:ISubListItem) => <NavigationLink key={item.name} text={item.name} to={item.route}/>);

	const classFactory = ():string => {
		switch (true) {
		case isOpen:
			return 'subMenu__button subMenu__active';
		case !isOpen:
			return 'subMenu__button';
		default:
			return 'subMenu__button';
		}
	};

	return (
		<div className='subMenu'>
			<button
				type='button'
				className={classFactory()}
				onClick={handleToggleOpen}
			>
				{title}
			</button>
			{isOpen && <ul>{list}</ul>}
		</div>
	);
};

export default SubMenu;
