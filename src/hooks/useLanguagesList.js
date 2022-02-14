import { useEffect, useState } from 'react';

import { ipcRenderer } from '../helpers/electron';

export default function useLanguagesList() {
	const [languageList, setLanguageList] = useState({});

	useEffect(() => {
		(async() => {
			setLanguageList(
				await ipcRenderer.invoke('i18n:getLanguages')
			)
		})();
	}, []);

	return languageList;
}
