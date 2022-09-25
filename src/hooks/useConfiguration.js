import { useEffect, useState } from 'react';

import parseJsonFile from '../business/parseJsonFile';

export default function useTranslation(selectedFolder) {
	const [config, setConfiguration] = useState();

	useEffect(() => {
		if(!selectedFolder) {
			return;
		}

		(async() => {
			setConfiguration(await parseJsonFile(selectedFolder + '/config.json'));
		})();
	}, [selectedFolder]);

	console.log(selectedFolder + '/config.js');
	console.log(config);

	return config;
}
