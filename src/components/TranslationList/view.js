import { useEffect, useState } from 'react';

import LanguageSelector from '../LanguageSelector';

import saveTranslation from '../../events/saveTranslation';

import './view.css';

export default function TranslationListView({ file, list, lang, direction, setLanguage }) {
	const [reset, setReset] = useState(false);

	useEffect(() => {
		setReset(true);
	}, [lang]);

	if(reset) {
		setTimeout(() => setReset(false), 100);
		return null;
	}

	function updateEntry(event, id) {
		list[id] = event.target.value;

		saveTranslation(file, lang, list);
	}

	const values = [];
	for(const id in list) {
		if(list.hasOwnProperty(id)) {
			values.push(
				<textarea key={id} defaultValue={list[id]} placeholder={id} onChange={(event) => updateEntry(event, id)} />
			);
		}
	}

	return (
		<div className={`languageSelector-body languageSelector-body-${direction}`}>
			<LanguageSelector current={lang} setLanguage={setLanguage} />
			{values}
		</div>
	);
}
