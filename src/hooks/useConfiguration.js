import { useEffect, useState } from 'react';

import parseJsonFile from '../business/parseJsonFile';

/**
 * Get configuration on filesystem
 */
export default function useTranslation(selectedFolder, lastUpdate) {
	const [config, setConfiguration] = useState();

	useEffect(() => {
		if(!selectedFolder) {
			return;
		}

		(async() => {
			setConfiguration(await parseJsonFile(selectedFolder + '/config.json'));
		})();
	}, [selectedFolder, lastUpdate]);

	return config;
}
