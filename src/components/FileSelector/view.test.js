import { render, screen } from '@testing-library/react';

import FileSelectorView from './view.js';

function useFileListMock(value) {
	return value;
}

test('Renders an empty list', () => {
	let currentFile;

	render(
		<FileSelectorView
			currentFile={currentFile}
			setCurrentFile={(value) => currentFile = value}
			useFileList={() => useFileListMock([])}
		/>
	);

	expect(currentFile).toBeUndefined();
});

test('Renders an non-empty list', () => {
	let currentFile;

	render(
		<FileSelectorView
			currentFile={currentFile}
			setCurrentFile={(value) => currentFile = value}
			useFileList={() => useFileListMock(['path/to/file'])}
		/>
	);

	expect(currentFile).toBeDefined();
});
