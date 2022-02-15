import useLanguagesList from '../../hooks/useLanguagesList';

import AppView from './view.js';

export default function App(props) {
	return (
		<AppView
			{...props}
			useLanguagesList={useLanguagesList}
		/>
	);
}
