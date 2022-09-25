import { open } from '@tauri-apps/api/dialog';

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
		<div className="file-selector">
			<input type="button" onClick={() => openDialog(setSelectedFolder)} value="Select project" />
		</div>
	);
}