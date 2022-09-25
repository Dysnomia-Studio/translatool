import { invoke } from '@tauri-apps/api/tauri';

import getFilePath from '../business/getFilePath';

export default async function saveTranslation(selectedFolder, file, lang, list) {
	console.log("SAVING", file, lang, list);

	await invoke('set_file_content', {
		filePath: await getFilePath(selectedFolder, file, lang),
		data: JSON.stringify(list, null, 2)
	});
}
