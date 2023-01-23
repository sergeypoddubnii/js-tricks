import React, {FC, useState} from 'react';
import NavigationLink, {EnumNavigationType} from '../navigation/navigation-link';
import './styles.scss';
import {RiArrowDropDownLine} from 'react-icons/ri';

interface ISubListItem {
	route: string;
	name: string;
}

interface IProps {
	title: string;
	subList: ISubListItem[];
	icon?: React.ReactNode;
}

const SubMenu: FC<IProps> = ({title, subList, icon}:IProps) => {
	const [isOpen, setIsOpen] = useState(false);

	const handleToggleOpen = () => {
		setIsOpen((prev:boolean) => !prev);
	};

	const list = subList.map((item:ISubListItem) => {
		return (
			<NavigationLink
				key={item.name}
				text={item.name}
				to={item.route}
				icon={icon}
				type={EnumNavigationType.SECONDARY}
			/>
		);
	});

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
				<RiArrowDropDownLine className='subMenu__icon'/>
			</button>
			{isOpen && <ul>{list}</ul>}
		</div>
	);
};

export default SubMenu;
