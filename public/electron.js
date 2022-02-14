const path = require('path');
const fs = require('fs');

const { app, BrowserWindow, ipcMain } = require('electron');
const isDev = require('electron-is-dev');

function createWindow() {
	// Create the browser window.
	const win = new BrowserWindow({
		autoHideMenuBar: true,
		width: 1280,
		height: 720,
		webPreferences: {
			nodeIntegration: true,
        	contextIsolation: false,
		},
	});

	win.loadURL(
		isDev
			? 'http://localhost:3000'
			: `file://${path.join(__dirname, '../build/index.html')}`
	);
	// Open the DevTools.
	if (isDev) {
		win.webContents.openDevTools({ mode: 'detach' });
	}
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});

app.on('activate', () => {
	if (BrowserWindow.getAllWindows().length === 0) {
		createWindow();
	}
});


/**
 * IPC
 */
function parseJsonFile(filePath) {
	return JSON.parse(
		fs.readFileSync(
			filePath,
			'utf8'
		)
	);
}


const i18nPath = '18NLOCATION';


const i18nConfig = parseJsonFile(path.join(i18nPath, 'config.json'));

ipcMain.handle('i18n:getLanguages', () => {
	return i18nConfig.languages;
});

ipcMain.handle('i18n:getFiles', () => {
	return i18nConfig.files;
});

ipcMain.handle('i18n:getTranslations', (_, file, language) => {
	let filePath = path.join(i18nPath, file, `${language}.json`);
	if(!fs.existsSync(filePath)) {
		filePath = path.join(i18nPath, language, `${file}.json`);
	}

	if(!fs.existsSync(filePath)) {
		return {};
	}

	return parseJsonFile(filePath);
});