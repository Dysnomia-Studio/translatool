import { useState } from 'react';

export default function useFileList() {
	const [fileList, setFileList] = useState([]);

	// Get file list from back-end

	return ['path/to/file'];
}