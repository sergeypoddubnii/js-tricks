import React, {FC} from 'react';

interface IProps {
	title: string;
}

const SubMenu: FC<IProps> = ({title}:IProps) => {
	return (
		<>
			<button type='button'>
				{title}
			</button>
		</>
	);
};

export default SubMenu;
