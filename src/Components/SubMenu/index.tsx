import React, {FC, useState} from 'react';
import NavigationLink from '../Navigation/NavigationLink';

interface ISubListItem {
	route: string;
	name: string;
}

interface IProps {
	title: string;
	onClick: () => void;
	subList: ISubListItem[];
}

const SubMenu: FC<IProps> = ({title, subList}:IProps) => {
	const [isOpen, setIsOpen] = useState(false);

	const handleToggleOpen = () => {
		setIsOpen((prev) => !prev);
	};

	const list = subList.map((item:ISubListItem) => <NavigationLink key={item.name} text={item.name} to={item.route}/>);

	return (
		<>
			<button
				type='button'
				onClick={handleToggleOpen}
			>
				{title}
			</button>
			{isOpen && list}
		</>
	);
};

export default SubMenu;
