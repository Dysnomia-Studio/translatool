import TranslationList from '../TranslationList';

export default function LanguageComparator({ useTranslation }) {
	const currentLanguages = ['en', 'fr']; // TODO
	const currentFile = 'ui'; // TODO

	const leftTranslations = useTranslation(currentFile, currentLanguages[0]);
	const rightTranslations = useTranslation(currentFile, currentLanguages[1]);

	return (
		<>
			<TranslationList list={leftTranslations} lang={currentLanguages[0]} direction={'left'} />
			<TranslationList list={rightTranslations} lang={currentLanguages[1]} direction={'right'} />
		</>
	);
}
