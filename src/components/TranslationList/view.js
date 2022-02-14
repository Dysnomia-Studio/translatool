import LanguageSelector from '../LanguageSelector';

import './view.css';

export default function TranslationListView({ list, lang, direction }) {
	const values = [];
	for(const id in list) {
		if(list.hasOwnProperty(id)) {
			values.push(
				<textarea value={list[id]} onChange={() => {}} />
			);
		}
	}

	return (
		<div className={`languageSelector-body languageSelector-body-${direction}`}>
			<LanguageSelector current={lang} />
			{values}
		</div>
	);
}
