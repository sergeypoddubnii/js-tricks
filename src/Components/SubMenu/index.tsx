import React, {FC} from 'react';

interface IProps {
	title: string;
	onClick: () => void;
}

const SubMenu: FC<IProps> = ({title, onClick}:IProps) => {
	return (
		<>
			<button
				type='button'
				onClick={onClick}
			>
				{title}
			</button>
		</>
	);
};

export default SubMenu;
