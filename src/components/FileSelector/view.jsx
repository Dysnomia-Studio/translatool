import { useEffect, useState } from 'react';

import createFile from '../../events/createFile';

import './view.css';

export default function FileSelector({ useFileList, currentFile, setCurrentFile, selectedFolder }) {
	const [lastUpdate, setLastUpdate] = useState(Date.now());
	const fileList = useFileList(selectedFolder, lastUpdate);
	const [inputText, setInputText] = useState('');

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
			<input type="text" placeholder="New file name" value={inputText} onChange={(e) => setInputText(e.target.value)} />
			<input type="button" value="Add file" onClick={async() => {
				try {
					await createFile(selectedFolder, inputText);
					setInputText('');
					setLastUpdate(Date.now());
				} catch(e) {
					console.error(e);
				}
			}} />
		</div>
	);
}
