import getFilePath from './getFilePath';
import parseJsonFile from './parseJsonFile';

export default async function getKeys(selectedFolder, languages, file) {
	const keys = new Set();

	for(const language in languages) {
		if(languages.hasOwnProperty(language)) {
			const data = await parseJsonFile(await getFilePath(selectedFolder, file, language));

			for(const key in data) {
				if(data.hasOwnProperty(key)) {
					keys.add(key);
				}
			}
		}
	}

	return Array.from(keys);
}