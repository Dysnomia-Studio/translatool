import { useEffect, useState } from 'react';

import FileSelector from '../FileSelector';
import LanguageComparator from '../LanguageComparator';

export default function AppView({ useLanguagesList, selectedFolder }) {
	const languages = useLanguagesList(selectedFolder);

	const [currentFile, setCurrentFile] = useState(selectedFolder);
	const [leftLanguage, setLeftLanguage] = useState('en');
	const [rightLanguage, setRightLanguage] = useState();

	useEffect(() => {
		if(languages && !rightLanguage) {
			setRightLanguage(Object.keys(languages)[0]);
		}
	}, [languages]);

	if(!languages || !rightLanguage) {
		return null;
	}

	// TODO: Add file
	// TODO: Add language

	return (
		<div>
			<FileSelector
				currentFile={currentFile}
				setCurrentFile={setCurrentFile}
				selectedFolder={selectedFolder}
			/>
			<LanguageComparator
				currentFile={currentFile}
				leftLanguage={leftLanguage}
				rightLanguage={rightLanguage}
				setLeftLanguage={setLeftLanguage}
				setRightLanguage={setRightLanguage}
				selectedFolder={selectedFolder}
			/>
		</div>
	);
}
