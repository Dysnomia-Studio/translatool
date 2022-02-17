import { ipcRenderer } from '../helpers/electron';

export default function saveTranslation(file, lang, list) {
	console.log("SAVING", file, lang, list);

	ipcRenderer.invoke('i18n:saveTranslation', file, lang, list)
}
