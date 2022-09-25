import { useState } from 'react';

import App from './components/App';
import ConfigSelector from './components/ConfigSelector';

export default function Index() {
	const [selectedFolder, setSelectedFolder] = useState(null);

	return (
		<>
			<ConfigSelector setSelectedFolder={setSelectedFolder} />
			<App selectedFolder={selectedFolder} />
		</>
	);
}