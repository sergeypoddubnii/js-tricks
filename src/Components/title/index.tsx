import React, {FC} from 'react';

export enum EnumTitleVARIANT {
	DEFAULT = 'default',
	PAGE = 'page',
}

interface IProps {
	title: string;
	variant?: EnumTitleVARIANT;
}

const Title:FC<IProps> = ({title, variant=EnumTitleVARIANT.DEFAULT}:IProps) => {
	switch (variant) {
	case EnumTitleVARIANT.DEFAULT:
		return <h4>{title}</h4>;
	default:
		return <h4>{title}</h4>;
	}
};

export default Title;
