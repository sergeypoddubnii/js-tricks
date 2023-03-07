import React from 'react';
import NavigationLink from './index';
import {render} from '@testing-library/react';
import {BrowserRouter} from 'react-router-dom';

describe('Navigation Link', () => {
	const TEXT_LINK = 'mock link';
	const LINK_PATH = '/mock-path';

	it('render navigation link', () => {
		const {getByText} = render(
			<BrowserRouter>
				<NavigationLink text={TEXT_LINK} to={LINK_PATH} />
			</BrowserRouter>
		);
		expect(getByText(TEXT_LINK)).toBeInTheDocument();
	});
});
