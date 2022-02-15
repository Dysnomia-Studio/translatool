import { render, screen } from '@testing-library/react';
import App from './view';

test('renders root component without error', () => {
	render(<App />);
	//const textElement = screen.getByText(/Empty text/i);
	//expect(textElement).toBeInTheDocument();
});
