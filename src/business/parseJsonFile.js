import { invoke } from '@tauri-apps/api/core';

/**
 * Open a file and parse it as a json string
 */
export default async function parseJsonFile(filePath) {
	if(!filePath) {
		return {};
	}

	if(!await invoke('does_file_exists', { filePath })) {
		return {};
	}

	try {
		return JSON.parse(
			await invoke('get_file_content', { filePath })
		);
	} catch(e) {
		console.error(e);
	}

	return {};
}