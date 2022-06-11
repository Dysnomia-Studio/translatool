import { useEffect } from 'react';

import './view.css';

export default function FileSelector({ useFileList, currentFile, setCurrentFile }) {
	const fileList = useFileList();

	useEffect(() => {
		if(!currentFile) {
			setCurrentFile(fileList[0]);
		}
	}, [fileList, currentFile, setCurrentFile]);

	console.log('Selected:', currentFile);

	if(typeof currentFile !== 'string') {
		return null;
	}

	return (
		<div className="file-selector">
			<select onChange={(event) => setCurrentFile(event.target.value)}>
				{
					fileList.map((elt) => <option key={elt} value={elt}>{elt}</option>)
				}
			</select>
		</div>
	);
}
