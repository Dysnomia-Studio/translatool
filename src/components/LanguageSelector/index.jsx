import useLanguagesList from '../../hooks/useLanguagesList';

import LanguageSelectorView from './view.jsx';

export default function LanguageSelector(props) {
	return (
		<LanguageSelectorView
			{...props}
			useLanguagesList={useLanguagesList}
		/>
	);
}
