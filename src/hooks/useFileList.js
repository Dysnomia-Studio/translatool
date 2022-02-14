import { useEffect, useState } from 'react';

import { ipcRenderer } from '../helpers/electron';

export default function useFileList() {
	const [fileList, setFileList] = useState(['path/to/file', 'path/to/secondFile']);

	useEffect(() => {
		(async() => {
			setFileList(
				await ipcRenderer.invoke('i18n:getFiles')
			)
		})();
	}, []);

	return fileList;
}
