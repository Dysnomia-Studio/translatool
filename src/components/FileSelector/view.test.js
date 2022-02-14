import { render, screen } from '@testing-library/react';

import FileSelectorView from './view.js';

function useFileListMock(value) {
	return value;
}

test('Renders an empty list', () => {
	render(
		<FileSelectorView
			useFileList={() => useFileListMock([])}
		/>
	);
});

test('Renders an non-empty list', () => {
	render(
		<FileSelectorView
			useFileList={() => useFileListMock(['path/to/file'])}
		/>
	);

	const textElement = screen.getByText('file');
	expect(textElement).toBeInTheDocument();
});
