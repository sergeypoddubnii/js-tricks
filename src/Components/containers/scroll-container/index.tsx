import React, {FC} from 'react';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';
import 'overlayscrollbars/overlayscrollbars.css';

interface IProps {
	children: React.ReactNode;
	className?: string;
}

const ScrollContainer: FC<IProps> = ({children, className}:IProps) => {
	return (
		<OverlayScrollbarsComponent
			className={`${className} os-theme-light`}
			defer
		>
			{children}
		</OverlayScrollbarsComponent>
	);
};

export default ScrollContainer;
