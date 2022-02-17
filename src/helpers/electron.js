let electron;

if(window && window.require) {
	electron = window.require('electron');
} else  { // NodeJS
	electron = {
		ipcRenderer: {
			invoke: (event) => {
				switch(event) {
					case 'i18n:getTranslation':
						return {}
					default:
						return [];
				}
			}
		}
	}
}

export default electron;
export const ipcRenderer = electron.ipcRenderer;
