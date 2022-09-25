import useLanguagesList from '../../hooks/useLanguagesList';

import AppView from './view';

export default function App(props) {
	return (
		<AppView
			{...props}
			useLanguagesList={useLanguagesList}
		/>
	);
}
