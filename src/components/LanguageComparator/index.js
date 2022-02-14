import useTranslation from '../../hooks/useTranslation';

import LanguageComparatorView from './view.js';

export default function LanguageComparator(props) {
	return (
		<LanguageComparatorView
			{...props}
			useTranslation={useTranslation}
		/>
	);
}
