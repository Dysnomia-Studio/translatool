export const load = async(electron) => {
	const { app, BrowserWindow, ipcMain } = electron;

	const createWindow = () => {
		const win = new BrowserWindow({
			autoHideMenuBar: true,
			width: 1280,
			height: 720,
		});

		win.loadFile('index.html');
	};

	app.whenReady().then(() => {
		createWindow();
	});

	app.on('window-all-closed', () => {
		if (process.platform !== 'darwin') {
			app.quit();
		}
	});
};