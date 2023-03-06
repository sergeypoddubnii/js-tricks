import React from 'react';
import Card from './index';
import {render, screen} from '@testing-library/react';

describe('Card', () => {
	const MOCK_TITLE = 'Mock Title';
	const MOCK_BODY = 'Mock Children';
	const TITLE_CLASS ='card__title';
	const BODY_CLASS ='card__body';

	const ui = <Card title={MOCK_TITLE}>{MOCK_BODY}</Card>;

	it('Render Title', () => {
		render(ui);
		const title = screen.getByText(MOCK_TITLE);
		expect(title).toBeInTheDocument();
		expect(title).toHaveClass(TITLE_CLASS);
	});

	it('Render Body', () => {
		render(ui);
		const body = screen.getByText(MOCK_BODY);
		expect(body).toBeInTheDocument();
		expect(body).toHaveClass(BODY_CLASS);
	});
});

