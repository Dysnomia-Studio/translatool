import { useEffect } from 'react';

import './view.css';

export default function FileSelector({ useFileList, currentFile, setCurrentFile, selectedFolder }) {
	const fileList = useFileList(selectedFolder);

	useEffect(() => {
		if(fileList && !currentFile) {
			setCurrentFile(fileList[0]);
		}
	}, [fileList, currentFile, setCurrentFile]);

	if(typeof currentFile !== 'string') {
		return null;
	}

	return (
		<div className="file-selector">
			<select onChange={(event) => setCurrentFile(event.target.value)}>
				{
					fileList && fileList.map((elt) => <option key={elt} value={elt}>{elt}</option>)
				}
			</select>
		</div>
	);
}
