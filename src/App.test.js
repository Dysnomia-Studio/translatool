import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
	render(<App />);
	const textElement = screen.getByText(/Empty text/i);
	expect(textElement).toBeInTheDocument();
});
