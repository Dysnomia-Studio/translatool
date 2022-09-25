import { render, screen } from '@testing-library/react';

import LanguageSelectorView from './view.jsx';

function useLanguagesListMock() {
	return {
		fr: 'Francais',
		en: 'English',
	};
}

test('Renders an non-empty list', () => {
	render(
		<LanguageSelectorView
			useLanguagesList={() => useLanguagesListMock()}
		/>
	);

	const textElement = screen.getByText('Francais');
	expect(textElement).toBeInTheDocument();
});
