import { useState } from 'react';

export default function useFileList() {
	const [fileList, setFileList] = useState(['path/to/file', 'path/to/secondFile']);

	// TODO: Get file list from back-end

	return fileList;
}
