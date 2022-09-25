import { render, screen } from '@testing-library/react';

import LanguageComparatorView from './view.jsx';

function useTranslationMock(value) {
	return value;
}

test('Renders an empty list', () => {
	render(
		<LanguageComparatorView
			useTranslation={() => useTranslationMock({})}
		/>
	);
});

test('Renders an non-empty list', () => {
	render(
		<LanguageComparatorView
			useTranslation={() => useTranslationMock({ test: 'Test' })}
		/>
	);
});
