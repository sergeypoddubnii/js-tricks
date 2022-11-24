import React, {FC, ReactNode, useState} from 'react';

interface IProps {
	title: string;
	onClick: () => void;
	children: ReactNode;
}

const SubMenu: FC<IProps> = ({title, children}:IProps) => {
	const [isOpen, setIsOpen] = useState(false);

	const handleToggleOpen = () => {
		setIsOpen((prev) => !prev);
	};

	return (
		<>
			<button
				type='button'
				onClick={handleToggleOpen}
			>
				{title}
			</button>
			{isOpen && children}
		</>
	);
};

export default SubMenu;
