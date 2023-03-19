import React, {FC} from 'react';

export enum EnumTitleType {
	DEFAULT = 'default',
	SECTION = 'section',
	PAGE = 'page',

}

interface IProps {
	title: string;
	type?: EnumTitleType;
}

const Title:FC<IProps> = ({title, type=EnumTitleType.DEFAULT}:IProps) => {
	switch (type) {
	case EnumTitleType.DEFAULT:
		return <h4>{title}</h4>;
	default:
		return <h4>{title}</h4>;
	}
};

export default Title;
