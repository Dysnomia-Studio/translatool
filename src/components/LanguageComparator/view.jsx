import TranslationList from '../TranslationList';

export default function LanguageComparator({
	useTranslation,
	leftLanguage,
	rightLanguage,
	currentFile,
	setLeftLanguage,
	setRightLanguage,
	selectedFolder
}) {
	const leftTranslations = useTranslation(selectedFolder, currentFile, leftLanguage);
	const rightTranslations = useTranslation(selectedFolder, currentFile, rightLanguage);

	return (
		<>
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
