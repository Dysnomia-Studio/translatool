import { useEffect, useState } from 'react';

import useLanguagesList from './useLanguagesList';

import getFilePath from '../business/getFilePath';
import getKeys from '../business/getKeys';
import parseJsonFile from '../business/parseJsonFile';

export default function useTranslation(selectedFolder, file, language) {
	const [translationList, setTranslationList] = useState();

	const languages = useLanguagesList(selectedFolder);

	useEffect(() => {
		if(!selectedFolder || !file || !language) {
			return;
		}

		(async() => {
			const data = await parseJsonFile(await getFilePath(selectedFolder, file, language));
			const finalData = {};
			for(const key of await getKeys(selectedFolder, languages, file)) {
				finalData[key] = data[key] || '';
			}

			setTranslationList(finalData);
		})();
	}, [selectedFolder, file, language]);

	return translationList;
}
