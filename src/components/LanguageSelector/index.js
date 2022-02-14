import useLanguagesList from '../../hooks/useLanguagesList';

import LanguageSelectorView from './view.js';

export default function LanguageSelector(props) {
	return (
		<LanguageSelectorView
			{...props}
			useLanguagesList={useLanguagesList}
		/>
	);
}
