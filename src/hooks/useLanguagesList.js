import { useState } from 'react';

export default function useLanguagesList() {
	const [languageList, setLanguageList] = useState({
		fr: 'Francais',
		en: 'English',
	});

	// TODO: Get language list from back-end

	return languageList;
}
