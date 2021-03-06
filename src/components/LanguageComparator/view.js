import TranslationList from '../TranslationList';

export default function LanguageComparator({
	useTranslation,
	leftLanguage,
	rightLanguage,
	currentFile,
	setLeftLanguage,
	setRightLanguage,
}) {
	const leftTranslations = useTranslation(currentFile, leftLanguage);
	const rightTranslations = useTranslation(currentFile, rightLanguage);

	return (
		<>
			<TranslationList file={currentFile} list={leftTranslations} lang={leftLanguage} setLanguage={setLeftLanguage} direction={'left'} />
			<TranslationList file={currentFile} list={rightTranslations} lang={rightLanguage} setLanguage={setRightLanguage} direction={'right'} />
		</>
	);
}
