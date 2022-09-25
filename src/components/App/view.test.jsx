import { render, screen } from '@testing-library/react';
import App from './view';

function useLanguagesListMock() {
	return {
		fr: 'Francais',
		en: 'English',
	};
}

test('renders root component without error', () => {
	render(<App
		useLanguagesList={() => useLanguagesListMock()}
	/>);
	//const textElement = screen.getByText(/Empty text/i);
	//expect(textElement).toBeInTheDocument();
});
