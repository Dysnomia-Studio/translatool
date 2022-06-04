import { ipcRenderer } from '../../helpers/electron';

async function openDialog(argument) {
	await ipcRenderer.invoke('i18n:setConfigPath');
	window.location.reload();
}

export default function ConfigSelector() {
	return (
		<div className="file-selector">
			<input type="button" onClick={() => openDialog()} value="Select project" />
		</div>
	);
}