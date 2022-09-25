import { invoke } from '@tauri-apps/api/tauri';

/**
 * Find the right file path depending on a "file" name, and a language
 * Could be:
 *  - path/file/lang.json
 *  - path/lang/file.json
 */
export default async function getFilePath(selectedFolder, file, language) {
	let filePath = selectedFolder + '/' + file + '/' +  `${language}.json`;
	if(!await invoke('does_file_exists', { filePath })) {
		filePath = selectedFolder + '/' + language + '/' +  `${file}.json`;
	}
	if(!await invoke('does_file_exists', { filePath })) {
		return;
	}

	return filePath;
}