import { useState } from 'react';

import TranslationList from '../TranslationList';

import saveTranslation from '../../events/saveTranslation';

import './index.css';

export default function LanguageComparator({
	useTranslation,
	leftLanguage,
	rightLanguage,
	currentFile,
	setLeftLanguage,
	setRightLanguage,
	selectedFolder
}) {
	const [inputText, setInputText] = useState('');

	const leftTranslations = useTranslation(selectedFolder, currentFile, leftLanguage);
	const rightTranslations = useTranslation(selectedFolder, currentFile, rightLanguage);

	return (
		<>
			<div className="translation-key-add">
				<input
					type="text"
					placeholder="New translation key"
					value={inputText}
					onChange={(e) => setInputText(e.target.value)}
				/>
				<input type="button" value="Add key" onClick={async() => {
					try {
						leftTranslations[inputText] = '';
						rightTranslations[inputText] = '';
						await saveTranslation(selectedFolder, currentFile, leftLanguage, leftTranslations);
						setInputText('');
					} catch(e) {
						console.error(e);
					}
				}} />
			</div>

			<TranslationList
				file={currentFile}
				list={leftTranslations}
				lang={leftLanguage}
				setLanguage={setLeftLanguage}
				direction={'left'}
				selectedFolder={selectedFolder}
			/>
			<TranslationList
				file={currentFile}
				list={rightTranslations}
				lang={rightLanguage}
				setLanguage={setRightLanguage}
				direction={'right'}
				selectedFolder={selectedFolder}
			/>
		</>
	);
}
