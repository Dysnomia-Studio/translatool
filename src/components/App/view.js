import { useEffect, useState } from 'react';

import FileSelector from '../FileSelector';
import LanguageComparator from '../LanguageComparator';

export default function AppView({ useLanguagesList }) {
	const languages = useLanguagesList();

	const [currentFile, setCurrentFile] = useState();
	const [leftLanguage, setLeftLanguage] = useState();
	const [rightLanguage, setRightLanguage] = useState();

	useEffect(() => {
		if(!leftLanguage || !rightLanguage) {
			setLeftLanguage(Object.keys(languages)[0]);
			setRightLanguage(Object.keys(languages)[1]);
		}

	}, [languages]);

	if(!leftLanguage || !rightLanguage) {
		return null;
	}

	// TODO: Add file
	// TODO: Add language

	return (
		<div>
			<FileSelector
				currentFile={currentFile}
				setCurrentFile={setCurrentFile}
			/>
			<LanguageComparator
				currentFile={currentFile}
				leftLanguage={leftLanguage}
				rightLanguage={rightLanguage}
				setLeftLanguage={setLeftLanguage}
				setRightLanguage={setRightLanguage}
			/>
		</div>
	);
}
