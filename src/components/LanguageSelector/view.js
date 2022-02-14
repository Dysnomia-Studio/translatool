import './view.css';

export default function LanguageSelectorView({ useLanguagesList, current }) {
	const languageList = useLanguagesList();
	const languageListOptions = [];
	for(const languageKey in languageList) {
		if(languageList.hasOwnProperty(languageKey)) {
			languageListOptions.push(<option key={languageKey} value={languageKey}>{languageList[languageKey]}</option>);
		}
	}

	return (
		<div className="language-selector">
			<select value={current}>
				{languageListOptions}
			</select>
		</div>
	);
}
