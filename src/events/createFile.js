import { invoke } from '@tauri-apps/api/tauri';

import getFilePath from '../business/getFilePath';
import parseJsonFile from '../business/parseJsonFile';

export default async function createFile(selectedFolder, file) {
	console.log("CREATING", file);

	const configPath = selectedFolder + '/config.json';
	const config = await parseJsonFile(configPath);

	if(config.files.includes(file)) {
		return;
	}

	config.files.push(file);
	config.files.sort();

	await invoke('set_file_content', {
		filePath: configPath,
		data: JSON.stringify(config, null, 2)
	});

	await invoke('mkdir', {
		folderPath: selectedFolder + '/' + file + '/'
	});
}
