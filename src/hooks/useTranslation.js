import { useEffect, useState } from 'react';

import { ipcRenderer } from '../helpers/electron';

export default function useTranslation(file, language) {
	const [translationList, setTranslationList] = useState();

	useEffect(() => {
		(async() => {
			setTranslationList(
				await ipcRenderer.invoke('i18n:getTranslations', file, language)
			)
		})();
	}, []);

	return translationList;
}
