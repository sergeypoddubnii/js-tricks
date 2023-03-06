import React from 'react';
import CodeSyntax from './index';
import {render, screen} from '@testing-library/react';

describe('CodeSyntax', () => {
	const MOCK_TITLE = 'Mock Title';
	const MOCK_CODE = 'Mock Children';
	const TITLE_CLASS = 'code__title';

	const ui = <CodeSyntax title={MOCK_TITLE} code={MOCK_CODE}/>;

	it('Render Title', () => {
		render(ui);
		const title = screen.getByText(MOCK_TITLE);

		expect(title).toBeInTheDocument();
		expect(title).toHaveClass(TITLE_CLASS);
	});

	it('Render Code', () => {
		render(ui);
		const code = screen.getByText(MOCK_CODE);
		expect(code).toBeInTheDocument();
	});

});

