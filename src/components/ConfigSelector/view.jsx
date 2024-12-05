import { open } from '@tauri-apps/plugin-dialog';

import './index.css';

async function openDialog(setSelectedFolder) {
	const res = await open({
		directory: true,
		title: 'Translation project',
		multiple: false
	});

	if(res === null) {
		return;
	}

	setSelectedFolder(res);
}

export default function ConfigSelector({ setSelectedFolder }) {
	return (
		<div className="config-selector">
			<input type="button" onClick={() => openDialog(setSelectedFolder)} value="Select project" />
		</div>
	);
}